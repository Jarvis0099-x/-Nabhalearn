"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { RoleSelector } from "@/components/role-selector"
import { LoginForm } from "@/components/login-form"
import type { UserRole } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

type AppState = "language" | "role" | "login" | "authenticated"

export default function HomePage() {
  const { user, isLoading: authLoading } = useAuth()
  const { language } = useLanguage()
  const router = useRouter()
  const [appState, setAppState] = useState<AppState>("language")
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  useEffect(() => {
    if (authLoading) return

    if (user) {
      // Redirect to appropriate dashboard
      if (user.role === "student") {
        router.push("/student")
      } else {
        router.push("/teacher")
      }
      return
    }

    // Check if language is already selected
    const savedLanguage = localStorage.getItem("nabhalearn-language")
    if (savedLanguage && ["en", "hi", "pa"].includes(savedLanguage)) {
      setAppState("role")
    }
  }, [user, authLoading, router])

  const handleLanguageSelected = () => {
    setAppState("role")
  }

  const handleRoleSelected = (role: UserRole) => {
    setSelectedRole(role)
    setAppState("login")
  }

  const handleBackToRole = () => {
    setAppState("role")
    setSelectedRole(null)
  }

  const handleBackToLanguage = () => {
    setAppState("language")
  }

  const handleLoginSuccess = () => {
    setAppState("authenticated")
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (appState === "language") {
    return <LanguageSelector onLanguageSelected={handleLanguageSelected} />
  }

  if (appState === "role") {
    return <RoleSelector onRoleSelected={handleRoleSelected} onBack={handleBackToLanguage} />
  }

  if (appState === "login" && selectedRole) {
    return <LoginForm role={selectedRole} onBack={handleBackToRole} onLoginSuccess={handleLoginSuccess} />
  }

  return null
}
