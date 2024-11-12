'use client'

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { Routes } from '@/config/routes';
import { cn } from '@/lib/utils';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import {Icons} from './icon'
import { Badge } from './ui/badge';

export function Navbar() {
    const pathname = usePathname();
    return (
        <NavigationMenu className='hidden md:block'>
            <NavigationMenuList key={'navbar'}>
                <NavigationMenuItem key='about-menu-item' className='nav-1'>
                    <Link href={Routes.About} legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === Routes.About} className={navigationMenuTriggerStyle()}>
                            <span>About</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem key='projects-menu-item' className='nav-1'>
                    <Link href={Routes.Projects} legacyBehavior passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Projects}
                            className={navigationMenuTriggerStyle()}>
                            <span>Projects</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem key='articles-menu-item' className='nav-1'>
                    <Link href={Routes.Articles} legacyBehavior passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Articles}
                            className={navigationMenuTriggerStyle()}>
                            <span>Articles</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem key='blogs-menu-item' className='nav-1'>
                    <Link href={Routes.Blogs} legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === Routes.Blogs} className={navigationMenuTriggerStyle()}>
                            <span>Blogs</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem key='bookmarks-menu-item' className='nav-1'>
                    <Link href={Routes.Bookmarks} legacyBehavior passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Bookmarks}
                            className={navigationMenuTriggerStyle()}>
                            <span>Bookmarks</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem key='command-item-0' className='nav-1'>
                    <Link href={Routes.Gallery} legacyBehavior passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Gallery}
                            className={navigationMenuTriggerStyle()}>
                            <span>Gallery</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
        title: string
        href: string
        image?: string
        badge?: string
        icon?: keyof typeof Icons
    }
>(({ className, title, image, children, ...props }, _ref) => {
    return (
        <li key={props.key}>
            <NavigationMenuLink asChild>
                <Link
                    className={cn(
                        'focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent',
                        className,
                    )}
                    target={props.target || '_self'}
                    {...props}>
                    <div className='flex flex-row items-center gap-4'>
                        {image ? (
                            <Image src={image} height={30} width={30} alt='Logo' className='h-fit w-[30px]' />
                        ) : null}

                        <div className='flex flex-1 flex-col'>
                            <div className='flex flex-row gap-1'>
                                <div className='items-center text-sm font-semibold leading-tight'>
                                    {title}{' '}
                                    {props.badge && (
                                        <Badge className='ml-2' variant={'secondary'}>
                                            {props.badge}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <p className='mt-1 line-clamp-2 text-sm leading-tight text-muted-foreground'>{children}</p>
                        </div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = 'ListItem'