import Link from "next/link"
import { getAllBlogPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, Clock, BookOpen, Zap, Code, Palette, Sparkles } from "lucide-react"

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 6)

  return (
    <div className="relative z-10">
      <div className="space-y-16 animate-fade-in">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 liquid-glass rounded-xl px-4 py-2 mb-6 toss-hover">
                <Sparkles className="w-4 h-4 text-toss-gradient" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">모던한 블로그</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="text-toss-gradient">Modern</span>
              <br />
              <span className="text-gray-900 dark:text-white font-light">Blog</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              최신 웹 기술과 개발 인사이트를 공유하는 
              <span className="text-toss-gradient font-semibold"> 모던한</span> 
              블로그입니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blog">
                <Button size="lg" className="btn-toss-primary">
                  <BookOpen className="w-4 h-4 mr-2" />
                  모든 포스트 보기
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="btn-toss-secondary">
                  <Zap className="w-4 h-4 mr-2" />
                  소개 보기
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-toss-gradient">주요 특징</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                현대적이고 인터랙티브한 블로그 경험을 제공합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="toss-card p-6 toss-hover-card">
                <div className="w-12 h-12 bg-toss-gradient rounded-xl flex items-center justify-center mb-4 shadow-toss">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">MDX 지원</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  마크다운과 React 컴포넌트를 결합한 인터랙티브한 콘텐츠를 제공합니다.
                </p>
              </div>
              
              <div className="toss-card p-6 toss-hover-card">
                <div className="w-12 h-12 bg-toss-gradient-2 rounded-xl flex items-center justify-center mb-4 shadow-toss">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">모던 디자인</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  리퀴드 글래스와 현대적인 그라데이션으로 구성된 아름다운 UI/UX를 제공합니다.
                </p>
              </div>
              
              <div className="toss-card p-6 toss-hover-card">
                <div className="w-12 h-12 bg-toss-gradient-3 rounded-xl flex items-center justify-center mb-4 shadow-toss">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">빠른 성능</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Next.js 15와 최적화된 코드로 빠른 로딩 속도와 부드러운 애니메이션을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  <span className="text-toss-gradient">최신 포스트</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  최신 웹 개발 트렌드와 기술을 확인하세요.
                </p>
              </div>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="btn-toss-secondary">
                  모든 포스트 보기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="toss-card p-6 toss-hover-card h-full">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
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
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-toss-gradient transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("ko-KR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-toss-gradient font-medium text-sm">자세히 보기</span>
                      <ArrowRight className="w-4 h-4 text-toss-gradient group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="toss-card p-10 shadow-toss-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-toss-gradient">시작해보세요</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                최신 웹 개발 기술과 인사이트를 확인하고, 
                <br className="hidden sm:block" />
                여러분의 개발 여정을 한 단계 업그레이드하세요.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <Link href="/blog">
                <Button size="lg" className="btn-toss-primary">
                  <BookOpen className="w-4 h-4 mr-2" />
                  모든 포스트 보기
                </Button>
              </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="btn-toss-secondary">
                    <Zap className="w-4 h-4 mr-2" />
                    더 알아보기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
