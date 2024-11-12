'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowAutofitRight, IconChevronRight } from '@tabler/icons-react'
import { allProjects } from 'contentlayer/generated'

import { Routes } from '@/config/routes'

import Sidebar from './sidebar'

const categories = [
    { name: 'All Projects', count: allProjects.filter((project) => project.category).length },
    ...Array.from(
        allProjects.reduce((acc, project) => {
            if (project.category) {
                const category = acc.get(project.category) || { name: project.category, count: 0 }
                category.count += 1
                acc.set(project.category, category)
            }
            return acc
        }, new Map<string, { name: string; count: number }>()),
    ).map(([, value]) => value),
]

export default function ClientSideComponent() {
    const [activeCategory, setActiveCategory] = useState<string | null>('All Projects')
    const [currentPage, setCurrentPage] = useState(1)
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const [isContentVisible, setIsContentVisible] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const handleCategoryClick = (category: string) => {
        setIsContentVisible(false) // Hide content initially
        setTimeout(() => {
            setActiveCategory(category === activeCategory ? null : category)
            setCurrentPage(1)
            if (window.innerWidth <= 1024) {
                setIsSidebarVisible(false)
            }
        }, 300)
    }

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible)
    }

    useEffect(() => {
        if (!activeCategory && categories.length > 0) {
            setActiveCategory(categories[0].name)
        }
        setTimeout(() => setIsContentVisible(true), 100)
    }, [activeCategory])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const filteredProjects =
        activeCategory === 'All Projects'
            ? allProjects.filter((project) => project.category)
            : allProjects.filter((project) => project.category === activeCategory)

    const postsPerPage = 20
    const totalPages = Math.ceil(filteredProjects.length / postsPerPage)
    const currentProjects = filteredProjects.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getVisiblePageNumbers = () => {
        return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const visiblePageNumbers = getVisiblePageNumbers()

    return (
        <>
            <Sidebar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
                isVisible={isSidebarVisible}
                toggleSidebar={toggleSidebar}
            />
            <h2 className='text-md sm:text-md md:text-md mb-2 mt-4 font-medium text-black dark:text-slate-100'>
                <div className='flex items-center gap-1'>
                    Projects <IconChevronRight className='size-5' /> {activeCategory}
                </div>
            </h2>
            {isClient && (isSidebarVisible || window.innerWidth > 1024) ? null : (
                <div className='flex w-full justify-center p-4'>
                    <button
                        onClick={() => {
                            setTimeout(toggleSidebar, 400)
                        }}
                        className='group -mx-3 rounded-full p-2 text-muted-foreground md:mx-0'>
                        <div className='flex items-center'>
                            <label className='hamburger ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1'>
                                <input type='checkbox' />
                                <svg viewBox='0 0 32 32'>
                                    <path
                                        className='line line-top-bottom'
                                        d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
                                    <path className='line' d='M7 16 27 16'></path>
                                </svg>
                            </label>
                            <span className='ml-8 mt-8 text-xs text-black  dark:text-white'>All Projects</span>
                        </div>
                    </button>
                </div>
            )}
            <div
                className={`grid-container transition-all duration-700 ${isContentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                    }`}>
                <div className='columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-2 lg:columns-3'>
                    {currentProjects.map((project) => (
                        <Link key={project._id} href={Routes.Project(project.slug || '')} passHref>
                            <div className='grid-item dark:thumbnail-shadow relative mb-3 flex aspect-auto flex-col space-y-4 rounded-md border p-4 transition-all duration-150 hover:bg-gray-100 dark:bg-muted dark:hover:bg-accent'>
                                <div className='image-container relative h-44 w-full'>
                                    <Image
                                        src={project.image as string}
                                        alt={project.name}
                                        fill
                                        className='image-hover-zoom rounded-lg object-cover'
                                        priority
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-md line-clamp-4 font-bold leading-snug dark:text-gray-100'>
                                        {project.name}
                                    </h3>
                                    <p className='line-clamp-6 text-[14px] leading-[18px] dark:text-gray-300'>
                                        <span className='flex items-center gap-1'>
                                            <IconArrowAutofitRight className='w-4' /> {project.category}
                                        </span>
                                    </p>
                                    <p className='line-clamp-6 text-[13px] leading-[18px] dark:text-gray-300'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {filteredProjects.length > postsPerPage && (
                <div className='mb-4 mt-10 flex items-center justify-center'>
                    {visiblePageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`mx-1 rounded-[10px] px-2 py-1 text-xs sm:px-3 sm:text-sm ${currentPage === pageNumber
                                    ? 'border border-white bg-black text-white'
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                            {pageNumber}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}
