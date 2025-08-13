import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// MDX 파일들을 정적으로 import
import GettingStartedWithNextjs from "@/content/getting-started-with-nextjs.mdx"
import MasteringTailwindCss from "@/content/mastering-tailwind-css.mdx"
import TypescriptBestPractices from "@/content/typescript-best-practices.mdx"

// 블로그 포스트 메타데이터와 컴포넌트 매핑
const blogPosts = {
  "getting-started-with-nextjs": {
    title: "Next.js로 시작하는 모던 웹 개발",
    date: "2024-01-15",
    readTime: "5분",
    tags: ["Next.js", "React", "웹개발"],
    component: GettingStartedWithNextjs,
  },
  "mastering-tailwind-css": {
    title: "Tailwind CSS 마스터하기",
    date: "2024-01-10",
    readTime: "8분",
    tags: ["CSS", "Tailwind", "디자인"],
    component: MasteringTailwindCss,
  },
  "typescript-best-practices": {
    title: "TypeScript 베스트 프랙티스",
    date: "2024-01-05",
    readTime: "12분",
    tags: ["TypeScript", "JavaScript", "개발"],
    component: TypescriptBestPractices,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const MDXContent = post.component

  return (
    <article className="max-w-4xl mx-auto animate-fade-in">
      {/* Back Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          블로그 홈으로 돌아가기
        </Link>

        <Button
          variant="outline"
          size="sm"
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300"
        >
          <Share2 className="w-4 h-4 mr-2" />
          공유하기
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-12 text-center animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            {new Date(post.date).toLocaleDateString("ko-KR")}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {post.readTime}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1 border border-primary-200 dark:border-primary-800"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/20 dark:border-gray-700/20 animate-scale-in">
        <MDXContent />
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">이 글이 도움이 되셨나요?</div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300"
            >
              👍 좋아요
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300"
            >
              💬 댓글
            </Button>
          </div>
        </div>
      </footer>
    </article>
  )
}
