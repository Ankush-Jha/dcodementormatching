"use client"

import { MessagingPanel } from "@/components/dashboard/messaging-panel"

export function MessagesTab() {
  return (
    <div className="space-y-6">
      <MessagingPanel
        mentor={{
          name: "Sarah Johnson",
          avatar: "/mentor-avatar.jpg",
          title: "Senior Frontend Engineer",
        }}
      />
    </div>
  )
}
