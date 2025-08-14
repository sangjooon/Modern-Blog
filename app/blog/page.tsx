import Link from "next/link"
import { getAllBlogPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarDays, Clock, BookOpen, Search, Tag } from "lucide-react"

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-toss-gradient transition-colors group liquid-glass rounded-xl px-4 py-2 toss-hover"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">홈으로 돌아가기</span>
            </Link>
            
            <div className="flex items-center gap-2 liquid-glass rounded-xl px-4 py-2">
              <BookOpen className="w-4 h-4 text-toss-gradient" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                총 {posts.length}개의 포스트
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-toss-gradient">블로그</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              최신 웹 개발 기술과 인사이트를 담은 모든 포스트를 확인하세요.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="toss-card p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="포스트 검색..."
                  className="w-full pl-10 pr-4 py-2 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-toss-gradient focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-toss-gradient">
                  <option value="">모든 태그</option>
                  <option value="react">React</option>
                  <option value="nextjs">Next.js</option>
                  <option value="typescript">TypeScript</option>
                  <option value="tailwind">Tailwind CSS</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="toss-card p-6 toss-hover-card h-full">
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-toss-gradient-2 text-white px-2 py-1 border-none rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-toss-gradient transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt || "포스트 내용을 확인해보세요."}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("ko-KR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-toss-gradient font-medium text-sm">자세히 보기</span>
                  <div className="w-6 h-6 bg-toss-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-3 h-3 text-white" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-toss-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              아직 포스트가 없습니다
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              곧 새로운 포스트가 업로드될 예정입니다.
            </p>
            <Link href="/">
              <Button className="btn-toss-primary">
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="btn-toss-secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
