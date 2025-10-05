"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"

type MentorProfileData = {
  title?: string
  company?: string
  expertise_areas?: string // comma-separated
  experience_years?: number
  max_mentees?: number
  bio?: string
}

export function MentorProfileForm({
  data,
  onChange,
}: {
  data: MentorProfileData
  onChange: (data: MentorProfileData) => void
}) {
  useEffect(() => {
    if (!data) onChange({})
  }, [data, onChange])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-foreground">
          Title
        </Label>
        <Input
          id="title"
          placeholder="Senior Software Engineer"
          value={data?.title || ""}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="bg-background border-border text-foreground"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-foreground">
          Company (optional)
        </Label>
        <Input
          id="company"
          placeholder="ACME Corp"
          value={data?.company || ""}
          onChange={(e) => onChange({ ...data, company: e.target.value })}
          className="bg-background border-border text-foreground"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="expertise" className="text-foreground">
          Expertise Areas (comma-separated)
        </Label>
        <Input
          id="expertise"
          placeholder="React, Node.js, Postgres"
          value={data?.expertise_areas || ""}
          onChange={(e) => onChange({ ...data, expertise_areas: e.target.value })}
          className="bg-background border-border text-foreground"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="experience_years" className="text-foreground">
            Years of Experience
          </Label>
          <Input
            id="experience_years"
            type="number"
            min={0}
            placeholder="5"
            value={data?.experience_years ?? ""}
            onChange={(e) => onChange({ ...data, experience_years: Number(e.target.value) })}
            className="bg-background border-border text-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="max_mentees" className="text-foreground">
            Max Mentees
          </Label>
          <Input
            id="max_mentees"
            type="number"
            min={1}
            max={10}
            placeholder="3"
            value={data?.max_mentees ?? ""}
            onChange={(e) => onChange({ ...data, max_mentees: Number(e.target.value) })}
            className="bg-background border-border text-foreground"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio" className="text-foreground">
          Short Bio
        </Label>
        <Textarea
          id="bio"
          placeholder="Share your mentoring philosophy and how you help mentees succeed..."
          value={data?.bio || ""}
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
          className="bg-background border-border text-foreground"
          rows={4}
        />
      </div>
    </div>
  )
}
