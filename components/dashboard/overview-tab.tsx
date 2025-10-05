"use client"

import { ProgressTracker } from "@/components/dashboard/progress-tracker"
import { IssueRecommendations } from "@/components/dashboard/issue-recommendations"
import { UpcomingSessions } from "@/components/schedule/upcoming-sessions"

export function OverviewTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main overview content */}
      <div className="lg:col-span-2 space-y-6">
        <ProgressTracker />
        <IssueRecommendations />
      </div>
      {/* Sidebar */}
      <div className="space-y-6">
        <UpcomingSessions
          mentor={{
            name: "Sarah Johnson",
            avatar: "/mentor-avatar.jpg",
            title: "Senior Frontend Engineer",
          }}
        />
      </div>
    </div>
  )
}
