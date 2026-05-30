import type { Metadata } from 'next';
import { Noto_Serif_KR, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const notoSerifKR = Noto_Serif_KR({
  variable: '--font-noto-serif-kr',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
    default: 'Teamship — 팀십은 가족에서 시작된다',
    template: '%s | Teamship',
  },
  description:
    'AI 시대, 기업과 가정을 잇는 한국 최초 팀십 빌딩 플랫폼. 자기결정력 진단, 가족 팀십 워크숍, 기업 AX 리더십 강의.',
  keywords: ['팀십', '가족 팀십', '자기결정력', 'AX 리더십', 'AI 시대 자녀교육', '이소영', 'AX Teamship'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://teamship.co.kr',
    siteName: 'Teamship',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKR.variable} ${pretendard.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[var(--text)] antialiased">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
