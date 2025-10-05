import { type NextRequest, NextResponse } from "next/server"
import type { Message } from "@/lib/types/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { matchId, senderId, content } = body

    if (!matchId || !senderId || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In production, save to database
    const message: Message = {
      id: crypto.randomUUID(),
      mentorship_match_id: matchId,
      sender_id: senderId,
      content,
      created_at: new Date().toISOString(),
    }

    return NextResponse.json({
      message,
      success: true,
    })
  } catch (error) {
    console.error("[v0] Send message error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
