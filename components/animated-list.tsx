'use client'

import { cn } from '@/lib/utils'
import { AnimatedList } from './ui/animated-list';

interface Item {
    name: string
    description: string
    icon: string
    color: string
    time: string
}

let notifications = [
    {
        name: 'Born',
        description: 'March 28',
        time: '25 years ago',
        icon: '👶🏻',
        color: '#F9ED69',
    },
    {
        name: 'Started University',
        description: 'Bachelor of Engineering',
        time: '7 years ago',
        icon: '🎓',
        color: '#F08A5D',
    },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()
const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-3',
                'transition-all duration-200 ease-in-out hover:scale-[103%]',
                'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
                'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
            )}>
            <div className='flex flex-row items-center gap-3'>
                <div
                    className='flex size-10 items-center justify-center rounded-2xl'
                    style={{
                        backgroundColor: color,
                    }}>
                    <span className='text-lg'>{icon}</span>
                </div>
                <div className='flex flex-col overflow-hidden'>
                    <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white '>
                        <div className='flex flex-col'>
                            <span className='sm:text-md text-sm'>{name}</span>
                            <span className='text-xs text-gray-500'>{time}</span>
                        </div>
                    </figcaption>
                    <p className='text-xs font-normal text-white/60'>{description}</p>
                </div>
            </div>
        </figure>
    )
}

export function AnimatedListDemo({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl',
                className,
            )}>
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    )
}
