// AI-powered compatibility matching algorithm for DCODE platform

interface MentorData {
  expertise_areas: string[]
  experience_years: number
  teaching_style: string
  max_mentees: number
  current_mentees: number
  timezone: string
}

interface MenteeData {
  current_skills: Record<string, string>
  skills_to_learn: string[]
  learning_approach: string
  timeline: string
  learning_pace: string
  hours_per_week: number
  timezone: string
}

interface CompatibilityScore {
  overall_score: number
  skill_overlap_score: number
  teaching_style_score: number
  experience_match_score: number
  availability_score: number
  breakdown: {
    skills: string
    teaching: string
    experience: string
    availability: string
  }
}

/**
 * Calculate compatibility score between a mentor and mentee
 * Returns a score from 0-100 with detailed breakdown
 */
export function calculateCompatibilityScore(mentor: MentorData, mentee: MenteeData): CompatibilityScore {
  // 1. Skills Overlap (40% weight)
  const skillOverlapScore = calculateSkillsOverlap(mentor.expertise_areas, mentee.skills_to_learn)

  // 2. Teaching Style vs Learning Approach (25% weight)
  const teachingStyleScore = calculateTeachingStyleMatch(mentor.teaching_style, mentee.learning_approach)

  // 3. Experience Level Appropriateness (20% weight)
  const experienceMatchScore = calculateExperienceMatch(mentor.experience_years, mentee.current_skills, mentee.timeline)

  // 4. Availability and Commitment (15% weight)
  const availabilityScore = calculateAvailabilityMatch(
    mentor.max_mentees,
    mentor.current_mentees,
    mentor.timezone,
    mentee.timezone,
    mentee.hours_per_week,
  )

  // Calculate weighted overall score
  const overallScore = Math.round(
    skillOverlapScore * 0.4 + teachingStyleScore * 0.25 + experienceMatchScore * 0.2 + availabilityScore * 0.15,
  )

  return {
    overall_score: overallScore,
    skill_overlap_score: skillOverlapScore,
    teaching_style_score: teachingStyleScore,
    experience_match_score: experienceMatchScore,
    availability_score: availabilityScore,
    breakdown: {
      skills: generateSkillsBreakdown(mentor.expertise_areas, mentee.skills_to_learn, skillOverlapScore),
      teaching: generateTeachingBreakdown(mentor.teaching_style, mentee.learning_approach, teachingStyleScore),
      experience: generateExperienceBreakdown(mentor.experience_years, experienceMatchScore),
      availability: generateAvailabilityBreakdown(mentor, mentee, availabilityScore),
    },
  }
}

/**
 * Calculate how well mentor's expertise matches mentee's learning goals
 */
function calculateSkillsOverlap(mentorSkills: string[], menteeGoals: string[]): number {
  if (menteeGoals.length === 0) return 50 // Neutral score if no goals specified

  const normalizedMentorSkills = mentorSkills.map((s) => s.toLowerCase())
  const normalizedMenteeGoals = menteeGoals.map((s) => s.toLowerCase())

  let matchCount = 0
  let partialMatchCount = 0

  for (const goal of normalizedMenteeGoals) {
    // Exact match
    if (normalizedMentorSkills.includes(goal)) {
      matchCount++
    } else {
      // Partial match (e.g., "React" matches "React Native")
      const hasPartialMatch = normalizedMentorSkills.some((skill) => skill.includes(goal) || goal.includes(skill))
      if (hasPartialMatch) {
        partialMatchCount++
      }
    }
  }

  // Calculate score: full points for exact matches, half points for partial matches
  const score = ((matchCount + partialMatchCount * 0.5) / menteeGoals.length) * 100
  return Math.min(Math.round(score), 100)
}

/**
 * Match teaching style with learning approach
 */
function calculateTeachingStyleMatch(teachingStyle: string, learningApproach: string): number {
  const compatibilityMatrix: Record<string, Record<string, number>> = {
    "hands-on": {
      "hands-on": 100,
      "project-based": 90,
      visual: 70,
      "theory-first": 50,
      reading: 60,
      discussion: 75,
    },
    "theory-first": {
      "theory-first": 100,
      reading: 90,
      discussion: 80,
      "hands-on": 50,
      "project-based": 60,
      visual: 65,
    },
    "project-based": {
      "project-based": 100,
      "hands-on": 95,
      visual: 75,
      discussion: 70,
      "theory-first": 60,
      reading: 65,
    },
    adaptive: {
      "hands-on": 90,
      "theory-first": 90,
      "project-based": 90,
      visual: 90,
      reading: 85,
      discussion: 85,
    },
    visual: {
      visual: 100,
      "hands-on": 80,
      "project-based": 75,
      discussion: 70,
      "theory-first": 60,
      reading: 65,
    },
  }

  const score = compatibilityMatrix[teachingStyle]?.[learningApproach] || 70
  return score
}

/**
 * Determine if mentor's experience level is appropriate for mentee
 */
