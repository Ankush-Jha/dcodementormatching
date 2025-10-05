"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const PROGRAMMING_LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "C#",
]

const FRAMEWORKS = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Spring Boot",
  "Laravel",
  "Ruby on Rails",
  ".NET",
]

const DOMAINS = [
  "Web Development",
  "Mobile Development",
  "Backend Development",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
]

const PROFICIENCY_LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert"]

const SKILLS_TO_LEARN: string[] = Array.from(
  new Set([
    ...PROGRAMMING_LANGUAGES,
    ...FRAMEWORKS,
    "Databases",
    "APIs",
    "Testing",
    "DevOps",
    "Security",
    "Cloud",
    "System Design",
  ]),
)

interface TechnicalSkillsFormProps {
  data: any
  onChange: (data: any) => void
}

export function TechnicalSkillsForm({ data, onChange }: TechnicalSkillsFormProps) {
  const [selectedLanguages, setSelectedLanguages] = useState<Record<string, string>>(data.languages || {})
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(data.frameworks || [])
  const [selectedDomains, setSelectedDomains] = useState<string[]>(data.domains || [])
  const [skillsToLearn, setSkillsToLearn] = useState<string[]>(data.skillsToLearn || [])

  const toggleLanguage = (lang: string, level: string) => {
    const updated = { ...selectedLanguages }
    if (updated[lang] === level) {
      delete updated[lang]
    } else {
      updated[lang] = level
    }
    setSelectedLanguages(updated)
    onChange({
      ...data,
      languages: updated,
      frameworks: selectedFrameworks,
      domains: selectedDomains,
      skillsToLearn: skillsToLearn,
    })
  }

  const toggleFramework = (framework: string) => {
    const updated = selectedFrameworks.includes(framework)
      ? selectedFrameworks.filter((f) => f !== framework)
      : [...selectedFrameworks, framework]
    setSelectedFrameworks(updated)
    onChange({
      ...data,
      languages: selectedLanguages,
      frameworks: updated,
      domains: selectedDomains,
      skillsToLearn: skillsToLearn,
    })
  }

  const toggleDomain = (domain: string) => {
    const updated = selectedDomains.includes(domain)
      ? selectedDomains.filter((d) => d !== domain)
      : [...selectedDomains, domain]
    setSelectedDomains(updated)
    onChange({
      ...data,
      languages: selectedLanguages,
      frameworks: selectedFrameworks,
      domains: updated,
      skillsToLearn: skillsToLearn,
    })
  }

  const toggleSkillToLearn = (skill: string) => {
    const updated = skillsToLearn.includes(skill) ? skillsToLearn.filter((s) => s !== skill) : [...skillsToLearn, skill]
    setSkillsToLearn(updated)
    onChange({
      ...data,
      languages: selectedLanguages,
      frameworks: selectedFrameworks,
      domains: selectedDomains,
      skillsToLearn: updated,
    })
  }

  return (
    <div className="space-y-8">
      {/* Programming Languages */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">
          Programming Languages
          <span className="text-sm font-normal text-muted-foreground ml-2">(Select your proficiency level)</span>
        </Label>
        <div className="space-y-3">
          {PROGRAMMING_LANGUAGES.map((lang) => (
            <Card key={lang} className="p-4 bg-background border-border">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="font-medium text-foreground">{lang}</span>
                <div className="flex gap-2">
                  {PROFICIENCY_LEVELS.map((level) => (
                    <Badge
                      key={level}
                      variant={selectedLanguages[lang] === level ? "default" : "outline"}
                      className={`cursor-pointer transition-colors ${
                        selectedLanguages[lang] === level
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                      onClick={() => toggleLanguage(lang, level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">
          Frameworks & Libraries
          <span className="text-sm font-normal text-muted-foreground ml-2">(Select all that apply)</span>
        </Label>
        <div className="flex flex-wrap gap-2">
          {FRAMEWORKS.map((framework) => (
            <Badge
              key={framework}
              variant={selectedFrameworks.includes(framework) ? "default" : "outline"}
              className={`cursor-pointer transition-colors px-4 py-2 ${
                selectedFrameworks.includes(framework)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
              onClick={() => toggleFramework(framework)}
            >
              {framework}
            </Badge>
          ))}
        </div>
      </div>

      {/* Domains */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">
          Domain Expertise
          <span className="text-sm font-normal text-muted-foreground ml-2">(Select your areas of interest)</span>
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DOMAINS.map((domain) => (
            <Card
              key={domain}
              className={`p-4 cursor-pointer transition-colors ${
                selectedDomains.includes(domain)
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
              onClick={() => toggleDomain(domain)}
            >
              <span className={selectedDomains.includes(domain) ? "text-primary font-medium" : "text-foreground"}>
                {domain}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills You Want to Learn */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">
          Skills You Want to Learn
          <span className="text-sm font-normal text-muted-foreground ml-2">(Select all that apply)</span>
        </Label>
        <div className="flex flex-wrap gap-2">
          {SKILLS_TO_LEARN.map((skill) => (
            <Badge
              key={skill}
              variant={skillsToLearn.includes(skill) ? "default" : "outline"}
              className={`cursor-pointer transition-colors px-4 py-2 ${
                skillsToLearn.includes(skill)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
              onClick={() => toggleSkillToLearn(skill)}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
