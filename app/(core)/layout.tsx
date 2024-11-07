import * as React from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <main className='static mx-auto max-w-5xl px-8 md:mb-16'>{children}</main>
      <Footer />
    </html>
  )
}
