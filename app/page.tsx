import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight, Sparkles } from "lucide-react"

const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Next.js로 시작하는 모던 웹 개발",
    description: "Next.js의 기본 개념부터 고급 기능까지, 모던 웹 개발의 모든 것을 알아보세요.",
    date: "2024-01-15",
    readTime: "5분",
    tags: ["Next.js", "React", "웹개발"],
    featured: true,
  },
  {
    slug: "mastering-tailwind-css",
    title: "Tailwind CSS 마스터하기",
    description: "유틸리티 퍼스트 CSS 프레임워크인 Tailwind CSS를 완전히 정복해보세요.",
    date: "2024-01-10",
    readTime: "8분",
    tags: ["CSS", "Tailwind", "디자인"],
    featured: false,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript 베스트 프랙티스",
    description: "타입스크립트를 효과적으로 사용하기 위한 실무 팁과 베스트 프랙티스를 소개합니다.",
    date: "2024-01-05",
    readTime: "12분",
    tags: ["TypeScript", "JavaScript", "개발"],
    featured: false,
  },
]

export default function Home() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 dark:from-primary-400/10 via-transparent to-primary-500/5 dark:to-primary-400/10 rounded-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up border border-primary-100 dark:border-primary-800">
            <Sparkles className="h-4 w-4" />
            새로운 포스트가 업데이트되었습니다
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight animate-slide-up">
            모던 블로그에
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
              오신 것을 환영합니다
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            최신 웹 기술과 개발 인사이트를 공유하는 공간입니다.
            <br />
            깔끔하고 세련된 디자인으로 더 나은 읽기 경험을 제공합니다.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="animate-slide-up">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">추천 포스트</h2>
          </div>
          <Card className="group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString("ko-KR")}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {featuredPost.title}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {featuredPost.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors border border-primary-200 dark:border-primary-800"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold transition-all duration-200 group"
              >
                자세히 읽기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">최근 포스트</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {regularPosts.map((post, index) => (
            <Card
              key={post.slug}
              className="group hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("ko-KR")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors border border-primary-200 dark:border-primary-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors group"
                >
                  자세히 읽기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
