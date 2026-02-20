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
  description: '신미례의 포트폴리오입니다.',
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
