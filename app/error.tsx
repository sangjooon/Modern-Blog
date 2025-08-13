"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">오류 발생</h1>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">문제가 발생했습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            페이지를 로드하는 중에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" className="inline-flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            다시 시도
          </Button>

          <Button asChild variant="outline">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              홈으로 돌아가기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
