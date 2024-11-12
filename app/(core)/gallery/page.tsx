import { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { images } from '@/config/gallery'
import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { PageTitle } from '@/components/page-title'

import Gallery from './gallery'

const title = 'Gallery'
const description = 'A visual collection of my work and projects.'

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
            canonical: absoluteUrl(Routes.Gallery),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Gallery),
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/gallery.png`,
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
                    url: `${site.url}/images/og/gallery.png`,
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
            <PageTitle title='gallery' description='' fromColor='from-[#eccca1]' toColor='to-[#eccfff]' />
            <div className='mb-20 flex flex-col gap-8 text-left text-sm'>
                <p></p>
                <Gallery images={images} />
            </div>
        </>
    )
}
