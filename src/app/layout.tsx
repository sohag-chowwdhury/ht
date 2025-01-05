import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import GTMScript from '../components/GTM';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - HTByte',
    default: 'HTByte - Empowering Your Digital Transformation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-full flex-col">
        <GTMScript />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
