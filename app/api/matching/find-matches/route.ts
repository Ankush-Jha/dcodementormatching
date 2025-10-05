import { type NextRequest, NextResponse } from "next/server"
import { findTopMatches } from "@/lib/ai/matching-algorithm"
import { demoMentors } from "@/lib/data/demo-mentors"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { assessment } = body

    if (!assessment) {
      return NextResponse.json({ error: "Assessment data required" }, { status: 400 })
    }

    // Find top 5 mentor matches using the AI algorithm
    const matches = findTopMatches(assessment, demoMentors, 5)

    return NextResponse.json({
      matches,
      message: "Matches found successfully",
    })
  } catch (error) {
    console.error("[v0] Matching error:", error)
    return NextResponse.json({ error: "Matching failed" }, { status: 500 })
  }
}
