"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, GitPullRequest } from "lucide-react"

const RECOMMENDED_ISSUES = [
  {
    id: "1",
    title: "Add dark mode toggle to settings page",
    repo: "vercel/next.js",
    difficulty: "Beginner",
    tags: ["React", "CSS", "UI"],
    description: "Implement a dark mode toggle in the settings page using the existing theme system.",
    matchScore: 95,
    estimatedTime: "2-3 hours",
  },
  {
    id: "2",
    title: "Implement user authentication with NextAuth",
    repo: "shadcn/ui",
    difficulty: "Intermediate",
    tags: ["Next.js", "Authentication", "TypeScript"],
    description: "Add NextAuth.js integration for user authentication with multiple providers.",
    matchScore: 88,
    estimatedTime: "4-6 hours",
  },
  {
    id: "3",
    title: "Create reusable data table component",
    repo: "tanstack/table",
    difficulty: "Intermediate",
    tags: ["React", "TypeScript", "Components"],
    description: "Build a flexible data table component with sorting, filtering, and pagination.",
    matchScore: 82,
    estimatedTime: "6-8 hours",
  },
]

export function IssueRecommendations() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Recommended Issues</h2>
        <Button variant="outline" size="sm" className="border-border text-foreground bg-transparent">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {RECOMMENDED_ISSUES.map((issue) => (
          <Card key={issue.id} className="p-4 bg-background border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <GitPullRequest className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{issue.repo}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{issue.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{issue.description}</p>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-sm font-semibold">{issue.matchScore}%</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className={
                  issue.difficulty === "Beginner"
                    ? "border-green-500 text-green-500"
                    : "border-orange-500 text-orange-500"
                }
              >
                {issue.difficulty}
              </Badge>
              {issue.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-border text-foreground">
                  {tag}
                </Badge>
              ))}
              <span className="text-xs text-muted-foreground ml-auto">{issue.estimatedTime}</span>
            </div>

            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Issue on GitHub
            </Button>
          </Card>
        ))}
      </div>
    </Card>
  )
}
