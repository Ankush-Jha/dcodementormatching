import type { User } from "@/lib/types/database"

// Simulated JWT token generation (in production, use proper JWT library)
export function generateToken(user: User): string {
  return btoa(JSON.stringify({ id: user.id, email: user.email, role: user.role }))
}

export function verifyToken(token: string): User | null {
  try {
    const decoded = JSON.parse(atob(token))
    return decoded as User
  } catch {
    return null
  }
}

// Simulated password hashing (in production, use bcrypt)
export function hashPassword(password: string): string {
  return btoa(password)
}

export function verifyPassword(password: string, hash: string): boolean {
  return btoa(password) === hash
}
