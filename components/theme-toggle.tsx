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
      <Button variant="ghost" size="sm" className="h-9 w-9 px-0 hover:bg-gray-100/80 transition-colors">
        <Sun className="h-4 w-4" />
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
      className="h-9 w-9 px-0 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-500 hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" />
      )}
      <span className="sr-only">테마 변경</span>
    </Button>
  )
}
