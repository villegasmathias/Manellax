import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PopupWidget } from '@/components/PopupWidget';

import { Hero } from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manellax',
  description: 'Consultoria industrial. Gas, petroleo, minería.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0B2143] text-white">
        <Navbar />
        <Hero />
        <div>{children}</div>
        <Footer />
        <PopupWidget />
      </body>
    </html>
  );
}
