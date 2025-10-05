"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, Video, Plus, FileText } from "lucide-react"
import { CreateSessionModal } from "@/components/schedule/create-session-modal"
import { CalendarView } from "@/components/schedule/calendar-view"
import { UpcomingSessions } from "@/components/schedule/upcoming-sessions"
import { ResourceLibrary } from "@/components/schedule/resource-library"

export function ScheduleTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [view, setView] = useState<"calendar" | "list">("calendar")

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Schedule & Resources</h2>
          <p className="text-gray-400">Manage your mentorship sessions and learning materials</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent"
            onClick={() => setView(view === "calendar" ? "list" : "calendar")}
          >
            <CalendarIcon className="h-4 w-4 mr-2" />
            {view === "calendar" ? "List View" : "Calendar View"}
          </Button>
          <Button className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90" onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Session
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00ff41]/10 rounded-lg">
              <CalendarIcon className="h-5 w-5 text-[#00ff41]" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">3</div>
              <div className="text-xs text-gray-400">Upcoming Sessions</div>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">12</div>
              <div className="text-xs text-gray-400">Hours This Month</div>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Video className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">8</div>
              <div className="text-xs text-gray-400">Completed Sessions</div>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <FileText className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">24</div>
              <div className="text-xs text-gray-400">Shared Resources</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar/Sessions - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">{view === "calendar" ? <CalendarView /> : <UpcomingSessions />}</div>

        {/* Sidebar - Takes 1 column */}
        <div className="space-y-6">
          <ResourceLibrary />
        </div>
      </div>

      {/* Create Session Modal */}
      <CreateSessionModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} />
    </div>
  )
}
