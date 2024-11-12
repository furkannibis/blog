/* eslint-disable jsx-a11y/label-has-associated-control */
'use client'

import { useEffect, useState } from 'react'
import { IconChevronRight } from '@tabler/icons-react'

import { categories } from '@/config/bookmarks'
import ClientTweetCard from '@/components/client-tweet-card'
import Sidebar from '@/components/sidebar'
import BookmarkCard from '@/components/unorder-card'

export default function BookmarksPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(categories[0]?.name || null)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm] = useState('')
    const [isContentVisible, setIsContentVisible] = useState(false)
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const handleCategoryClick = (category: string) => {
        setIsContentVisible(false)
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

    const filteredBookmarks = activeCategory
        ? categories
            .find((category) => category.name === activeCategory)
            ?.bookmarks.filter(
                (bookmark) =>
                    bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()),
            ) || []
        : []

    const postsPerPage = 40
    const totalPages = Math.ceil(filteredBookmarks.length / postsPerPage)
    const currentBookmarks = filteredBookmarks.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getVisiblePageNumbers = () => {
        return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const visiblePageNumbers = getVisiblePageNumbers()

    return (
        <div className='relative min-h-screen text-gray-900'>
            <main className='flex flex-col items-center px-4 pl-0'>
                <Sidebar
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryClick={handleCategoryClick}
                    isVisible={isSidebarVisible}
                    toggleSidebar={toggleSidebar}
                />
                {isClient && (isSidebarVisible || window.innerWidth > 1024) ? null : (
                    <div className='flex w-full justify-center p-4'>
                        <button
                            onClick={() => {
                                setTimeout(toggleSidebar, 400)
                            }}
                            className='group -mx-3 rounded-full p-2 text-muted-foreground md:mx-0'>
                            <div className='flex items-center '>
                                <label className='hamburger ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1'>
                                    <input type='checkbox' />
                                    <svg viewBox='0 0 32 32'>
                                        <path
                                            className='line line-top-bottom'
                                            d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
                                        <path className='line' d='M7 16 27 16'></path>
                                    </svg>
                                </label>
                                <span className='ml-8 mt-8 text-xs text-white'>All Bookmarks</span>
                            </div>
                        </button>
                    </div>
                )}
                {activeCategory && (
                    <div className='w-full max-w-7xl flex-1 '>
                        <h2 className='text-md sm:text-md md:text-md mb-2 mt-4 font-medium text-slate-100'>
                            <div className='flex items-center gap-1'>
                                Bookmarks <IconChevronRight className='size-5' /> {activeCategory}
                            </div>
                        </h2>
                        <div
                            className={`grid-container transition-all duration-700 ${isContentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                                }`}>
                            <div
                                className={`gap-5 ${activeCategory === 'Tweets' ? 'sm:columns-1 md:columns-2' : 'sm:columns-2 md:columns-3'}`}>
                                {' '}
                                {currentBookmarks.map((bookmark) =>
                                    activeCategory === 'Tweets' ? (
                                        <ClientTweetCard
                                            key={bookmark.id}
                                            id={bookmark.id}
                                            className='mb-4 shadow-2xl'
                                        />
                                    ) : (
                                        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                                    ),
                                )}
                            </div>
                        </div>
                        {filteredBookmarks.length > 0 && (
                            <div className='mb-10 mt-8 flex items-center justify-center'>
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
                    </div>
                )}
            </main>
        </div>
    )
}
