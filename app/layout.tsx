import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { DocSearch } from "@/components/doc-search"
import { ThemeToggle } from "@/components/theme-toggle"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Blog",
  description: "A clean and elegant blog built with Next.js and MDX",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="blog-theme"
        >
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/50 transition-colors duration-300">
            {/* Spline-style Header */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200/20 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="hidden sm:block">Modern Blog</span>
                  </Link>

                  {/* Center - Search */}
                  <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <Suspense fallback={<div>Loading...</div>}>
                      <DocSearch />
                    </Suspense>
                  </div>

                  {/* Right - Navigation */}
                  <nav className="flex items-center space-x-1">
                    <Link
                      href="/"
                      className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                    >
                      홈
                    </Link>
                    <Link
                      href="/about"
                      className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                    >
                      소개
                    </Link>
                    <div className="md:hidden ml-2">
                      <Suspense fallback={<div>Loading...</div>}>
                        <DocSearch />
                      </Suspense>
                    </div>
                    <ThemeToggle />
                  </nav>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>

            {/* Apple-style Footer */}
            <footer className="border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Modern Blog</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                      최신 웹 기술과 개발 인사이트를 공유하는 모던한 블로그입니다. 깔끔한 디자인과 뛰어난 사용자 경험을
                      제공합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">블로그</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          최근 포스트
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          소개
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">설정</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">테마</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Modern Blog. All rights reserved.</p>
                  <div className="flex space-x-6 mt-4 sm:mt-0">
                    <Link
                      href="#"
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      개인정보처리방침
                    </Link>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      이용약관
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
