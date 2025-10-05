import { type NextRequest, NextResponse } from "next/server"
import { generateToken } from "@/lib/api/auth"
import type { User } from "@/lib/types/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
    }

    // In production, fetch user from database
    // For demo, we'll use a mock user
    const user: User = {
      id: "demo-user-id",
      email,
      name: "Demo User",
      role: "mentee",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Verify password (in production, compare with hashed password from database)
    // For demo, accept any password
    const isValid = true

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Generate JWT token
    const token = generateToken(user)

    return NextResponse.json({
      user,
      token,
      message: "Login successful",
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
