"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Star, Clock, MessageCircle, TrendingUp, Award } from "lucide-react"
import { MentorCard } from "@/components/matching/mentor-card"
import { CompatibilityBreakdown } from "@/components/matching/compatibility-breakdown"

// Mock mentor data - in production this would come from the matching algorithm
const MOCK_MENTORS = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Full-Stack Engineer",
    company: "Vercel",
    avatar: "/professional-woman-developer.png",
    compatibilityScore: 95,
    expertise: ["React", "Next.js", "TypeScript", "Node.js"],
    timezone: "UTC-8 (PST)",
    availability: "Weekday evenings",
    yearsExperience: 8,
    menteeCount: 12,
    rating: 4.9,
    bio: "Passionate about helping developers transition into full-stack roles. I specialize in React ecosystem and have mentored 12+ developers to successful careers.",
    compatibility: {
      technical: 98,
      availability: 92,
      learningStyle: 95,
      goals: 94,
    },
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "DevOps Lead",
    company: "GitHub",
    avatar: "/professional-man-developer.png",
    compatibilityScore: 92,
    expertise: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    timezone: "UTC-5 (EST)",
    availability: "Weekend mornings",
    yearsExperience: 10,
    menteeCount: 8,
    rating: 4.8,
    bio: "Helping developers master DevOps and cloud infrastructure. I focus on practical, hands-on learning with real-world projects.",
    compatibility: {
      technical: 88,
      availability: 95,
      learningStyle: 92,
      goals: 93,
    },
  },
  {
    id: "3",
    name: "Priya Patel",
    title: "Machine Learning Engineer",
    company: "OpenAI",
    avatar: "/professional-woman-ai-engineer.jpg",
    compatibilityScore: 89,
    expertise: ["Python", "TensorFlow", "PyTorch", "Data Science"],
    timezone: "UTC-8 (PST)",
    availability: "Flexible",
    yearsExperience: 6,
    menteeCount: 15,
    rating: 5.0,
    bio: "Specializing in ML/AI mentorship for beginners to intermediate learners. I believe in building strong fundamentals before diving into complex models.",
    compatibility: {
      technical: 85,
      availability: 90,
      learningStyle: 91,
      goals: 90,
    },
  },
  {
    id: "4",
    name: "Alex Rivera",
    title: "Mobile Development Lead",
    company: "Stripe",
    avatar: "/professional-developer-mobile.jpg",
    compatibilityScore: 87,
    expertise: ["React Native", "Swift", "Kotlin", "Mobile UX"],
    timezone: "UTC-6 (CST)",
    availability: "Weekday afternoons",
    yearsExperience: 7,
    menteeCount: 10,
    rating: 4.7,
    bio: "Mobile-first developer with a passion for creating delightful user experiences. I help developers build production-ready mobile apps.",
    compatibility: {
      technical: 82,
      availability: 88,
      learningStyle: 89,
      goals: 89,
    },
  },
  {
    id: "5",
    name: "Emma Wilson",
    title: "Frontend Architect",
    company: "Shopify",
    avatar: "/professional-woman-frontend-developer.jpg",
    compatibilityScore: 85,
    expertise: ["Vue.js", "CSS", "Design Systems", "Accessibility"],
    timezone: "UTC+0 (GMT)",
    availability: "Morning sessions",
    yearsExperience: 9,
    menteeCount: 20,
    rating: 4.9,
    bio: "Frontend specialist focused on building accessible, performant web applications. I love teaching design systems and modern CSS.",
    compatibility: {
      technical: 80,
      availability: 85,
      learningStyle: 88,
      goals: 87,
    },
  },
]

export default function MatchingPage() {
  const router = useRouter()
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const handleConnect = (mentorId: string) => {
    console.log("[v0] Connecting with mentor:", mentorId)
    router.push(`/dashboard?connected=${mentorId}`)
  }

  const handleViewBreakdown = (mentorId: string) => {
    setSelectedMentor(mentorId)
    setShowBreakdown(true)
  }

  const selectedMentorData = MOCK_MENTORS.find((m) => m.id === selectedMentor)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">DCODE</span>
          </div>
          <Button variant="outline" onClick={() => router.push("/dashboard")} className="border-border text-foreground">
            Skip to Dashboard
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Matching Complete</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-foreground text-balance">Your Perfect Mentor Matches</h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Based on your assessment, we've found {MOCK_MENTORS.length} highly compatible mentors. Each match is
              scored across technical skills, availability, learning style, and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Matching Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Card className="p-6 bg-card border-border text-center">
            <Award className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground mb-1">{MOCK_MENTORS.length}</div>
            <div className="text-sm text-muted-foreground">Top Matches</div>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <Star className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {Math.round(MOCK_MENTORS.reduce((acc, m) => acc + m.compatibilityScore, 0) / MOCK_MENTORS.length)}%
            </div>
            <div className="text-sm text-muted-foreground">Avg Compatibility</div>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {MOCK_MENTORS.reduce((acc, m) => acc + m.yearsExperience, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Combined Years</div>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {MOCK_MENTORS.reduce((acc, m) => acc + m.menteeCount, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Mentees Helped</div>
          </Card>
        </div>
      </div>

      {/* Mentor Cards */}
      <div className="container mx-auto px-4 py-8 pb-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {MOCK_MENTORS.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              onConnect={handleConnect}
              onViewBreakdown={handleViewBreakdown}
            />
          ))}
        </div>
      </div>

      {/* Compatibility Breakdown Modal */}
      {showBreakdown && selectedMentorData && (
        <CompatibilityBreakdown
          mentor={selectedMentorData}
          onClose={() => setShowBreakdown(false)}
          onConnect={handleConnect}
        />
      )}
    </div>
  )
}
