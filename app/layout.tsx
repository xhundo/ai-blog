import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';
import { GoogleAdsense } from './GoogleAdsense';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Ai the wave - Your Source for AI Tools, Trends, and Tech, Web3 Insights',
  description:
    'Stay updated on the latest AI tools, trends, and web3 developments with Ai the wave. Explore the world of artificial intelligence, software, technology, and blockchain.'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
      <GoogleAdsense pId="6573084761730961" />
    </html>
  );
}
