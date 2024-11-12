'use client'

import { motion } from 'framer-motion'

type Props = {
    title: string
    description: string
    fromColor: string
    toColor: string
    animate?: boolean
}

const animation = {
    hide: {
        x: -30,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
}

export function PageTitle({ title, description, fromColor, toColor, animate = true }: Props) {
    return (
        <>
            <div className='mt-6  sm:mt-12'>
                <motion.h1
                    className={`my-4 bg-gradient-to-r ${fromColor} ${toColor}  bg-clip-text text-4xl font-extrabold text-transparent`}
                    {...(animate && {
                        initial: animation.hide,
                        animate: animation.show,
                    })}>
                    {title}
                </motion.h1>
                <motion.p
                    className='mb-8 text-muted-foreground'
                    {...(animate && {
                        initial: animation.hide,
                        animate: animation.show,
                        transition: {
                            delay: 0.1,
                        },
                    })}>
                    {description}
                </motion.p>
            </div>
        </>
    )
}
