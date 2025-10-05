"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, LinkIcon } from "lucide-react"

interface CreateSessionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateSessionModal({ open, onOpenChange }: CreateSessionModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "60",
    meetingType: "google-meet",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle session creation
    console.log("Creating session:", formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0a0a0a] border-[#1a1a1a] text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Schedule New Session</DialogTitle>
          <DialogDescription className="text-gray-400">
            Create a new mentorship session with automatic meeting link generation
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white">
              Session Title
            </Label>
            <Input
              id="title"
              placeholder="e.g., React Hooks Deep Dive"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-black border-[#1a1a1a] text-white placeholder:text-gray-600 focus:border-[#00ff41]"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="What will you cover in this session?"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-black border-[#1a1a1a] text-white placeholder:text-gray-600 focus:border-[#00ff41] min-h-[100px]"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-white flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-black border-[#1a1a1a] text-white focus:border-[#00ff41]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-white flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="bg-black border-[#1a1a1a] text-white focus:border-[#00ff41]"
                required
              />
            </div>
          </div>

          {/* Duration and Meeting Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-white">
                Duration
              </Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
              >
                <SelectTrigger className="bg-black border-[#1a1a1a] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-[#1a1a1a] text-white">
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="meetingType" className="text-white flex items-center gap-2">
                <Video className="h-4 w-4" />
                Meeting Platform
              </Label>
              <Select
                value={formData.meetingType}
                onValueChange={(value) => setFormData({ ...formData, meetingType: value })}
              >
                <SelectTrigger className="bg-black border-[#1a1a1a] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-[#1a1a1a] text-white">
                  <SelectItem value="google-meet">Google Meet</SelectItem>
                  <SelectItem value="zoom">Zoom</SelectItem>
                  <SelectItem value="custom">Custom Link</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-lg">
            <div className="flex items-start gap-3">
              <LinkIcon className="h-5 w-5 text-[#00ff41] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-white font-medium mb-1">Automatic Meeting Link</p>
                <p className="text-xs text-gray-400">
                  A {formData.meetingType === "google-meet" ? "Google Meet" : "Zoom"} link will be automatically
                  generated and shared with your mentor when you create this session.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-[#1a1a1a] text-white hover:bg-[#1a1a1a] bg-transparent"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
              Create Session
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
