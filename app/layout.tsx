import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: {
    default: 'Aktywnie na co dzień | Trenerka personalna w Poznaniu',
    template: '%s | Aktywnie na co dzień',
  },
  description: 'Trening personalny dla kobiet w Poznaniu. Naucz się ćwiczyć na siłowni bez stresu i zbuduj pewność siebie.',
  keywords: ['trener personalny Poznań', 'trening dla kobiet Poznań', 'siłownia dla początkujących kobiet', 'trening personalny', 'Poznań'],
  authors: [{ name: 'Anna Kosińska' }],
  creator: 'Aktywnie na co dzień',
  metadataBase: new URL('https://trenerkapoznan.pl'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://trenerkapoznan.pl',
    title: 'Aktywnie na co dzień | Trenerka personalna w Poznaniu',
    description: 'Trening personalny dla kobiet w Poznaniu. Naucz się ćwiczyć na siłowni bez stresu i zbuduj pewność siebie.',
    siteName: 'Aktywnie na co dzień',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2f5d50',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
