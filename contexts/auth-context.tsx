"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type UserRole = "student" | "teacher"

interface User {
  id: string
  username: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string, role: UserRole) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users for prototype
const DEMO_USERS = [
  { id: "1", username: "student1", password: "demo123", role: "student" as UserRole },
  { id: "2", username: "teacher1", password: "demo123", role: "teacher" as UserRole },
  { id: "3", username: "राज", password: "demo123", role: "student" as UserRole },
  { id: "4", username: "ਗੁਰੂ", password: "demo123", role: "teacher" as UserRole },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem("nabhalearn-user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem("nabhalearn-user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = DEMO_USERS.find((u) => u.username === username && u.password === password && u.role === role)

    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        username: foundUser.username,
        role: foundUser.role,
      }
      setUser(userSession)
      localStorage.setItem("nabhalearn-user", JSON.stringify(userSession))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("nabhalearn-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
