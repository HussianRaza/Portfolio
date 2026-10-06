import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { portfolioData } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#060913' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hussianraza.github.io'),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.headline}`,
  description: portfolioData.personal.tagline,
  keywords: [
    'Syed Hussain Raza',
    'Software Engineer',
    'Full-Stack Developer',
    'AI Engineer',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Python',
    'Rust',
    'Tauri',
    'Docker',
    'RAG',
    'Quantized LLM',
    'Karachi',
    'Pakistan',
    'NED University',
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.social.github }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hussianraza.github.io',
    title: `${portfolioData.personal.name} - ${portfolioData.personal.headline}`,
    description: portfolioData.personal.tagline,
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.headline}`,
    description: portfolioData.personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