function calculateExperienceMatch(mentorYears: number, menteeSkills: Record<string, string>, timeline: string): number {
  // Determine mentee's overall skill level
  const skillLevels = Object.values(menteeSkills)
  const isCompleteBeginner = skillLevels.length === 0
  const hasAdvancedSkills = skillLevels.some((level) => level === "advanced" || level === "expert")
  const hasIntermediateSkills = skillLevels.some((level) => level === "intermediate")

  // Match experience to mentee level
  if (isCompleteBeginner) {
    // Beginners benefit from mentors with 3-7 years (patient, remember being beginners)
    if (mentorYears >= 3 && mentorYears <= 7) return 95
    if (mentorYears >= 2 && mentorYears <= 9) return 85
    return 70
  } else if (hasAdvancedSkills) {
    // Advanced learners need very experienced mentors
    if (mentorYears >= 7) return 95
    if (mentorYears >= 5) return 80
    return 65
  } else if (hasIntermediateSkills) {
    // Intermediate learners flexible with 4+ years experience
    if (mentorYears >= 4 && mentorYears <= 8) return 95
    if (mentorYears >= 3) return 85
    return 70
  }

  return 75 // Default moderate match
}

/**
 * Check mentor availability and timezone compatibility
 */
function calculateAvailabilityMatch(
  maxMentees: number,
  currentMentees: number,
  mentorTimezone: string,
  menteeTimezone: string,
  menteeHoursPerWeek: number,
): number {
  let score = 100

  // Check if mentor has capacity
  if (currentMentees >= maxMentees) {
    return 0 // No availability
  }

  const capacityRatio = currentMentees / maxMentees
  if (capacityRatio > 0.7) {
    score -= 20 // Mentor is almost at capacity
  }

  // Timezone compatibility (simplified - in production, use proper timezone library)
  const timezoneCompatibility = calculateTimezoneCompatibility(mentorTimezone, menteeTimezone)
  score = score * (timezoneCompatibility / 100)

  // Hours per week consideration
  if (menteeHoursPerWeek < 5) {
    score -= 10 // Very low commitment might be challenging
  } else if (menteeHoursPerWeek > 20) {
    score += 5 // High commitment is positive
  }

  return Math.max(Math.round(score), 0)
}

/**
 * Calculate timezone compatibility (simplified)
 */
function calculateTimezoneCompatibility(tz1: string, tz2: string): number {
  // Same timezone = perfect
  if (tz1 === tz2) return 100

  // Extract continent/region for rough compatibility
  const region1 = tz1.split("/")[0]
  const region2 = tz2.split("/")[0]

  // Same region (e.g., both America) = good
  if (region1 === region2) return 85

  // Different regions but manageable (e.g., America and Europe)
  const compatiblePairs = [
    ["America", "Europe"],
    ["Europe", "Asia"],
    ["Asia", "America"],
  ]

  const isCompatible = compatiblePairs.some(
    (pair) => (pair[0] === region1 && pair[1] === region2) || (pair[1] === region1 && pair[0] === region2),
  )

  return isCompatible ? 70 : 50
}

// Breakdown generation functions
function generateSkillsBreakdown(mentorSkills: string[], menteeGoals: string[], score: number): string {
  const matches = menteeGoals.filter((goal) =>
    mentorSkills.some((skill) => skill.toLowerCase().includes(goal.toLowerCase())),
  )

  if (score >= 80) {
    return `Excellent match! Mentor has expertise in ${matches.length} of ${menteeGoals.length} skills you want to learn: ${matches.join(", ")}.`
  } else if (score >= 60) {
    return `Good match. Mentor can help with ${matches.length} of your learning goals: ${matches.join(", ")}.`
  } else if (score >= 40) {
    return `Moderate match. Mentor has some relevant expertise in: ${matches.join(", ")}.`
  } else {
    return `Limited overlap in specific skills, but mentor's experience may still be valuable.`
  }
}

function generateTeachingBreakdown(teachingStyle: string, learningApproach: string, score: number): string {
  if (score >= 90) {
    return `Perfect alignment! Mentor's ${teachingStyle} teaching style matches your ${learningApproach} learning preference.`
  } else if (score >= 70) {
    return `Good fit. Mentor's ${teachingStyle} approach complements your ${learningApproach} learning style.`
  } else {
    return `Different styles (${teachingStyle} vs ${learningApproach}), but can work with communication.`
  }
}

function generateExperienceBreakdown(years: number, score: number): string {
  if (score >= 90) {
    return `Mentor's ${years} years of experience is ideal for your current skill level.`
  } else if (score >= 70) {
    return `Mentor's ${years} years of experience is well-suited for your learning journey.`
  } else {
    return `Mentor has ${years} years of experience and can provide valuable guidance.`
  }
}

function generateAvailabilityBreakdown(mentor: MentorData, mentee: MenteeData, score: number): string {
  if (score === 0) {
    return `Mentor is currently at full capacity (${mentor.current_mentees}/${mentor.max_mentees} mentees).`
  } else if (score >= 80) {
    return `Great availability! Mentor has capacity and your timezones are compatible.`
  } else if (score >= 60) {
    return `Good availability. Some timezone differences but manageable with scheduling.`
  } else {
    return `Limited availability or timezone challenges may require flexible scheduling.`
  }
}

/**
 * Find top N mentor matches for a mentee
 */
export function findTopMatches(
  mentors: MentorData[],
  mentee: MenteeData,
  topN = 5,
): Array<{ mentor: MentorData; score: CompatibilityScore }> {
  const scoredMentors = mentors.map((mentor) => ({
    mentor,
    score: calculateCompatibilityScore(mentor, mentee),
  }))

  // Sort by overall score descending
  scoredMentors.sort((a, b) => b.score.overall_score - a.score.overall_score)

  return scoredMentors.slice(0, topN)
}
