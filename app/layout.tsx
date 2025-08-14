import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Blog",
  description: "최신 웹 기술과 개발 인사이트를 공유하는 모던한 블로그입니다.",
  keywords: ["블로그", "웹 개발", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Modern Blog" }],
  creator: "Modern Blog",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://modern-blog.com",
    title: "Modern Blog",
    description: "최신 웹 기술과 개발 인사이트를 공유하는 모던한 블로그입니다.",
    siteName: "Modern Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Blog",
    description: "최신 웹 기술과 개발 인사이트를 공유하는 모던한 블로그입니다.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
          <div className="min-h-screen toss-bg">
            <Header />

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>

            {/* Clean Footer */}
            <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {/* Logo and Description */}
                  <div className="mb-8 md:mb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-xl bg-toss-gradient flex items-center justify-center shadow-toss-lg">
                          <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-toss-gradient-2 rounded-full animate-pulse-slow"></div>
                      </div>
                      <div>
                        <span className="text-toss-gradient text-xl font-extrabold">Modern</span>
                        <span className="text-gray-900 dark:text-white text-xl font-light ml-2">Blog</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
                      최신 웹 기술과 개발 인사이트를 공유하는 모던한 블로그입니다.
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <Link
                      href="/"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-toss-gradient transition-colors"
                    >
                      홈
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-toss-gradient transition-colors"
                    >
                      소개
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-toss-gradient transition-colors"
                    >
                      블로그
                    </Link>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">테마</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Modern Blog. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
