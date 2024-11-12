/* eslint-disable react/no-array-index-key */
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { uses } from '@/config/uses'
import Tooltip from './tooltip'

const allItems = [...uses]

export function UsedTool() {
    const ulRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (ulRef.current) {
            const ul = ulRef.current
            const clone = ul.cloneNode(true) as HTMLElement
            clone.setAttribute('aria-hidden', 'true')
            ul.parentNode?.insertBefore(clone, ul.nextSibling)
        }
    }, [])

    const handleImageClick = (url: string) => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            window.open(url)
        }
    }

    return (
        <section className='lg:max-w-nav mx-auto mb-8 flex w-full max-w-md grow flex-col  items-center lg:mx-auto lg:max-w-none'>
            <div className='w-full'>
                <div className='relative flex items-center'>
                    <div className='gradient-blur pointer-events-none absolute inset-0 -right-16 z-10 -mr-10 ml-auto hidden w-1/2 lg:block'>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} />
                        ))}
                    </div>
                    <div className='gradient-blur pointer-events-none absolute inset-0 -left-16 z-10 -ml-10 hidden w-1/2 rotate-180 lg:block'>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} />
                        ))}
                    </div>

                    <div className='inline-flex w-full flex-nowrap overflow-hidden p-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
                        <ul
                            ref={ulRef}
                            className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-3'>
                            {allItems.map((item, index) => (
                                <li key={index} className='group relative shrink-0'>
                                    <Image
                                        onClick={() => handleImageClick(item.url)}
                                        src={item.image}
                                        alt={item.name}
                                        width={200}
                                        height={200}
                                        className='size-16 cursor-alias rounded-2xl border border-neutral-200 object-cover transition-all hover:shadow-lg hover:shadow-black/5 dark:border-neutral-800'
                                    />
                                    <Tooltip position='top' className='z-20 -translate-y-3.5'>
                                        {item.name}
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
