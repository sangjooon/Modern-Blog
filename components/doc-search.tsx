"use client"

import { useState, useEffect } from "react"
import { Search, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const searchResults = [
  {
    title: "Next.js로 시작하는 모던 웹 개발",
    description: "Next.js의 기본 개념부터 고급 기능까지",
    url: "/blog/getting-started-with-nextjs",
    category: "Tutorial",
  },
  {
    title: "Tailwind CSS 마스터하기",
    description: "유틸리티 퍼스트 CSS 프레임워크 완전 정복",
    url: "/blog/mastering-tailwind-css",
    category: "CSS",
  },
  {
    title: "TypeScript 베스트 프랙티스",
    description: "타입스크립트 실무 팁과 베스트 프랙티스",
    url: "/blog/typescript-best-practices",
    category: "TypeScript",
  },
]

export function DocSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const filteredResults = searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 text-sm font-normal text-gray-500 dark:text-gray-400 shadow-none hover:bg-white/80 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">검색...</span>
        <span className="inline-flex lg:hidden">검색</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-1.5 font-mono text-xs font-medium text-gray-600 dark:text-gray-300 opacity-100 sm:flex">
          <Command className="h-3 w-3" />K
        </kbd>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50">
          <DialogHeader className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">검색</DialogTitle>
          </DialogHeader>

          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 pl-10 pr-4 py-3 text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-gray-100 focus:border-primary-300 dark:focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all"
                placeholder="블로그 포스트 검색..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto px-4 pb-4">
            {filteredResults.length > 0 ? (
              <div className="space-y-2">
                {filteredResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{result.description}</p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {result.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : query ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>검색 결과가 없습니다.</p>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>검색어를 입력해주세요.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
