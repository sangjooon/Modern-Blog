import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, Share2, Heart, MessageCircle, BookOpen, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx"
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    }
  }

  return {
    title: `${post.title} | Modern Blog`,
    description: `${post.title} - ${post.readTime} 읽기`,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="relative z-10">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Back Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-gray-700 hover:text-toss-gradient transition-colors group liquid-glass rounded-2xl px-6 py-3 toss-hover"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-medium">블로그 홈으로 돌아가기</span>
            <span className="sm:hidden font-medium">홈</span>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="btn-toss-secondary"
          >
            <Share2 className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">공유하기</span>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-16 text-center animate-slide-up">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-toss-gradient-2 text-white px-4 py-2 border-none rounded-2xl text-sm font-medium shadow-toss"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="text-toss-gradient">{post.title}</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-600 mb-10">
            <div className="flex items-center gap-3 liquid-glass rounded-2xl px-6 py-3">
              <CalendarDays className="w-5 h-5 text-toss-gradient" />
              <span className="text-sm font-medium">{new Date(post.date).toLocaleDateString("ko-KR")}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass rounded-2xl px-6 py-3">
              <Clock className="w-5 h-5 text-toss-gradient-2" />
              <span className="text-sm font-medium">{post.readTime}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass rounded-2xl px-6 py-3">
              <BookOpen className="w-5 h-5 text-toss-gradient-3" />
              <span className="text-sm font-medium">블로그 포스트</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-4 liquid-glass rounded-3xl px-8 py-4 inline-flex shadow-toss-lg">
            <div className="relative">
              <div className="w-12 h-12 bg-toss-gradient rounded-2xl flex items-center justify-center shadow-toss-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-toss-gradient-2 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gray-900">Modern Blog</p>
              <p className="text-sm text-gray-600">웹 개발 전문가</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="toss-card rounded-3xl p-8 sm:p-12 md:p-16 shadow-toss-xl animate-scale-in">
          <div className="toss-prose prose-lg max-w-none">
            <MDXRemote 
              source={post.content} 
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 animate-fade-in">
          {/* Engagement Section */}
          <div className="toss-card rounded-3xl p-8 sm:p-12 shadow-toss-xl mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">이 글이 도움이 되셨나요?</h3>
              <p className="text-gray-600 text-lg">피드백을 주시면 더 나은 콘텐츠를 만들어드리겠습니다.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="btn-toss-secondary group"
              >
                <Heart className="w-6 h-6 mr-3 group-hover:fill-toss-gradient group-hover:text-toss-gradient transition-colors" />
                <span className="text-lg font-medium">좋아요</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="btn-toss-secondary group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:fill-toss-gradient group-hover:text-toss-gradient transition-colors" />
                <span className="text-lg font-medium">댓글</span>
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="toss-card rounded-3xl p-8 sm:p-12 shadow-toss-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">관련 포스트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllBlogPosts()
                .filter(p => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block liquid-glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 toss-hover group"
                  >
                    <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-toss-gradient transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(relatedPost.date).toLocaleDateString("ko-KR")}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
