import { type NextRequest, NextResponse } from "next/server"
import { generateToken, hashPassword } from "@/lib/api/auth"
import type { User } from "@/lib/types/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, role } = body

    // Validate input
    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!["mentor", "mentee"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }

    // In production, check if user already exists in database
    // For demo, we'll create a new user
    const user: User = {
      id: crypto.randomUUID(),
      email,
      name,
      role: role as "mentor" | "mentee",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Hash password (in production, store in database)
    const passwordHash = hashPassword(password)

    // Generate JWT token
    const token = generateToken(user)

    return NextResponse.json(
      {
        user,
        token,
        message: "Registration successful",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
