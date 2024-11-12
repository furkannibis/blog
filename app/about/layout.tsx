import * as React from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='static mx-auto px-8 md:mb-16'>{children}</main>
            <Footer />
        </>
    )
}
