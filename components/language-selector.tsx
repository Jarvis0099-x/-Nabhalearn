"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage, type Language } from "@/contexts/language-context"
import { Globe, Check } from "lucide-react"

interface LanguageSelectorProps {
  onLanguageSelected: () => void
}

export function LanguageSelector({ onLanguageSelected }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage()
  const [selectedLang, setSelectedLang] = useState<Language>(language)

  const languages = [
    { code: "en" as Language, name: "English", nativeName: "English" },
    { code: "hi" as Language, name: "Hindi", nativeName: "हिंदी" },
    { code: "pa" as Language, name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  ]

  const handleContinue = () => {
    setLanguage(selectedLang)
    onLanguageSelected()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold text-balance">NabhaLearn</CardTitle>
          <CardDescription className="text-lg text-pretty">Offline Digital Learning for Rural Schools</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Select Language / भाषा चुनें / ਭਾਸ਼ਾ ਚੁਣੋ</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`w-full p-4 rounded-lg border-2 transition-all touch-target flex items-center justify-between ${
                    selectedLang === lang.code
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-semibold">{lang.nativeName}</div>
                    <div className="text-sm text-muted-foreground">{lang.name}</div>
                  </div>
                  {selectedLang === lang.code && <Check className="w-5 h-5 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleContinue} className="w-full touch-target text-lg" size="lg">
            Continue / जारी रखें / ਜਾਰੀ ਰੱਖੋ
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
