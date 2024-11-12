/* eslint-disable tailwindcss/no-contradicting-classname */
import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'

// import { getAllBlogPosts } from '@/lib/blog'
// import { FilteredPosts } from '@/components/blog/filtered-posts'
// import { SubscribeForm } from '@/components/blog/subscribe-form'

import BookmarksPage from './bookmarks'

const title = 'Bookmarks'
const description = 'Curated resources and tools for data and software development.'

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
            canonical: absoluteUrl(Routes.Bookmarks),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Bookmarks),
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/bookmarks.png`,
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
                    url: `${site.url}/images/og/bookmarks.png`,
                    width: 1200,
                    height: 630,
                    alt: description,
                    type: 'image/png',
                },
            ],
        },
    }
}

export default async function Page() {
    // const posts = await getAllBlogPosts()

    return (
        <>
            <BookmarksPage />
        </>
    )
}
