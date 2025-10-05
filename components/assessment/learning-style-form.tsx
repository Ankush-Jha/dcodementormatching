"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const LEARNING_PREFERENCES = [
  { value: "visual", label: "Visual", description: "I learn best with diagrams, videos, and demonstrations" },
  { value: "hands-on", label: "Hands-on", description: "I learn by doing and building projects" },
  { value: "reading", label: "Reading-based", description: "I prefer documentation, articles, and written guides" },
  { value: "discussion", label: "Discussion", description: "I learn through conversation and asking questions" },
]

const FEEDBACK_FREQUENCY = [
  { value: "immediate", label: "Immediate", description: "I want feedback as soon as possible" },
  { value: "weekly", label: "Weekly", description: "Weekly check-ins work best for me" },
  { value: "milestone", label: "Milestone-based", description: "Feedback at major milestones is sufficient" },
]

const CHALLENGE_LEVELS = [
  { value: "comfortable", label: "Comfortable", description: "I prefer gradual progression with clear guidance" },
  { value: "moderate", label: "Moderate Challenge", description: "I like some challenge but with support available" },
  { value: "high", label: "High Challenge", description: "Push me hard, I learn best under pressure" },
]

const PACE_PREFERENCES = [
  { value: "fast", label: "Fast", description: "I want to move quickly and cover a lot of ground" },
  { value: "moderate", label: "Moderate", description: "Balanced pace with time to absorb concepts" },
  { value: "slow", label: "Thorough", description: "I prefer deep understanding over speed" },
]

interface LearningStyleFormProps {
  data: any
  onChange: (data: any) => void
}

export function LearningStyleForm({ data, onChange }: LearningStyleFormProps) {
  const [learningPreference, setLearningPreference] = useState(data.learningPreference || "")
  const [feedbackFrequency, setFeedbackFrequency] = useState(data.feedbackFrequency || "")
  const [challengeLevel, setChallengeLevel] = useState(data.challengeLevel || "")
  const [pace, setPace] = useState(data.pace || "")

  const updateData = (updates: any) => {
    const newData = { ...data, ...updates }
    onChange(newData)
  }

  return (
    <div className="space-y-8">
      {/* Learning Preference */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">Learning Preference</Label>
        <RadioGroup
          value={learningPreference}
          onValueChange={(value) => {
            setLearningPreference(value)
            updateData({ learningPreference: value })
          }}
        >
          <div className="space-y-3">
            {LEARNING_PREFERENCES.map((pref) => (
              <Card
                key={pref.value}
                className={`p-4 cursor-pointer transition-colors ${
                  learningPreference === pref.value
                    ? "bg-primary/10 border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
                onClick={() => {
                  setLearningPreference(pref.value)
                  updateData({ learningPreference: pref.value })
                }}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={pref.value} id={pref.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={pref.value} className="cursor-pointer font-semibold text-foreground">
                      {pref.label}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">{pref.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Feedback Frequency */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">Feedback Frequency</Label>
        <RadioGroup
          value={feedbackFrequency}
          onValueChange={(value) => {
            setFeedbackFrequency(value)
            updateData({ feedbackFrequency: value })
          }}
        >
          <div className="space-y-3">
            {FEEDBACK_FREQUENCY.map((freq) => (
              <Card
                key={freq.value}
                className={`p-4 cursor-pointer transition-colors ${
                  feedbackFrequency === freq.value
                    ? "bg-primary/10 border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
                onClick={() => {
                  setFeedbackFrequency(freq.value)
                  updateData({ feedbackFrequency: freq.value })
                }}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={freq.value} id={freq.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={freq.value} className="cursor-pointer font-semibold text-foreground">
                      {freq.label}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">{freq.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Challenge Level */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">Challenge Comfort Level</Label>
        <RadioGroup
          value={challengeLevel}
          onValueChange={(value) => {
            setChallengeLevel(value)
            updateData({ challengeLevel: value })
          }}
        >
          <div className="space-y-3">
            {CHALLENGE_LEVELS.map((level) => (
              <Card
                key={level.value}
                className={`p-4 cursor-pointer transition-colors ${
                  challengeLevel === level.value
                    ? "bg-primary/10 border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
                onClick={() => {
                  setChallengeLevel(level.value)
                  updateData({ challengeLevel: level.value })
                }}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={level.value} className="cursor-pointer font-semibold text-foreground">
                      {level.label}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Pace Preference */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">Learning Pace</Label>
        <RadioGroup
          value={pace}
          onValueChange={(value) => {
            setPace(value)
            updateData({ pace: value })
          }}
        >
          <div className="space-y-3">
            {PACE_PREFERENCES.map((paceOption) => (
              <Card
                key={paceOption.value}
                className={`p-4 cursor-pointer transition-colors ${
                  pace === paceOption.value
                    ? "bg-primary/10 border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
                onClick={() => {
                  setPace(paceOption.value)
                  updateData({ pace: paceOption.value })
                }}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={paceOption.value} id={paceOption.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={paceOption.value} className="cursor-pointer font-semibold text-foreground">
                      {paceOption.label}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">{paceOption.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
