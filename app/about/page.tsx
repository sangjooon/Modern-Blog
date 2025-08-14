export default function About() {
  return (
    <div className="relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="toss-card rounded-3xl p-8 sm:p-12 md:p-16 shadow-toss-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
            <span className="text-toss-gradient">소개</span>
          </h1>

          <div className="toss-prose prose-lg max-w-none">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
              안녕하세요! <span className="text-toss-gradient font-semibold">모던한</span> 블로그에 오신 것을 환영합니다.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              이 블로그는 최신 웹 개발 기술과 트렌드를 공유하는 공간입니다. Next.js, React, TypeScript, Tailwind CSS 등
              모던 웹 개발에 필요한 다양한 주제들을 다루고 있습니다.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <span className="text-toss-gradient-2 font-semibold">모던한</span> 깔끔하고 세련된 디자인으로 더 나은 읽기 경험을 제공하며, 
              MDX를 활용하여 인터랙티브한 콘텐츠도 함께 제공합니다.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 text-center">
              <span className="text-toss-gradient">주요 특징</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="toss-card p-6 toss-hover-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✨ 인터랙티브 콘텐츠</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• MDX를 활용한 동적 콘텐츠</li>
                  <li>• React 컴포넌트 통합</li>
                  <li>• 코드 하이라이팅</li>
                </ul>
              </div>
              
              <div className="toss-card p-6 toss-hover-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📱 반응형 디자인</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 모든 기기에서 최적화</li>
                  <li>• 터치 친화적 인터페이스</li>
                  <li>• 부드러운 애니메이션</li>
                </ul>
              </div>
              
              <div className="toss-card p-6 toss-hover-card">
                                 <h3 className="text-xl font-bold text-gray-900 mb-4">🎨 모던 디자인</h3>
                 <ul className="space-y-2 text-gray-600">
                   <li>• 리퀴드 글래스 효과</li>
                   <li>• 아름다운 그라데이션</li>
                   <li>• 현대적인 UI/UX</li>
                 </ul>
              </div>
              
              <div className="toss-card p-6 toss-hover-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ 빠른 성능</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Next.js 15 최적화</li>
                  <li>• SEO 최적화</li>
                  <li>• 빠른 로딩 속도</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 text-center">
              <span className="text-toss-gradient">기술 스택</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="toss-card p-8 toss-hover-card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">프론트엔드</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">Next.js 15</span>
                    <span className="text-toss-gradient text-sm">최신 버전</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">React 19</span>
                    <span className="text-toss-gradient-2 text-sm">최신 버전</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">TypeScript</span>
                    <span className="text-toss-gradient-3 text-sm">타입 안전성</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">Tailwind CSS</span>
                    <span className="text-toss-gradient-4 text-sm">유틸리티 우선</span>
                  </div>
                </div>
              </div>
              
              <div className="toss-card p-8 toss-hover-card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">콘텐츠 & 도구</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">MDX</span>
                    <span className="text-toss-gradient text-sm">마크다운 + JSX</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">Gray Matter</span>
                    <span className="text-toss-gradient-2 text-sm">메타데이터 파싱</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">Remark GFM</span>
                    <span className="text-toss-gradient-3 text-sm">GitHub 플레이버</span>
                  </div>
                  <div className="flex items-center justify-between p-4 liquid-glass rounded-xl">
                    <span className="text-gray-900 font-medium">SEO 최적화</span>
                    <span className="text-toss-gradient-4 text-sm">검색 엔진 최적화</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="toss-card p-8 border-toss-gradient text-center mt-12">
              <div className="text-6xl mb-4">💡</div>
              <p className="text-lg text-gray-700 font-medium">
                이 블로그는 지속적으로 업데이트되고 있습니다. 
                <br />
                새로운 기능과 개선사항을 기대해주세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
