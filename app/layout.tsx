import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingContact from "./components/FloatingContact";


export const metadata: Metadata = {
  // This tells Next.js your base URL (important for social sharing)
  metadataBase: new URL('https://globalcircleedu.com'),
  
  // Page title - appears in browser tab and Google results
  title: {
    default: 'Global Circle Edu - Study MBBS Abroad | Top Medical Universities 2026',
    template: '%s | Global Circle Edu' // For other pages: "Georgia | Global Circle Edu"
  },
  
  // Description - appears under title in Google
  // Should be 150-160 characters, include main keywords
  description: 'Find affordable MBBS programs at NMC-approved universities in Georgia, Kazakhstan, Philippines & more. Expert guidance for Indian students seeking medical education abroad.',
  
  // Keywords - helps Google understand your content
  keywords: [
    'MBBS abroad',
    'study medicine abroad',
    'medical universities abroad',
    'MBBS in Russia',
    'MBBS in Kazakhstan',
    'MBBS in China',
    
    'affordable medical education',
    'MBBS for Indian students',
    'NMC approved medical universities'
  ],
  
  // Author info
  authors: [{ name: 'Global Circle Edu' }],
  
  // Open Graph - for Facebook, LinkedIn, WhatsApp previews
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalcircleedu.com',
    siteName: 'Global Circle Edu',
    title: 'Study MBBS Abroad - Global Circle Edu',
    description: 'Your trusted partner for medical education abroad. Compare universities, check fees, and apply today.',
    images: [
      {
        url: ' /logo.png', // We'll create this next
        width: 1200,
        height: 630,
        alt: 'Global Circle Edu - Study MBBS Abroad',
      },
    ],
  },
  
  // Twitter Card - for Twitter previews
  twitter: {
    card: 'summary_large_image',
    title: 'Global Circle Edu - Study MBBS Abroad',
    description: 'Find affordable MBBS programs at top universities worldwide',
    images: ['/logo.png'],
  },
  
  // Tell Google to index this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingContact/>
      </body>
    </html>
  );
}
