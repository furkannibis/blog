import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

interface StaticTweetProps {
    avatar: string
    username: string
    handle: string
    date: string
    text: string
    src?: string
    media?: string
    video?: string
}

const StaticTweet: React.FC<StaticTweetProps> = ({ avatar, username, handle, date, text, src, media, video }) => {
    return (
        <div className='relative flex flex-col justify-center'>
            <div className='mx-auto my-4 rounded-xl border border-border p-4 duration-300'>
                <div className='flex justify-between space-x-4'>
                    <span className='group flex items-center gap-3'>
                        <Image
                            className='!m-0 rounded-full'
                            src={avatar}
                            alt={`${username}'s avatar`}
                            width={48}
                            height={48}
                        />
                        <div className='flex flex-col leading-snug'>
                            <span className='flex gap-2 font-bold'>
                                {username}
                                <span className='font-normal opacity-70'>@{handle}</span>
                            </span>
                            <span className='opacity-80'>{date}</span>
                        </div>
                    </span>
                    <a href={src}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='block dark:hidden'
                            x='0px'
                            y='0px'
                            width='20'
                            height='20'
                            viewBox='0 0 50 50'>
                            <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='hidden dark:block'
                            x='0px'
                            y='0px'
                            width='20'
                            height='20'
                            viewBox='0 0 50 50'>
                            <path
                                d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'
                                fill='#fff9f9'
                            />
                        </svg>
                    </a>
                </div>
                <div className='mt-3 leading-normal'>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
                <div className='flex items-center justify-center'>
                    {media && (
                        <Image src={media} alt='Tweet Media' width={500} height={400} className='!mb-0 rounded-md' />
                    )}
                </div>
                {video && (
                    <video controls width='100%' className='!mb-0 rounded-md'>
                        <source src={video} type='video/mp4' />
                        <track kind='captions' />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                )}
            </div>
        </div>
    )
}

export default StaticTweet
