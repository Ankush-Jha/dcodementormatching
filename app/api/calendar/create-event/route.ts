import { NextResponse, type NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, startTime, endTime, attendees = [] } = body || {}

    if (!title || !startTime || !endTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Demo: generate a Google Meet-like link. In production, integrate googleapis.
    const meetLink = `https://meet.google.com/${crypto.randomUUID().slice(0, 3)}-${crypto.randomUUID().slice(0, 4)}-${crypto.randomUUID().slice(0, 3)}`
    const eventId = `dcode-${Date.now()}`

    return NextResponse.json({
      event: {
        id: eventId,
        title,
        description,
        startTime,
        endTime,
        attendees,
        meetingLink: meetLink,
        platform: "google-meet",
      },
      message: "Event created (demo). Integrate Google Calendar for production.",
    })
  } catch (e) {
    console.error("[v0] calendar/create-event error:", e)
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 })
  }
}
