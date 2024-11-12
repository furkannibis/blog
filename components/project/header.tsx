import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import { IconBrandGithub, IconHome } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'

import { ShareIcons } from '../blog/share-icons'
import { AspectRatio } from '../ui/aspect-ratio'

type Props = {
    slug: string
    title: string
    description: string
    icon: string
    url?: string
    github?: string
    image?: string
    author?: string
    date?: string
}
// icon,
export function Header({ title, description, url, github, image, author, date, slug }: Props) {
    return (
        <>
            <div className='space-t-16 pt-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='md:leading-14 text-balance text-center font-serif text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl'>
                        {title}
                    </h1>
                    <p className='text-center text-muted-foreground'>{description}</p>
                </div>

                <div className='mt-4 flex w-[full] justify-between'>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/gallery/6.webp'}
                            width={25}
                            height={25}
                            alt={'author image'}
                            className='rounded-full object-cover object-center'
                        />
                        <div className='flex flex-col'>
                            <p className='text-[11px] dark:text-gray-200'>Written by</p>
                            <p className='text-[11px] dark:text-gray-400'>{author}</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-right'>
                        <p className='text-[11px] dark:text-gray-200'>Published on</p>
                        <p className='text-[11px] dark:text-gray-400'>{date}</p>
                    </div>
                </div>

                <div className='mt-2 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
                    <div className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'>
                        {url && (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                href={UtmUrl(url, {
                                    medium: UtmMediums.Projects,
                                    content: 'header',
                                })}
                                className='flex items-center text-sm dark:text-gray-200'>
                                <IconHome size={20} className='-mt-1 mr-2 inline-block' />
                                {url}
                            </Link>
                        )}

                        {github && (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                href={github}
                                className='flex items-center text-sm dark:text-gray-200'>
                                <IconBrandGithub size={20} className='-mt-1 mr-2 inline-block' />
                                {title}'s GitHub
                            </Link>
                        )}
                    </div>
                    <ShareIcons title={title} url={absoluteUrl(Routes.Project(slug))} className='justify-start' />
                </div>
            </div>

            {image && (
                <div className='my-6'>
                    <AspectRatio ratio={16 / 9} className='overflow-hidden rounded-lg border shadow-2xl'>
                        <Image src={image} alt={title} fill className='animate-reveal object-cover' />
                    </AspectRatio>
                </div>
            )}
        </>
    )
}
export default Header
