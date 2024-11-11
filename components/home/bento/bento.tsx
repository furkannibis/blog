/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable unused-imports/no-unused-vars */
'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanyard } from 'react-use-lanyard'

import { AnimatedListDemo } from '@/components/animated-list'
import { CalendarEmbed } from '@/components/calendar-embed'
import ExternalLink from '@/components/external-link'

import GithubCalendar from './github-calendar'
import PhysicsAnimation from './newton'
import WakatimeGraph from './wakatime-graph'
import { allProjects } from '@/.contentlayer/generated'
import { Routes } from '@/config/routes'

const variants = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
}

const BentoBox = () => {
    const bentoRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(bentoRef, { once: true, margin: '-100px' })

    return (
        <div className='ml-[calc(-50vw+50%+10px)] mt-12 w-[calc(100vw-20px)]'>
            <motion.section
                id='bento'
                className='bento mobile sm:sm xl:xl mx-auto grid max-w-[375px] grid-cols-2 gap-1 *:border  *:bg-[#101010] *:bg-cover *:bg-center *:bg-no-repeat sm:max-w-screen-sm xl:max-w-screen-xl xl:grid-cols-4'
                aria-label='Personal information and activity grid'
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                variants={variants}
                ref={bentoRef}
                transition={{
                    duration: 0.5,
                }}>
                <div
                    className='first a aspect-square border bg-cover bg-center bg-no-repeat sm:aspect-[2.1/1] xl:aspect-auto'
                    role='img'
                    aria-label='Introduction'
                    rel='preload'>
                    <div className='overlay a-silhouette size-full bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-200' />
                    <p className='sr-only'></p>
                </div>
                <div className='b has-overlay aspect-square' role='img' aria-label=''>
                    <div className='overlay b-overlay size-full bg-cover bg-center bg-no-repeat transition-opacity duration-200 xl:opacity-0' />
                    <p className='sr-only'></p>
                </div>
                <div className='c aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />
                <div className='d size-full sm:aspect-square'>
                    <div className='flex size-full flex-col items-center justify-center gap-1  bg-none '>
                        <AnimatedListDemo />
                    </div>
                </div>
                <div className='e has-overlay relative flex aspect-[6/5] items-start overflow-hidden p-4 hover:bg-none sm:aspect-[2.1/1] sm:items-center xl:aspect-auto'>
                    <div className='overlay e-overlay absolute inset-0 size-full bg-cover bg-center bg-no-repeat transition-opacity duration-200 xl:opacity-0' />
                    <div>
                        {allProjects
                            .filter((p) => p.collab)
                            .slice(0, 1)
                            .map(({ _id, name, category, image, description, date, slug }) => {
                                const imageUrl = image || '/default-image.jpg'
                                return (
                                    <span>
                                        <Image
                                            src={imageUrl}
                                            alt={"Featured image for the latest post"}
                                            width={477}
                                            height={251}
                                            className='w-full border border-border object-cover sm:ml-2 sm:w-[80%]'
                                        />

                                        <ExternalLink
                                            href={Routes.Project(slug)}
                                            newTab={false}
                                            aria-label={"Read the latest post:"}
                                            title='Read the latest post'
                                        />
                                    </span>
                                )
                            })}
                    </div>
                </div>
                <div className='f has-overlay relative flex aspect-square items-center justify-center overflow-hidden hover:bg-none sm:aspect-[2.1/1] xl:aspect-auto'>
                    <div className='overlay f-overlay absolute inset-0  size-full bg-cover bg-center bg-no-repeat transition-opacity duration-200 xl:opacity-0' />
                    <GithubCalendar username='furkannibis' hideColorLegend hideTotalCount />
                    <ExternalLink
                        href={'https://github.com/furkannibis'}
                        newTab={false}
                        aria-label={`github link:`}
                        title='github link'
                    />
                </div>
                <div className='g relative aspect-square'>
                    <div className='overlay g absolute inset-0 z-0 size-full bg-cover bg-center bg-no-repeat' />
                </div>
                <div className='h aspect-[1/2.1] xl:aspect-auto' aria-hidden='true' />

                <div className='has-overlay relative hidden  aspect-square size-full items-center justify-center hover:bg-none sm:flex'>
                    <div className='overlay absolute inset-0 size-full bg-cover bg-center bg-no-repeat transition-opacity duration-200 xl:opacity-0' />
                    <CalendarEmbed />
                </div>
                <div className='j relative size-full aspect-square'>
                    <div className='overlay rounded-3x1 absolute inset-0 size-full bg-cover bg-center bg-no-repeat transition-opacity duration-200 xl:opacity-0' />
                    <Image
                        className='w-full  object-cover'
                        src={'/bento/bento-item-j.png'}
                        width={300}
                        height={100}
                        alt=''
                    />
                </div>
                <div className='k relative aspect-square'>
                    <div className='overlay rounded-3x1  absolute inset-0  bg-cover bg-center bg-no-repeat' />
                    <Image
                        className='w-full object-cover'
                        src={'/bento/bento-item-k.png'}
                        width={300}
                        height={100}
                        alt=''
                    />
                </div>

                <div className='q relative aspect-square'>
                    <WakatimeGraph />
                </div>

                <div className='w relative  aspect-square  xl:aspect-auto'>
                    <PhysicsAnimation />
                </div>
            </motion.section>
        </div>
    )
}

export default BentoBox
