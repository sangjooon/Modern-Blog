export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4 animate-pulse">
        <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-400">로딩 중...</p>
      </div>
    </div>
  )
}
