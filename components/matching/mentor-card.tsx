"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Users, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

interface MentorCardProps {
  mentor: {
    id: string
    name: string
    title: string
    company: string
    avatar: string
    compatibilityScore: number
    expertise: string[]
    timezone: string
    availability: string
    yearsExperience: number
    menteeCount: number
    rating: number
    bio: string
  }
  onConnect: (mentorId: string) => void
  onViewBreakdown: (mentorId: string) => void
}

export function MentorCard({ mentor, onConnect, onViewBreakdown }: MentorCardProps) {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar & Score */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src={mentor.avatar || "/placeholder.svg"}
              alt={mentor.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-primary/20"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center border-4 border-background">
              <div className="text-xl font-bold">{mentor.compatibilityScore}</div>
              <div className="text-[10px]">MATCH</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{mentor.name}</h3>
              <p className="text-muted-foreground">
                {mentor.title} at {mentor.company}
              </p>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20 flex-shrink-0">
              <TrendingUp className="w-3 h-3 mr-1" />
              Top Match
            </Badge>
          </div>

          <p className="text-foreground leading-relaxed mb-4">{mentor.bio}</p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {mentor.expertise.map((skill) => (
              <Badge key={skill} variant="outline" className="border-border text-foreground">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{mentor.yearsExperience} years exp</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{mentor.menteeCount} mentees</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-muted-foreground">{mentor.rating} rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{mentor.timezone}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>Available: {mentor.availability}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={() => onConnect(mentor.id)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Connect with {mentor.name.split(" ")[0]}
            </Button>
            <Button
              variant="outline"
              onClick={() => onViewBreakdown(mentor.id)}
              className="border-border text-foreground"
            >
              View Compatibility
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
