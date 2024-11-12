import Image from 'next/image'
import Link from 'next/link'
import { IconExternalLink } from '@tabler/icons-react'

import { Routes } from '@/config/routes'

export function ProjectCollabCard({ project }: { project: any }) {
    const tagClasses = ['tag--1', 'tag--2', 'tag--3', 'tag--4', 'tag--5']

    return (
        <Link
            href={Routes.Project(project.slug)}
            target='_blank'
            className='group  rounded-xl px-2 py-4  shadow-feature-card dark:shadow-feature-card-dark '>
            {project.icon && (
                <div className='image-container'>
                    <Image
                        src={project.icon ?? 'logo-me.webp'}
                        width={920}
                        height={720}
                        alt={project.title}
                        className='image-hover-zoom aspect-video animate-reveal rounded-sm object-cover object-center'
                    />
                </div>
            )}

            <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
                {project.date}
                <div className='flex gap-2'></div>
            </div>
            <div className='flex flex-col px-2 py-4'>
                <h3 className='font-title text-2xl font-bold'>{project.name}</h3>
                <p className='mt-2 text-muted-foreground'>{project.description}</p>
            </div>
            <div className='mt-4 grow items-start space-y-2'>
                <div className='flex flex-wrap items-center gap-2 pb-4'>
                    {project.tags && project.tags.length > 0 && (
                        <>
                            <div className='text-muted-foreground'>•</div>
                            {project.tags.map((t: string, index: number) => (
                                <div
                                    key={t}
                                    className={`tag ${tagClasses[index % tagClasses.length]} highlight items-center italic`}>
                                    {t}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <IconExternalLink className='absolute right-4 top-2 text-white opacity-0 transition-opacity group-hover:opacity-100' />
        </Link>
    )
}
