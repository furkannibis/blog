'use client'

import React from 'react';
import Link from 'next/link';

import { ContactLinks, FooterLinkGroups, SocialLinks } from '@/config/links';
import { Icon, Icons } from '../icon';
import { CalendarButton } from '../calendar-button';

export function Footer() {
    const groupedFooterLinks = FooterLinkGroups.reduce(
        (acc, group) => {
            group.links.forEach((link, index) => {
                const groupIndex = Math.floor(index / 4)
                if (!acc[groupIndex]) acc[groupIndex] = []
                acc[groupIndex].push(link)
            })
            return acc
        },
        [] as (typeof FooterLinkGroups)[0]['links'][],
    )

    return (
        <footer className='relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl bg-background/30 p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
            <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                <div className='col-span-2 flex flex-col items-start gap-4 md:col-span-1'>
                    {ContactLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={`mailto:${link.mailto}`}
                            className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
                            {link.mailto}
                        </Link>
                    ))}
                    <CalendarButton />
                </div>

                {groupedFooterLinks.map((group, groupIndex) => (
                    <div key={groupIndex} className='flex flex-col items-start gap-4'>
                        {group.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
                                <div className='flex flex-row items-center justify-start gap-2'>
                                    <Icon name={link.icon} className='mr-2 size-5' />
                                    <span>{link.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}

                <div className='flex flex-col items-start gap-4'>
                    {SocialLinks.map((link) => (
                        <a
                            key={link.name}  // Github - Linkedin - Instagram - Twitter
                            href={link.url}
                            className='flex items-center text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'
                            target='_blank'
                            rel='noopener noreferrer'>
                            {React.createElement(Icons[link.icon], { className: 'w-5 h-5 mr-2' })} {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className='mt-8 text-left text-xs'>&copy; Furkan {new Date().getFullYear()}</div>
        </footer>
    )
}
