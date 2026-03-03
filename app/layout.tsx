import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/chat/ChatWidget';
import Navbar from '@/components/ui/Navbar';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mirea Shin | Frontend Developer',
  description:
    '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자 신미례의 포트폴리오입니다.',
  openGraph: {
    title: 'Mirea Shin | Frontend Developer',
    description:
      '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자 신미례의 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
    // url:""
    // image:"" // 1200×630px 이미지를 public/og-image.pn
  },
  twitter: {
    card: 'summary',
    title: 'Mirea Shin | Frontend Developer',
    description:
      '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자 신미례입니다.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geist.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
