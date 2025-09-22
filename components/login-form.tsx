"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { useAuth, type UserRole } from "@/contexts/auth-context"
import { ArrowLeft, LogIn, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LoginFormProps {
  role: UserRole
  onBack: () => void
  onLoginSuccess: () => void
}

export function LoginForm({ role, onBack, onLoginSuccess }: LoginFormProps) {
  const { t } = useLanguage()
  const { login, isLoading } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!username || !password) {
      setError("Please fill in all fields")
      return
    }

    const success = await login(username, password, role)
    if (success) {
      onLoginSuccess()
    } else {
      setError("Invalid username or password")
    }
  }

  const demoCredentials =
    role === "student"
      ? [
          { username: "student1", password: "demo123" },
          { username: "राज", password: "demo123" },
        ]
      : [
          { username: "teacher1", password: "demo123" },
          { username: "ਗੁਰੂ", password: "demo123" },
        ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="absolute left-4 top-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Button>
          <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <LogIn className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold text-balance">{t("login")}</CardTitle>
          <CardDescription className="text-lg text-pretty">
            {t(role)} {t("login")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-base">
                {t("username")}
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="touch-target text-lg"
                placeholder={t("username")}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base">
                {t("password")}
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="touch-target text-lg"
                placeholder={t("password")}
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full touch-target text-lg" size="lg" disabled={isLoading}>
              {isLoading ? t("loading") : t("loginButton")}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2 text-sm">Demo Credentials:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              {demoCredentials.map((cred, index) => (
                <div key={index}>
                  <strong>{cred.username}</strong> / {cred.password}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
