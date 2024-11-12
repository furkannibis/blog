'use client'

import { useEffect, useState } from 'react'
import { IconFolder, IconFolderOpen } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'

interface ProjectCategory {
    name: string
    count: number
}

interface SidebarProps {
    categories: ProjectCategory[]
    activeCategory: string | null
    onCategoryClick: (category: string) => void
    isVisible: boolean
    toggleSidebar: () => void
}

const variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    closed: {
        x: '-100%',
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
}

export default function Sidebar({
    categories,
    activeCategory,
    onCategoryClick,
    isVisible,
    toggleSidebar,
}: SidebarProps) {
    const [startY, setStartY] = useState<number | null>(null)
    const [currentY, setCurrentY] = useState<number | null>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        const handleTouchStart = (e: TouchEvent) => {
            setStartY(e.touches[0]?.clientY || 0)
        }

        const handleTouchMove = (e: TouchEvent) => {
            setCurrentY(e.touches[0]?.clientY || 0)
        }

        const handleTouchEnd = () => {
            if (startY !== null && currentY !== null && (startY - currentY > 50 || currentY - startY > 50)) {
                toggleSidebar()
            }
        }

        const sidebarElement = document.querySelector('#sidebar')
        sidebarElement?.addEventListener('touchstart', handleTouchStart as EventListener)
        sidebarElement?.addEventListener('touchmove', handleTouchMove as EventListener)
        sidebarElement?.addEventListener('touchend', handleTouchEnd as EventListener)

        return () => {
            sidebarElement?.removeEventListener('touchstart', handleTouchStart as EventListener)
            sidebarElement?.removeEventListener('touchmove', handleTouchMove as EventListener)
            sidebarElement?.removeEventListener('touchend', handleTouchEnd as EventListener)
        }
    }, [startY, currentY, toggleSidebar])

    if (!categories || categories.length === 0) {
        return <div className='p-4 text-gray-300 dark:bg-black'>No categories available</div>
    }

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-10 bg-black xl:hidden'
                        onClick={toggleSidebar}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isMounted && (isVisible || (typeof window !== 'undefined' && window.innerWidth >= 1280)) && (
                    <motion.div
                        id='sidebar'
                        className={`fixed left-0 z-20 h-screen w-full overflow-y-auto rounded-md p-3 px-2   text-black dark:text-gray-100  xl:w-1/6`}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        variants={variants}>
                        <ul className='mt-4'>
                            {categories.map((category) => (
                                <li key={category.name} className='mb-1 font-mono text-black'>
                                    <button
                                        className={`flex w-full flex-row items-center justify-between gap-1 rounded-md p-2 text-xs transition-colors duration-300 ${activeCategory === category.name
                                                ? 'bg-slate-300 font-medium text-white '
                                                : 'bg-zinc-50 font-medium hover:bg-[#eccca1] hover:text-black dark:bg-[#00000000] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                                            }`}
                                        onClick={() => onCategoryClick(category.name)}
                                        type='button'>
                                        <span
                                            className={`flex items-center gap-1 ${activeCategory === category.name
                                                    ? 'font-semibold text-slate-100 dark:text-black'
                                                    : 'font-semibold text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-gray-100'
                                                }`}>
                                            {activeCategory === category.name ? (
                                                <IconFolderOpen className='size-5' />
                                            ) : (
                                                <IconFolder className='size-5' />
                                            )}
                                            {category.name}
                                        </span>
                                        <span
                                            className={`flex size-5 items-center justify-center rounded border text-xs font-medium transition-colors duration-200 ${activeCategory === category.name
                                                    ? 'border-black bg-black text-white shadow-[2px_2px_0px_1px_#fafafa]'
                                                    : 'border-gray-600 bg-gray-200 text-black shadow-[2px_2px_0px_1px_#fafafa] group-hover:border-gray-600 '
                                                }`}>
                                            {category.count}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
