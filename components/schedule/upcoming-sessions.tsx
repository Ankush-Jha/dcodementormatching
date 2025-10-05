"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Clock, Calendar, MoreVertical, ExternalLink } from "lucide-react"
import Image from "next/image"

const SESSIONS = [
  {
    id: "1",
    title: "React Hooks Deep Dive",
    description: "Exploring advanced React hooks patterns and custom hooks",
    date: "Feb 15, 2024",
    time: "2:00 PM",
    duration: 60,
    status: "upcoming",
    mentor: {
      name: "Sarah Chen",
      avatar: "/professional-woman-developer.png",
    },
    meetingLink: "https://meet.google.com/abc-defg-hij",
    type: "google-meet",
  },
  {
    id: "2",
    title: "Code Review Session",
    description: "Review of your first PR and discussing best practices",
    date: "Feb 18, 2024",
    time: "10:00 AM",
    duration: 45,
    status: "upcoming",
    mentor: {
      name: "Sarah Chen",
      avatar: "/professional-woman-developer.png",
    },
    meetingLink: "https://meet.google.com/xyz-uvwx-yz",
    type: "google-meet",
  },
  {
    id: "3",
    title: "Weekly Check-in",
    description: "Progress update and planning for next week",
    date: "Feb 22, 2024",
    time: "3:30 PM",
    duration: 30,
    status: "upcoming",
    mentor: {
      name: "Sarah Chen",
      avatar: "/professional-woman-developer.png",
    },
    meetingLink: "https://meet.google.com/lmn-opqr-stu",
    type: "google-meet",
  },
]

export function UpcomingSessions() {
  return (
    <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Upcoming Sessions</h3>
        <Badge className="bg-[#00ff41]/20 text-[#00ff41] border-[#00ff41]/30">{SESSIONS.length} Scheduled</Badge>
      </div>

      <div className="space-y-4">
        {SESSIONS.map((session) => (
          <div
            key={session.id}
            className="p-5 bg-black border border-[#1a1a1a] rounded-lg hover:border-[#00ff41]/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">{session.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{session.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {session.time} • {session.duration} min
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span className="capitalize">{session.type.replace("-", " ")}</span>
                  </div>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a1a1a]">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <Image
                  src={session.mentor.avatar || "/placeholder.svg"}
                  alt={session.mentor.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <div className="text-sm font-medium text-white">{session.mentor.name}</div>
                  <div className="text-xs text-gray-400">Mentor</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Details
                </Button>
                <Button size="sm" className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
                  <Video className="h-4 w-4 mr-2" />
                  Join Meeting
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
