import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/shared/SmoothScroll';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '600', '700', '900'],
  display: 'swap',
});

const pretendard = localFont({
  src: '../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AX Teamship™ — AI 시대, 살아남는 팀의 조건',
    template: '%s · AX Teamship™',
  },
  description:
    'AX Teamship™ 5요소 기반 기업 워크숍·부트캠프·키노트. 심리적 안전·위임·에너지·성장·모멘텀으로 팀을 바꿉니다.',
  keywords: ['AX Teamship', '팀십', '기업 워크숍', '리더십', '조직 개발', 'AI 전환', '심리적 안전', '이소영'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://axteamship.com',
    siteName: 'AX Teamship™',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${fraunces.variable} ${pretendard.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased" style={{ background: 'var(--bone)', color: 'var(--ink)' }}>
        <SmoothScroll>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
