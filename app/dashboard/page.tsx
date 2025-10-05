"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { OverviewTab } from "@/components/dashboard/overview-tab"
import { MessagesTab } from "@/components/dashboard/messages-tab"
import { IssuesTab } from "@/components/dashboard/issues-tab"
import { ProgressTab } from "@/components/dashboard/progress-tab"
import { ScheduleTab } from "@/components/dashboard/schedule-tab"
import { MenteesTab } from "@/components/dashboard/mentees-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, GitPullRequest, TrendingUp, Home, Calendar, Users } from "lucide-react"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const role = (searchParams.get("role") === "mentor" ? "mentor" : "mentee") as "mentor" | "mentee"
  const [activeTab, setActiveTab] = useState(role === "mentor" ? "overview" : "overview")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {role === "mentor" ? "Mentor Dashboard" : "Dashboard"}
            </h1>
            <p className="text-muted-foreground">
              {role === "mentor" ? "Manage mentees and sessions" : "Track your mentorship progress and contributions"}
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-card border border-border p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
              >
                <Home className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>

              {role === "mentor" ? (
                <>
                  <TabsTrigger
                    value="mentees"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Mentees
                  </TabsTrigger>
                  <TabsTrigger
                    value="messages"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="schedule"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger
                    value="messages"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="issues"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <GitPullRequest className="h-4 w-4 mr-2" />
                    Issues
                  </TabsTrigger>
                  <TabsTrigger
                    value="progress"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Progress
                  </TabsTrigger>
                  <TabsTrigger
                    value="schedule"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </TabsTrigger>
                </>
              )}
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <OverviewTab />
            </TabsContent>

            {role === "mentor" ? (
              <>
                <TabsContent value="mentees" className="mt-6">
                  <MenteesTab />
                </TabsContent>
                <TabsContent value="messages" className="mt-6">
                  <MessagesTab />
                </TabsContent>
                <TabsContent value="schedule" className="mt-6">
                  <ScheduleTab />
                </TabsContent>
              </>
            ) : (
              <>
                <TabsContent value="messages" className="mt-6">
                  <MessagesTab />
                </TabsContent>
                <TabsContent value="issues" className="mt-6">
                  <IssuesTab />
                </TabsContent>
                <TabsContent value="progress" className="mt-6">
                  <ProgressTab />
                </TabsContent>
                <TabsContent value="schedule" className="mt-6">
                  <ScheduleTab />
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
