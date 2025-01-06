import { useEffect } from 'react'
import { usePathname } from 'next/navigation' // Correct import for Next.js 13/14 (app directory)
import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { GoogleTagManager } from '@next/third-parties/google'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - HTByte',
    default: 'HTByte - Empowering Your Digital Transformation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Push pageview event to dataLayer on page load or route change
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
      })
    }
  }, [pathname]) // Runs when the pathname changes

  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* Google Tag Manager integration */}
      <GoogleTagManager gtmId="GTM-WZV5J89X" />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
