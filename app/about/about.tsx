'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
}

export function About() {
    return (
        <div>
            <div className='flex flex-row items-center justify-center'>
                <div className="animate-reveal relative h-48 lg:h-64 max-w-[80rem]  w-full overflow-visible rounded-2xl bg-[url('https://pbs.twimg.com/media/GYHsY7ga8AAubeN?format=jpg&name=4096x4096')] bg-cover bg-center" />
            </div>
            <section className='m-8 mx-auto w-full max-w-2xl space-y-6'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='relative size-20'>
                        <div className='absolute inset-0 z-40 flex items-center justify-center'>
                        </div>
                        <div className='absolute inset-0 z-20 flex items-center justify-center'>
                            <Image
                                src='/gallery/6.webp'
                                className='rounded-full object-cover'
                                alt='Profile picture'
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <p className='vt323-regular text-lg text-neutral-200'>Furkan İbiş</p>
                        </div>
                        <p className='vt323-regular text-sm text-neutral-400'>Cyber Security Learner · Data Science Learner</p>
                    </div>
                </div>
            </section>
            <section className='mx-auto max-w-xl space-y-4'>
                <motion.p
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5 }}
                    variants={variants1}
                    className='text-sm text-neutral-400  drop-shadow-sm'>
                    Hello, my name is Furkan. I live in Ankara. I learn new things every day in the fields of cybersecurity and data science. When necessary, I also delve into areas like full-stack web development based on my own needs.
                </motion.p>

                <motion.p
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5 }}
                    variants={variants1}
                    className=' text-sm text-neutral-400  drop-shadow-sm'>
                    In addition to all of this, I create YouTube videos about penetration testing in cybersecurity, I'm interested in various combat sports like MMA and kickboxing, I play chess, and I enjoy reading history books and watching documentaries.
                </motion.p>

                <motion.p
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5 }}
                    variants={variants1}
                    className=' text-sm text-neutral-400  drop-shadow-sm'>
                    Currently, I'm developing simple web applications for my own projects and conducting penetration testing. I'm also participating in various CTF competitions to enhance my experience and knowledge.
                </motion.p>
            </section>
        </div>
    )
}
