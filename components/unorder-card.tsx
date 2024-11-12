import Image from 'next/image'
import Link from 'next/link'
import { IconExternalLink } from '@tabler/icons-react'

import { type Bookmark } from '@/config/bookmarks'

interface BookmarkCardProps {
    bookmark: Bookmark
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({ bookmark }) => {
    return (
        <Link href={bookmark.url} target='_blank' className='block'>
            <div className='grid-item dark:thumbnail-shadow relative mb-3 flex aspect-auto flex-col space-y-4 rounded-md border p-4 transition-all duration-150 hover:bg-gray-100 dark:bg-muted dark:hover:bg-accent'>
                <div className='image-container relative h-44 w-full'>
                    <Image
                        src={bookmark.imageUrl}
                        alt={bookmark.title}
                        fill
                        className='animate-reveal rounded-lg object-cover'
                        priority
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <h3 className='text-md line-clamp-4 font-bold leading-snug dark:text-gray-100'>{bookmark.title}</h3>

                    <span className='line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-700'>
                        <IconExternalLink className='size-3 dark:text-gray-100' />
                        <span className='break-all text-sm text-muted-foreground dark:text-gray-400'>
                            {bookmark.url}
                        </span>
                    </span>
                    <p className='line-clamp-6 text-[13px] leading-[18px] dark:text-gray-300'>{bookmark.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookmarkCard
