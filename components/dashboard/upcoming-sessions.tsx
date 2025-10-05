"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"
import Image from "next/image"

const UPCOMING_SESSIONS = [
  {
    id: "1",
    title: "Code Review: React Hooks Project",
    date: "Tomorrow",
    time: "2:00 PM - 3:00 PM",
    type: "Video Call",
  },
  {
    id: "2",
    title: "Weekly Check-in & Goal Setting",
    date: "Friday, Oct 10",
    time: "10:00 AM - 10:30 AM",
    type: "Video Call",
  },
]

interface UpcomingSessionsProps {
  mentor: {
    name: string
    avatar: string
    title: string
  }
}

export function UpcomingSessions({ mentor }: UpcomingSessionsProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Upcoming Sessions</h2>

      {/* Mentor Info */}
      <div className="flex items-center gap-3 mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <Image
          src={mentor.avatar || "/placeholder.svg"}
          alt={mentor.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold text-foreground">{mentor.name}</h3>
          <p className="text-sm text-muted-foreground">{mentor.title}</p>
        </div>
      </div>

      {/* Sessions */}
      <div className="space-y-4">
        {UPCOMING_SESSIONS.map((session) => (
          <Card key={session.id} className="p-4 bg-background border-border">
            <h3 className="font-semibold text-foreground mb-3">{session.title}</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{session.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="w-4 h-4" />
                <span>{session.type}</span>
              </div>
            </div>
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Join Session
            </Button>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4 border-border text-foreground bg-transparent">
        <Calendar className="w-4 h-4 mr-2" />
        Schedule New Session
      </Button>
    </Card>
  )
}
