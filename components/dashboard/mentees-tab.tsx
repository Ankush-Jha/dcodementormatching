"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { demoMentees } from "@/lib/data/demo-mentees"

export function MenteesTab() {
  const mentees = demoMentees.slice(0, 6)
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mentees.map((m) => (
        <Card key={m.id} className="p-4 bg-card border-border">
          <div className="flex items-center gap-3 mb-3">
            <img src={m.avatar || "/placeholder.svg"} alt={m.name} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium text-foreground">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.current_role || "Mentee"}</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground line-clamp-3 mb-4">{m.bio}</div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Message
            </Button>
            <Button size="sm" variant="outline" className="border-border text-foreground bg-transparent">
              View Profile
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
