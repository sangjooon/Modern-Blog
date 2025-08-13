import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3 mt-6 leading-tight">{children}</h3>
    ),
    p: ({ children }) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">{children}</p>,
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 underline decoration-primary-300 dark:decoration-primary-600 hover:decoration-primary-600 dark:hover:decoration-primary-400 transition-colors"
      >
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg shadow-md dark:shadow-gray-800/50 my-6"
        {...(props as ImageProps)}
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-300 dark:border-primary-600 pl-6 py-2 my-6 bg-primary-50 dark:bg-primary-950/30 rounded-r-lg">
        <div className="text-gray-700 dark:text-gray-300 italic">{children}</div>
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 text-primary-800 dark:text-primary-300 px-2 py-1 rounded text-sm font-mono border border-gray-200 dark:border-gray-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto my-6 shadow-lg border border-gray-800 dark:border-gray-700">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
    ...components,
  }
}
