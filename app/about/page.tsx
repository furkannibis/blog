import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'

import { absoluteUrl } from '@/utils/urls'
import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { education, project, work } from '@/config/work'
import { Button } from '@/components/ui/button'
import Workplaces, { Education, SideProjcets } from '@/components/workplace'
import { About } from './about'
import { UsedTool } from './uses'

const title = 'About'
const description = 'Learn more about Furkan, a Cyber Security and Data Science Learner based in Ankara, Turkey.'

type Props = {
    params: Record<string, never>
    searchParams: Record<string, never>
}

export default function Page() {
    return (
        <main className='px-4 py-8'>
        <section>
            <About />
        </section>
        <section className='my-16'>
            <div className='mx-auto max-w-xl space-y-12'>
                <Workplaces items={work} />
                <Education items={education} />
                <SideProjcets items={project} />
                <UsedTool />
            </div>
        </section>
        </main>
    );
}