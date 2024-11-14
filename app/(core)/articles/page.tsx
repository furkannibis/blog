import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'
import { allProjects } from 'contentlayer/generated'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { PageTitle } from '@/components/page-title'
import { ProjectCollabCard } from '@/components/project-collab-card'

const title = 'Articles'
const description = 'You can access Furkan\'s articles here. The articles will generally be related to cybersecurity, penetration testing and data science.'

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
            canonical: absoluteUrl(Routes.Articles),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Articles),
            title,
            description,
            images: [
                {
                    url: `${site.url}/images/og/articles.png`,
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
                    url: `${site.url}/images/og/articles.png`,
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
    return (
        <>
            <PageTitle
                title='Articles'
                description='read my blogs and thoughts'
                fromColor='from-[#eccca1]'
                toColor='to-[#eccfff]'
            />
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                {allProjects
                    .filter((p) => p.collab)
                    .map((project) => (
                        <ProjectCollabCard key={project._id} project={project} />
                    ))}
            </div>{' '}
        </>
    )
}
