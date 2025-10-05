"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X, Code, Clock, BookOpen, Target } from "lucide-react"

interface CompatibilityBreakdownProps {
  mentor: {
    id: string
    name: string
    compatibilityScore: number
    compatibility: {
      technical: number
      availability: number
      learningStyle: number
      goals: number
    }
  }
  onClose: () => void
  onConnect: (mentorId: string) => void
}

export function CompatibilityBreakdown({ mentor, onClose, onConnect }: CompatibilityBreakdownProps) {
  const categories = [
    {
      icon: Code,
      label: "Technical Skills",
      score: mentor.compatibility.technical,
      description: "Alignment between your skill level and mentor's expertise areas",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      label: "Availability",
      score: mentor.compatibility.availability,
      description: "Matching timezone, schedule, and preferred meeting frequency",
      color: "text-green-500",
    },
    {
      icon: BookOpen,
      label: "Learning Style",
      score: mentor.compatibility.learningStyle,
      description: "Compatibility in teaching methods and learning preferences",
      color: "text-purple-500",
    },
    {
      icon: Target,
      label: "Goals Alignment",
      score: mentor.compatibility.goals,
      description: "How well your learning objectives match mentor's specialization",
      color: "text-orange-500",
    },
  ]

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-card border-border max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Compatibility Breakdown</h2>
              <p className="text-muted-foreground">Detailed analysis of your match with {mentor.name}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Overall Score */}
          <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">{mentor.compatibilityScore}%</div>
              <div className="text-lg text-foreground font-semibold">Overall Compatibility</div>
              <p className="text-sm text-muted-foreground mt-2">
                This is an excellent match! You share strong alignment across all key areas.
              </p>
            </div>
          </Card>

          {/* Category Breakdown */}
          <div className="space-y-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.label}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{category.label}</h3>
                        <span className="text-lg font-bold text-primary">{category.score}%</span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13">{category.description}</p>
                </div>
              )
            })}
          </div>

          {/* Action */}
          <div className="mt-8 pt-6 border-t border-border">
            <Button
              onClick={() => onConnect(mentor.id)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Connect with {mentor.name.split(" ")[0]}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
