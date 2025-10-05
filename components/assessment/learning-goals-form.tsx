"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

const TIMELINES = ["1-3 months", "3-6 months", "6-12 months", "12+ months"]

interface LearningGoalsFormProps {
  data: any
  onChange: (data: any) => void
}

export function LearningGoalsForm({ data, onChange }: LearningGoalsFormProps) {
  const [timeline, setTimeline] = useState(data.timeline || "")
  const [successCriteria, setSuccessCriteria] = useState(data.successCriteria || "")

  const updateData = (updates: any) => {
    const newData = { ...data, ...updates }
    onChange(newData)
  }

  return (
    <div className="space-y-6">
      {/* Timeline */}
      <div>
        <Label className="text-lg font-semibold mb-4 block text-foreground">Expected Timeline</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIMELINES.map((time) => (
            <Card
              key={time}
              className={`p-4 cursor-pointer transition-colors text-center ${
                timeline === time
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
              onClick={() => {
                setTimeline(time)
                updateData({ timeline: time })
              }}
            >
              <span className={timeline === time ? "text-primary font-medium" : "text-foreground"}>{time}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Criteria */}
      <div>
        <Label htmlFor="success" className="text-lg font-semibold mb-2 block text-foreground">
          How will you measure success?
        </Label>
        <p className="text-sm text-muted-foreground mb-3">Describe what successful mentorship looks like for you</p>
        <Textarea
          id="success"
          placeholder="e.g., Successfully merge 5 pull requests, build a full-stack app, land a developer job..."
          value={successCriteria}
          onChange={(e) => {
            setSuccessCriteria(e.target.value)
            updateData({ successCriteria: e.target.value })
          }}
          rows={4}
          className="bg-background border-border text-foreground"
        />
      </div>
    </div>
  )
}
