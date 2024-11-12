import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'

import ClientSideComponent from './client-side-component'

const title = 'Projects'
const description = 'Açıklama Yaz'

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
            canonical: absoluteUrl(Routes.Projects),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Projects),
            title,
            description,
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
        },
    }
}
export default function Page() {
    return (
        <>
            <ClientSideComponent />
        </>
    )
}
