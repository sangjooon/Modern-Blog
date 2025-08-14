"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Suspense, useState } from "react"
import { Menu, X, BookOpen, Zap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full toss-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-xl font-bold text-gray-900 dark:text-white group toss-hover"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-toss-gradient flex items-center justify-center shadow-toss-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-toss-gradient-2 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-toss-gradient text-xl font-extrabold">Modern</span>
              <span className="text-gray-900 dark:text-white text-xl font-light ml-2">Blog</span>
            </div>
          </Link>

          {/* Right - Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="toss-nav-link toss-hover"
            >
              <Zap className="w-4 h-4 inline mr-2" />
              홈
            </Link>
            <Link
              href="/blog"
              className="toss-nav-link toss-hover"
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              블로그
            </Link>
            <Link
              href="/about"
              className="toss-nav-link toss-hover"
            >
              소개
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-toss-gradient liquid-glass rounded-lg toss-hover"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 liquid-glass rounded-b-xl shadow-toss-lg">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-toss-gradient liquid-glass rounded-lg toss-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="w-4 h-4 inline mr-3" />
                홈
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-toss-gradient liquid-glass rounded-lg toss-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4 inline mr-3" />
                블로그
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-toss-gradient liquid-glass rounded-lg toss-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                소개
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
