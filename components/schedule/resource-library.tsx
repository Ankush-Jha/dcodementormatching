"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, VideoIcon, Code, LinkIcon, Download, Upload } from "lucide-react"

const RESOURCES = [
  {
    id: "1",
    title: "React Hooks Cheat Sheet",
    type: "document",
    size: "2.4 MB",
    uploadedBy: "Sarah Chen",
    uploadedAt: "2 days ago",
    tags: ["react", "hooks", "reference"],
  },
  {
    id: "2",
    title: "TypeScript Best Practices",
    type: "video",
    size: "45 MB",
    uploadedBy: "Sarah Chen",
    uploadedAt: "1 week ago",
    tags: ["typescript", "tutorial"],
  },
  {
    id: "3",
    title: "First PR Walkthrough",
    type: "code",
    size: "1.2 MB",
    uploadedBy: "You",
    uploadedAt: "3 days ago",
    tags: ["git", "pr", "workflow"],
  },
  {
    id: "4",
    title: "Open Source Contribution Guide",
    type: "link",
    uploadedBy: "Sarah Chen",
    uploadedAt: "1 week ago",
    tags: ["open-source", "guide"],
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "document":
      return FileText
    case "video":
      return VideoIcon
    case "code":
      return Code
    case "link":
      return LinkIcon
    default:
      return FileText
  }
}

const getColor = (type: string) => {
  switch (type) {
    case "document":
      return "text-blue-500 bg-blue-500/10"
    case "video":
      return "text-purple-500 bg-purple-500/10"
    case "code":
      return "text-[#00ff41] bg-[#00ff41]/10"
    case "link":
      return "text-yellow-500 bg-yellow-500/10"
    default:
      return "text-gray-500 bg-gray-500/10"
  }
}

export function ResourceLibrary() {
  const [filter, setFilter] = useState<string>("all")

  return (
    <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Resource Library</h3>
        <Button size="sm" variant="outline" className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent">
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["all", "document", "video", "code", "link"].map((type) => (
          <Badge
            key={type}
            variant="outline"
            className={`cursor-pointer transition-colors ${
              filter === type
                ? "bg-[#00ff41]/20 text-[#00ff41] border-[#00ff41]/30"
                : "border-[#1a1a1a] text-gray-400 hover:border-[#00ff41]/30"
            }`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        ))}
      </div>

      {/* Resources List */}
      <div className="space-y-3">
        {RESOURCES.filter((r) => filter === "all" || r.type === filter).map((resource) => {
          const Icon = getIcon(resource.type)
          const colorClass = getColor(resource.type)

          return (
            <div
              key={resource.id}
              className="p-3 bg-black border border-[#1a1a1a] rounded-lg hover:border-[#00ff41]/30 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded ${colorClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white mb-1 truncate">{resource.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span>{resource.uploadedBy}</span>
                    <span>•</span>
                    <span>{resource.uploadedAt}</span>
                    {resource.size && (
                      <>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-[#1a1a1a] text-gray-500 text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      <Button variant="outline" className="w-full mt-4 border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent">
        View All Resources
      </Button>
    </Card>
  )
}
