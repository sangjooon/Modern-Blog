"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-9 w-9 px-0 liquid-glass rounded-lg transition-colors"
      >
        <Sun className="h-4 w-4 text-gray-600" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 px-0 liquid-glass rounded-lg transition-all duration-200 toss-hover"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600 transition-colors" />
      )}
      <span className="sr-only">테마 변경</span>
    </Button>
  )
}
