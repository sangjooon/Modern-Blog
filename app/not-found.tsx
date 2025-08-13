import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              홈으로 돌아가기
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="javascript:history.back()" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              이전 페이지
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
