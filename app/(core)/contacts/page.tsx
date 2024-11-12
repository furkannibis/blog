import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl } from '@/utils/urls'
import { IconExternalLink } from '@tabler/icons-react'

import { ContactLinks, SocialLinks } from '@/config/links'
import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { CalendarEmbed } from '@/components/calendar-embed'
import { Icon } from '@/components/icon'
import { PageTitle } from '@/components/page-title'

const title = 'Contact'
const description =
    'Whether you want to get to know me or talk about a project or collaboration, write to me. Something good always comes out of a message.'

type Props = {
    params: Record<string, never>
    searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.Contact),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Contact),
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/contact.png`,
                    width: 1200,
                    height: 630,
                    alt: description,
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/contact.png`,
                    width: 1200,
                    height: 630,
                    alt: description,
                    type: 'image/png',
                },
            ],
        },
    }
}

export default function Page() {
    return (
        <>
            <PageTitle
                title='contact me'
                description='Whether you want to get to know me or talk about a project or collaboration, write to me. Something good always comes out of a message.'
                fromColor='from-[#eccca1]'
                toColor='to-[#eccfff]'
            />

            <h2 className='mt-16 text-xl font-bold md:text-2xl'>E-mail</h2>
            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6'>
                {ContactLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={`mailto:${link.mailto}`}
                            className='group flex flex-row items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent'>
                            <Image
                                src={link.logo}
                                alt={link.name + ' logo'}
                                width={32}
                                height={32}
                                className='-mt-1 mr-2 inline-block size-9 rounded-lg border-2'
                            />
                            <div className='flex grow justify-between'>
                                <h2 className='text-lg'>{link.mailto}</h2>
                                <IconExternalLink
                                    className='text-muted-foreground group-hover:text-accent-foreground'
                                    size={24}
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>

            <h2 className='mt-16 text-xl font-bold md:text-2xl'>let's have a talk..</h2>
            <div className='mt-4'>
                <CalendarEmbed />
            </div>

            <h2 className='mt-8 text-xl font-bold md:text-2xl'>Social</h2>
            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6'>
                {SocialLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className='group flex items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent'>
                            <Icon
                                name={link.icon}
                                className='size-7 text-sky-300'
                                size={48}
                                strokeWidth={1}
                                aria-hidden='true'
                            />
                            <div className='flex-1 flex-row'>
                                <h2 className='text-lg font-bold'>{link.name}</h2>
                                <div className='text-muted-foreground'>{link.handle}</div>
                            </div>
                            <IconExternalLink
                                className='text-muted-foreground group-hover:text-accent-foreground'
                                size={24}
                            />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
