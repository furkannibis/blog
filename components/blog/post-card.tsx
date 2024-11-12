'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/utils/dates'
import { UtmUrl } from '@/utils/urls'
import { ArrowUpRightIcon, PencilIcon } from 'lucide-react'

import { BlogPostPreview } from '@/types/blog'

import { Badge } from '../ui/badge'

export function PostCard({ post }: { post: BlogPostPreview }) {
    return (
        <Link
            key={post.id}
            href={UtmUrl(post.url, {
                content: 'post_card',
            })}
            className='group relative rounded-xl p-2 shadow-feature-card dark:shadow-feature-card-dark'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-3'>
                    <PencilIcon className='size-[18px]' />
                    <h2 className='font-light'>Blog</h2>
                </div>
                <ArrowUpRightIcon className='size-[18px] opacity-0 transition-opacity group-hover:opacity-100' />
            </div>

            <div className='relative h-48 w-full sm:h-60 md:h-72'>
                <Image
                    src={post.image ?? 'logo-me.webp'}
                    alt={post.title}
                    fill
                    className='cover animate-reveal rounded-sm'
                />
            </div>

            {/* Text content */}
            <div className='mt-4 flex grow flex-col'>
                <h2 className='text-lg font-bold sm:text-xl'>{post.title}</h2>
                <div className='mt-2 text-sm text-muted-foreground sm:text-base'>
                    {post.summary.slice(0, 120)}
                    {post.summary.length > 120 && '...'}
                </div>
            </div>

            {/* Meta and tags */}
            <div className='mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
                <div>{formatDate(post.date)}</div>
                {post.tags && post.tags.length > 0 && (
                    <>
                        <div className='text-muted-foreground'>•</div>
                        {post.tags.map((t) => (
                            <Badge key={t} variant={'outline'}>
                                {t}
                            </Badge>
                        ))}
                    </>
                )}
            </div>
        </Link>
    )
}
