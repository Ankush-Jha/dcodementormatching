"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const MILESTONES = [
  {
    id: "1",
    title: "First Pull Request",
    description: "Submit your first PR to an open source project",
    status: "completed",
    completedDate: "2 weeks ago",
  },
  {
    id: "2",
    title: "5 Issues Completed",
    description: "Successfully complete 5 GitHub issues",
    status: "completed",
    completedDate: "1 week ago",
  },
  {
    id: "3",
    title: "Master React Hooks",
    description: "Complete 3 projects using advanced React hooks",
    status: "in-progress",
    progress: 66,
  },
  {
    id: "4",
    title: "Build Full-Stack App",
    description: "Create a complete application with frontend and backend",
    status: "in-progress",
    progress: 40,
  },
  {
    id: "5",
    title: "Contribute to Major Project",
    description: "Make a significant contribution to a popular open source project",
    status: "upcoming",
  },
]

const SKILLS_PROGRESS = [
  { skill: "React", level: 85, target: 90 },
  { skill: "TypeScript", level: 70, target: 85 },
  { skill: "Node.js", level: 60, target: 80 },
  { skill: "Git & GitHub", level: 75, target: 85 },
]

export function ProgressTracker() {
  return (
    <div className="space-y-6">
      {/* Skills Progress */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Skills Progress</h2>
        <div className="space-y-6">
          {SKILLS_PROGRESS.map((item) => (
            <div key={item.skill}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">{item.skill}</span>
                <span className="text-sm text-muted-foreground">
                  {item.level}% / {item.target}%
                </span>
              </div>
              <Progress value={item.level} className="h-3" />
            </div>
          ))}
        </div>
      </Card>

      {/* Milestones */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Learning Milestones</h2>
        <div className="space-y-4">
          {MILESTONES.map((milestone, index) => (
            <div key={milestone.id} className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.status === "completed"
                      ? "bg-primary text-primary-foreground"
                      : milestone.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {milestone.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : milestone.status === "in-progress" ? (
                    <Clock className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>
                {index < MILESTONES.length - 1 && (
                  <div className={`w-0.5 h-16 ${milestone.status === "completed" ? "bg-primary" : "bg-border"}`} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                  <Badge
                    variant={milestone.status === "completed" ? "default" : "outline"}
                    className={
                      milestone.status === "completed"
                        ? "bg-primary text-primary-foreground"
                        : milestone.status === "in-progress"
                          ? "border-primary text-primary"
                          : "border-border text-muted-foreground"
                    }
                  >
                    {milestone.status === "completed"
                      ? "Completed"
                      : milestone.status === "in-progress"
                        ? "In Progress"
                        : "Upcoming"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                {milestone.status === "completed" && (
                  <p className="text-xs text-muted-foreground">{milestone.completedDate}</p>
                )}
                {milestone.status === "in-progress" && milestone.progress && (
                  <div className="mt-3">
                    <Progress value={milestone.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{milestone.progress}% complete</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
