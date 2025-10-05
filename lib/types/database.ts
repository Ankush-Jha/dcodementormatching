export interface Meeting {
  id: string
  mentorship_match_id: string
  scheduled_at: string
  duration_minutes: number
  meeting_url?: string
  notes?: string
  completed: boolean
  created_at: string
}

export interface Session {
  id: string
  match_id: string
  title: string
  description?: string
  scheduled_date: string
  duration: number // minutes
  meeting_link?: string // Google Meet, Zoom, etc.
  status: "scheduled" | "completed" | "cancelled" | "rescheduled"
  created_by: string
  notes?: string
  created_at: string
  updated_at?: string
}

export interface Resource {
  id: string
  match_id: string
  uploader_id: string
  title: string
  description?: string
  file_url: string
  file_type: string
  tags: string[]
  created_at: string
}

export interface ProgressTracking {
  id: string
  match_id: string
  milestone: string
  description?: string
  status: "pending" | "in_progress" | "completed"
  target_date?: string
  completed_date?: string
  created_at: string
}

export interface SessionFeedback {
  id: string
  session_id: string
  reviewer_id: string
  rating: number // 1-5
  feedback: string
  created_at: string
}

export interface CalendarEvent {
  id: string
  user_id: string
  title: string
  start: Date
  end: Date
  type: "session" | "availability" | "personal"
  session_id?: string
  color?: string
}
