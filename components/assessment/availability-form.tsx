"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const TIME_SLOTS = ["Morning (6AM-12PM)", "Afternoon (12PM-6PM)", "Evening (6PM-12AM)"]

const COMMUNICATION_CHANNELS = ["Video Call", "Chat/Messaging", "In-Person (if local)"]

const MEETING_FREQUENCY = ["Daily", "2-3 times per week", "Weekly", "Bi-weekly", "Monthly"]

interface AvailabilityFormProps {
  data: any
  onChange: (data: any) => void
}

export function AvailabilityForm({ data, onChange }: AvailabilityFormProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>(data.days || [])
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>(data.timeSlots || [])
  const [selectedChannels, setSelectedChannels] = useState<string[]>(data.channels || [])
  const [frequency, setFrequency] = useState(data.frequency || "")
  const [hoursPerWeek, setHoursPerWeek] = useState(data.hoursPerWeek || "")

  const updateData = (updates: any) => {
    const newData = { ...data, ...updates }
    onChange(newData)
  }

  const toggleDay = (day: string) => {
    const updated = selectedDays.includes(day) ? selectedDays.filter((d) => d !== day) : [...selectedDays, day]
    setSelectedDays(updated)
    updateData({ days: updated })
  }

  const toggleTimeSlot = (slot: string) => {
    const updated = selectedTimeSlots.includes(slot)
      ? selectedTimeSlots.filter((s) => s !== slot)
      : [...selectedTimeSlots, slot]
    setSelectedTimeSlots(updated)
    updateData({ timeSlots: updated })
  }

  const toggleChannel = (channel: string) => {
    const updated = selectedChannels.includes(channel)
      ? selectedChannels.filter((c) => c !== channel)
      : [...selectedChannels, channel]
    setSelectedChannels(updated)
    updateData({ channels: updated })
  }

  return (
    <div className="space-y-6">
      {/* Available Days */}
      <div>
        <Label className="text-lg font-semibold mb-3 block text-foreground">Available Days</Label>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((day) => (
            <Badge
              key={day}
              variant={selectedDays.includes(day) ? "default" : "outline"}
              className={`cursor-pointer transition-colors px-4 py-2 ${
                selectedDays.includes(day)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </Badge>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <Label className="text-lg font-semibold mb-3 block text-foreground">Preferred Time Slots</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TIME_SLOTS.map((slot) => (
            <Card
              key={slot}
              className={`p-4 cursor-pointer transition-colors text-center ${
                selectedTimeSlots.includes(slot)
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
              onClick={() => toggleTimeSlot(slot)}
            >
              <span className={selectedTimeSlots.includes(slot) ? "text-primary font-medium" : "text-foreground"}>
                {slot}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* Communication Channels */}
      <div>
        <Label className="text-lg font-semibold mb-3 block text-foreground">Preferred Communication Channels</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMMUNICATION_CHANNELS.map((channel) => (
            <Card
              key={channel}
              className={`p-4 cursor-pointer transition-colors ${
                selectedChannels.includes(channel)
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
              onClick={() => toggleChannel(channel)}
            >
              <span className={selectedChannels.includes(channel) ? "text-primary font-medium" : "text-foreground"}>
                {channel}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* Meeting Frequency */}
      <div>
        <Label className="text-lg font-semibold mb-3 block text-foreground">Preferred Meeting Frequency</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MEETING_FREQUENCY.map((freq) => (
            <Card
              key={freq}
              className={`p-4 cursor-pointer transition-colors text-center ${
                frequency === freq
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
              onClick={() => {
                setFrequency(freq)
                updateData({ frequency: freq })
              }}
            >
              <span className={frequency === freq ? "text-primary font-medium" : "text-foreground"}>{freq}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Hours Per Week */}
      <div>
        <Label className="text-lg font-semibold mb-3 block text-foreground">Maximum Hours Per Week</Label>
        <Select
          value={hoursPerWeek}
          onValueChange={(value) => {
            setHoursPerWeek(value)
            updateData({ hoursPerWeek: value })
          }}
        >
          <SelectTrigger className="bg-background border-border text-foreground">
            <SelectValue placeholder="Select hours per week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-2">1-2 hours</SelectItem>
            <SelectItem value="3-5">3-5 hours</SelectItem>
            <SelectItem value="6-10">6-10 hours</SelectItem>
            <SelectItem value="10+">10+ hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
