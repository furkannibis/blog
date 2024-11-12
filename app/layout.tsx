/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import type { Metadata, Viewport } from 'next'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'

import { site, siteBaseMetadata } from '@/config/site'
import { cn } from '@/lib/utils'
import { Noise } from '@/components/gradient-bg'
import { ProgressProvider } from '@/components/progress-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const geist = localFont({
    src: [
        {
            path: '../styles/fonts/Geist-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Geist-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const metadata: Metadata = {
    ...siteBaseMetadata,
    metadataBase: new URL(site.url),
    title: {
        template: `%s | ${site.title}`,
        default: site.title,
    },
}

export const viewport: Viewport = {
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: '#ffffff',
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: '#000000',
        },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en-US'>
            <body className={cn(geist.className)}>
                <Analytics />
                <SpeedInsights />
                <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
                    <ProgressProvider>
                        <Noise />
                        {children}
                        <div className='relative'>
                        </div>
                        <Toaster />
                        <TailwindIndicator />
                    </ProgressProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}