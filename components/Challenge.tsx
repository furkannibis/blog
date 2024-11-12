import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, File, PenTool, Star, Tag, User, Users } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import slugify from 'slugify'

interface ChallengeProps {
    challengeTitle: string
    authors: string[] | string
    solvers: string[] | string
    description: string
    points?: number
    category?: string
    solves?: number
    files?: string
}

const Challenge = ({
    challengeTitle,
    authors,
    solvers,
    description,
    points,
    category,
    solves,
    files,
}: ChallengeProps) => {
    const [userAvatars, setUserAvatars] = useState<{ [key: string]: string }>({})
    const usernameMapping: { [key: string]: string } = {
        jktrn: 'enscribe',
    }

    useEffect(() => {
        const fetchUserAvatars = async () => {
            const usernames = Array.isArray(solvers) ? Array.from(new Set(solvers)) : [solvers]

            try {
                const avatarData = await Promise.all(
                    usernames.map(async (username) => {
                        const response = await fetch(`https://api.github.com/users/${username}`)
                        return response.json()
                    }),
                )
                const avatars = avatarData.reduce((accumulator, current) => {
                    accumulator[current.login] = current.avatar_url
                    return accumulator
                }, {})
                setUserAvatars(avatars)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUserAvatars()
    }, [authors, solvers])

    const renderSolvers = (solverList: string[]) => (
        <>
            <span className='flex items-center space-x-2'>
                <Users size={14} strokeWidth={3} /> <b>solvers</b>:
            </span>
            {solverList.map((solver, index) => (
                <span key={solver} className='flex items-center space-x-2'>
                    -{' '}
                    {userAvatars[solver] ? (
                        <Image
                            src={userAvatars[solver]}
                            alt={`${solver}'s avatar`}
                            className='!m-0 inline-block size-4 rounded-full align-middle'
                            width={16}
                            height={16}
                        />
                    ) : (
                        <User size={16} strokeWidth={3} />
                    )}
                    {userAvatars[solver] ? (
                        <Link href={`https://github.com/${solver}`}>{usernameMapping[solver] || solver}</Link>
                    ) : (
                        <span>{usernameMapping[solver] || solver}</span>
                    )}
                    {index !== solverList.length - 1 && <br />}
                </span>
            ))}
        </>
    )

    const renderAuthors = (authorList: string[] | string) => (
        <>
            <span className='flex items-center space-x-2'>
                <PenTool size={14} strokeWidth={3} /> <b>authors</b>:
            </span>
            {Array.isArray(authorList) ? (
                authorList.map((author, index) => (
                    <span key={author}>
                        - {author}
                        {index !== authorList.length - 1 && <br />}
                    </span>
                ))
            ) : (
                <span>
                    - {authorList}
                    <br />
                </span>
            )}
        </>
    )

    const titleId = slugify(challengeTitle, { lower: true })

    return (
        <div className='my-6 overflow-hidden rounded-lg border border-border'>
            <div className='px-6 py-3'>
                <h2 id={titleId} className='!m-0 text-xl'>
                    {challengeTitle}
                </h2>
            </div>
            <div className='flex'>
                <div className='flex flex-col justify-center gap-1 bg-[#eee9e9] px-6 py-4 text-xs dark:bg-[#1616169c]'>
                    {Array.isArray(solvers) ? (
                        renderSolvers(solvers)
                    ) : (
                        <span className='flex items-center'>
                            <span className='flex items-center space-x-2'>
                                <User size={14} strokeWidth={3} /> <b>solver</b>:&nbsp;
                            </span>
                            <span className='flex items-center space-x-1'>
                                {userAvatars[solvers] ? (
                                    <Image
                                        src={userAvatars[solvers]}
                                        alt={`${solvers}'s avatar`}
                                        className='!m-0 inline-block size-4 rounded-full align-middle'
                                        width={16}
                                        height={16}
                                    />
                                ) : (
                                    <User size={16} strokeWidth={3} />
                                )}
                                {userAvatars[solvers] ? (
                                    <Link href={`https://github.com/${solvers}`}>
                                        {usernameMapping[solvers] || solvers}
                                    </Link>
                                ) : (
                                    <span>{usernameMapping[solvers] || solvers}</span>
                                )}
                                <br />
                            </span>
                        </span>
                    )}
                    {Array.isArray(authors) ? (
                        renderAuthors(authors)
                    ) : (
                        <span className='flex items-center space-x-2'>
                            <PenTool size={14} strokeWidth={3} /> <b>author</b>: {authors}
                            <br />
                        </span>
                    )}
                    {points && (
                        <span className='flex items-center space-x-2'>
                            <Star size={14} strokeWidth={3} /> <b>points</b>: {points}
                            <br />
                        </span>
                    )}
                    {category && (
                        <span className='flex items-center space-x-2'>
                            <Tag size={14} strokeWidth={3} /> <b>category</b>: {category}
                            <br />
                        </span>
                    )}
                    {solves && (
                        <span className='flex items-center space-x-2'>
                            <Check size={14} strokeWidth={3} /> <b>solves</b>: {solves}
                            <br />
                        </span>
                    )}
                    {files && (
                        <span className='flex items-center space-x-2'>
                            <File size={14} strokeWidth={3} /> <b>files</b>:{' '}
                            <ReactMarkdown components={{ p: (props) => <p {...props} /> }}>{files}</ReactMarkdown>
                            <br />
                        </span>
                    )}
                </div>
                <div className='flex flex-1 items-center justify-center bg-[#e6e4e4] p-4 text-center dark:bg-[#202020]'>
                    <span className='text-[13px]'>
                        <ReactMarkdown
                            components={{ p: (props) => <p {...props} /> }}
                            // @ts-ignore
                            rehypePlugins={[rehypeRaw]}>
                            {description}
                        </ReactMarkdown>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Challenge
