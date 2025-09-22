"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import type { UserRole } from "@/contexts/auth-context"
import { GraduationCap, Users, ArrowLeft } from "lucide-react"

interface RoleSelectorProps {
  onRoleSelected: (role: UserRole) => void
  onBack: () => void
}

export function RoleSelector({ onRoleSelected, onBack }: RoleSelectorProps) {
  const { t } = useLanguage()
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  const roles = [
    {
      role: "student" as UserRole,
      icon: GraduationCap,
      title: t("student"),
      description: "Access lessons, quizzes, and track progress",
    },
    {
      role: "teacher" as UserRole,
      icon: Users,
      title: t("teacher"),
      description: "Manage content, students, and assignments",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="absolute left-4 top-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Button>
          <CardTitle className="text-2xl font-bold text-balance">{t("appName")}</CardTitle>
          <CardDescription className="text-lg text-pretty">{t("selectRole")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {roles.map((roleOption) => {
              const Icon = roleOption.icon
              return (
                <button
                  key={roleOption.role}
                  onClick={() => setSelectedRole(roleOption.role)}
                  className={`w-full p-6 rounded-lg border-2 transition-all touch-target ${
                    selectedRole === roleOption.role
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedRole === roleOption.role ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-lg">{roleOption.title}</div>
                      <div className="text-sm text-muted-foreground">{roleOption.description}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <Button
            onClick={() => selectedRole && onRoleSelected(selectedRole)}
            disabled={!selectedRole}
            className="w-full touch-target text-lg"
            size="lg"
          >
            {t("continue")}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
