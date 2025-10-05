"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Video, Clock } from "lucide-react"

const MOCK_SESSIONS = [
  {
    id: "1",
    title: "React Hooks Deep Dive",
    date: "2024-02-15",
    time: "14:00",
    duration: 60,
    type: "session",
    meetingLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "2",
    title: "Code Review Session",
    date: "2024-02-18",
    time: "10:00",
    duration: 45,
    type: "session",
    meetingLink: "https://meet.google.com/xyz-uvwx-yz",
  },
  {
    id: "3",
    title: "Weekly Check-in",
    date: "2024-02-22",
    time: "15:30",
    duration: 30,
    type: "session",
    meetingLink: "https://meet.google.com/lmn-opqr-stu",
  },
]

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate)

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const getSessionsForDay = (day: number) => {
    const dateStr = `2024-02-${day.toString().padStart(2, "0")}`
    return MOCK_SESSIONS.filter((s) => s.date === dateStr)
  }

  return (
    <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={previousMonth}
            className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMonth}
            className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day Headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-gray-400 py-2">
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const sessions = getSessionsForDay(day)
          const isToday = day === 15 // Mock today as 15th

          return (
            <div
              key={day}
              className={`aspect-square p-2 rounded-lg border transition-colors ${
                isToday
                  ? "border-[#00ff41] bg-[#00ff41]/5"
                  : sessions.length > 0
                    ? "border-[#1a1a1a] bg-black hover:border-[#00ff41]/30"
                    : "border-[#1a1a1a] bg-black hover:border-[#1a1a1a]"
              }`}
            >
              <div className="text-sm font-medium text-white mb-1">{day}</div>
              {sessions.length > 0 && (
                <div className="space-y-1">
                  {sessions.slice(0, 2).map((session) => (
                    <div
                      key={session.id}
                      className="text-[10px] bg-[#00ff41]/20 text-[#00ff41] px-1 py-0.5 rounded truncate"
                    >
                      {session.time}
                    </div>
                  ))}
                  {sessions.length > 2 && <div className="text-[10px] text-gray-400">+{sessions.length - 2} more</div>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Today's Sessions */}
      <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
        <h4 className="text-sm font-semibold text-white mb-3">Today's Sessions</h4>
        <div className="space-y-2">
          {MOCK_SESSIONS.filter((s) => s.date === "2024-02-15").map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-3 bg-black border border-[#1a1a1a] rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00ff41]/10 rounded">
                  <Video className="h-4 w-4 text-[#00ff41]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{session.title}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {session.time} • {session.duration} min
                  </div>
                </div>
              </div>
              <Button size="sm" className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
                Join
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
