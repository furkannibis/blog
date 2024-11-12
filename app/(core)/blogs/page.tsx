import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { getAllBlogPosts } from '@/lib/blog'
import { FilteredPosts } from '@/components/blog/filtered-posts'
// import { SubscribeForm } from '@/components/blog/subscribe-form'
import { PageTitle } from '@/components/page-title'

const title = 'Blogs'
const description = 'Açıklama Yaz.'

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
            canonical: absoluteUrl(Routes.Blogs),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Blogs),
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/blogs.png`,
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
                    url: `${site.url}/images/og/blogs.png`,
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
    const posts = await getAllBlogPosts()

    return (
        <>
            <PageTitle title='Blogs' description='' fromColor='from-[#eccca1]' toColor='to-[#eccfff]' />

            {/* <SubscribeForm className='mb-8' /> */}

            <FilteredPosts posts={posts} />
        </>
    )
}
