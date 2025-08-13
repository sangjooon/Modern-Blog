export default function About() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/20 dark:border-gray-700/20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">소개</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            안녕하세요! 모던 블로그에 오신 것을 환영합니다.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            이 블로그는 최신 웹 개발 기술과 트렌드를 공유하는 공간입니다. Next.js, React, TypeScript, Tailwind CSS 등
            모던 웹 개발에 필요한 다양한 주제들을 다루고 있습니다.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            깔끔하고 세련된 디자인으로 더 나은 읽기 경험을 제공하며, MDX를 활용하여 인터랙티브한 콘텐츠도 함께
            제공합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">주요 특징</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>MDX를 활용한 인터랙티브 콘텐츠</li>
            <li>반응형 디자인으로 모든 기기에서 최적화된 경험</li>
            <li>깔끔하고 모던한 UI/UX</li>
            <li>빠른 로딩 속도와 SEO 최적화</li>
            <li>다크 모드 지원</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
