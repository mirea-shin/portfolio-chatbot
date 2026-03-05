import Navbar from '@/components/ui/Navbar';
import ChatWidget from '@/components/chat/ChatWidget';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <ChatWidget />
    </>
  );
}
