import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { matchId, scheduledAt, durationMinutes, platform } = body

    if (!matchId || !scheduledAt || !durationMinutes) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate Google Meet link (in production, use Google Calendar API)
    const meetingUrl =
      platform === "google-meet"
        ? `https://meet.google.com/${crypto.randomUUID().slice(0, 12)}`
        : `https://zoom.us/j/${Math.floor(Math.random() * 1000000000)}`

    const session = {
      id: crypto.randomUUID(),
      mentorship_match_id: matchId,
      scheduled_at: scheduledAt,
      duration_minutes: durationMinutes,
      meeting_url: meetingUrl,
      completed: false,
      created_at: new Date().toISOString(),
    }

    return NextResponse.json({
      session,
      message: "Session created successfully",
    })
  } catch (error) {
    console.error("[v0] Create session error:", error)
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 })
  }
}
