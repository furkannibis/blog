'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { EducationType, ProjectType, WorkType } from '@/config/work'

function WorkComponent({ title, company, description, tech, date, link }: WorkType) {
    const content = (
        <>
            <div className='grid grid-cols-2 items-center'>
                <div>
                    <time className='text-xs text-gray-500'>{date}</time>
                </div>

                <div className='flex flex-col'>
                    <div className='mb-2 flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-base font-medium text-gray-200'>{title}</p>
                            <p className='text-sm font-medium text-gray-300'>{company}</p>
                        </div>
                        <div className='flex items-center'>
                            {link ? (
                                <Link href={link} target='_blank'>
                                    <ArrowUpRight className='size-4' />
                                </Link>
                            ) : (
                                <div> </div>
                            )}
                        </div>
                    </div>
                    <p className='mb-2 text-xs  text-gray-400'>{description}</p>
                    <p className='mb-2 text-xs  text-gray-500'>{tech}</p>
                </div>
            </div>
        </>
    )
    return (
        <li
            className='flex justify-between border-b border-gray-800 pb-2 transition-opacity duration-500 ease-in-out '
            key={title}>
            {link ? (
                <Link href={link} className='flex w-full items-center justify-between '>
                    {content}
                </Link>
            ) : (
                <div className='flex w-full items-center justify-between'>{content}</div>
            )}
        </li>
    )
}

function ProjectComponent({ title, description, link }: ProjectType) {
    const ProjectContent = (
        <>
            <div className='flex w-full items-center justify-between '>
                <div className='flex flex-row items-center justify-center gap-3'>
                    <div className='flex flex-col'>
                        <p className={'mb-2 text-sm font-medium text-gray-300'}>{title}</p>
                        <p className='mb-2 text-xs  text-gray-500'>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <li
            className='flex justify-between border-b border-gray-800 pb-2 transition-opacity duration-500 ease-in-out '
            key={title}>
            {link ? (
                <Link href={link} className='flex w-full items-center justify-between '>
                    {ProjectContent}
                </Link>
            ) : (
                <div className='flex w-full items-center justify-between'>{ProjectContent}</div>
            )}
        </li>
    )
}

export default function Workplaces({ items }: { items: WorkType[] }) {
    return (
        <div>
            <span></span>
            <h3 className='text-md mb-8 space-y-6 font-bold text-neutral-400'>work</h3>
            <ul className='animated-list flex flex-col gap-2'>
                {items.map((workplace) => (
                    <WorkComponent key={workplace.title} {...workplace} />
                ))}
            </ul>
        </div>
    )
}

export function SideProjcets({ items }: { items: ProjectType[] }) {
    return (
        <div>
            <h3 className='text-md mb-8 space-y-6 font-bold text-neutral-400'>side projects</h3>
            <ul className='animated-list flex flex-col gap-2'>
                {items.map((project) => (
                    <ProjectComponent key={project.title} {...project} />
                ))}
            </ul>
        </div>
    )
}

export function Education({ items }: { items: EducationType[] }) {
    return (
        <div>
            <h3 className='text-md mb-8 space-y-6 font-bold text-neutral-400'>education</h3>
            <ul className='animated-list flex flex-col gap-2'>
                {items.map((education) => (
                    <WorkComponent key={education.title} {...education} />
                ))}
            </ul>
        </div>
    )
}
