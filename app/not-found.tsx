'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata = {
    title: '404 - Page not found',
    description: "Oops! The page you're looking for doesn't exist.",
}

export default function NotFound() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-secondary'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='relative flex flex-col items-center justify-center gap-8 px-4 text-center'>
                <div className='relative'>
                    <Image
                        className='animate-pulse'
                        src='/images/default.webp'
                        alt='Triangle pattern'
                        role='presentation'
                        fill
                        priority
                    />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-primary'>
                        404
                    </motion.div>
                </div>
                <div className='flex flex-col items-center gap-4 text-center'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className='text-3xl font-bold md:text-4xl'>
                        Page not found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className='max-w-md text-lg text-muted-foreground md:text-xl'>
                        Oops! The page you're searching for seems to have wandered off. Let's get you back on track.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}>
                        <Button asChild className='group mt-4'>
                            <Link href='/'>
                                Back to Home
                                <ArrowRight className='ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1' />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
