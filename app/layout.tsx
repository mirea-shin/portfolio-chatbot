import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: 'Mirea Shin | Frontend Developer',
  description:
    '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자 신미례의 포트폴리오입니다.',
  openGraph: {
    title: 'Mirea Shin | Frontend Developer',
    description:
      '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자 신미례의 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
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
        {children}
      </body>
    </html>
  );
}
