import { Icons } from '@/components/icon';
import { Routes } from './routes';

type HeaderLinks = {
    icon: keyof typeof Icons
    href: string
    text: string
}[]

export const HeaderLinks: HeaderLinks = [
    {
        icon: 'aboutPage',
        href: Routes.About,
        text: 'About',
    },
    {
        icon: 'bookmarkPage',
        href: Routes.Bookmarks,
        text: 'Bookmarks',
    },
    {
        icon: 'projectsPage',
        href: Routes.Projects,
        text: 'Projects',
    },
    {
        icon: 'articlesPage',
        href: Routes.Articles,
        text: 'Articles',
    },
    {
        icon: 'blogsPage',
        href: Routes.Blogs,
        text: 'Blogs',
    },
    {
        icon: 'contactPage',
        href: Routes.Contact,
        text: 'Contact',
    },

    {
        icon: 'galleryPage',
        href: Routes.Gallery,
        text: 'Gallery',
    },
    { icon: 'archivePage', href: Routes.Archive, text: 'Archive' },
]

type FooterLinkGroups = {
    id: number
    links: {
        href: string
        icon: keyof typeof Icons
        title: string
    }[]
}[]

export const FooterLinkGroups: FooterLinkGroups = [
    {
        id: 2,
        links: [
            {
                href: Routes.About,
                icon: 'aboutPage',
                title: 'About',
            },
            {
                href: Routes.Bookmarks,
                icon: 'bookmarkPage',
                title: 'Bookmarks',
            },
            {
                href: Routes.Projects,
                icon: 'projectsPage',
                title: 'Projects',
            },
            {
                href: Routes.Articles,
                icon: 'articlesPage',
                title: 'Articles',
            },
            {
                href: Routes.Blogs,
                icon: 'blogsPage',
                title: 'Blogs',
            },
            {
                href: Routes.Gallery,
                icon: 'galleryPage',
                title: 'Gallery',
            },
            {
                href: Routes.Contact,
                icon: 'contactPage',
                title: 'Contact',
            },
            {
                href: Routes.Archive,
                icon: 'archivePage',
                title: 'Archive',
            },
        ],
    },
]

type SocialLinks = {
    name: string
    url: string
    handle: string
    icon: keyof typeof Icons
}[]

export const SocialLinks: SocialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/furkannibis',
        handle: '@furkannibis',
        icon: 'github',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/furkanibis/',
        handle: '@furkanibis',
        icon: 'linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/furkann_ibis/',
        handle: '@furkann_ibis',
        icon: 'instagram',
    },
    {
        name: 'Twitter',
        url: 'https://x.com/ibis_furkann',
        handle: '@ibis_furkann',
        icon: 'twitter',
    },
];

type ContactLinks = {
    name: string
    mailto: string
    email: string
    icon: keyof typeof Icons
    logo: string
}[]

export const ContactLinks: ContactLinks = [
    {
        name: 'Personal',
        mailto: 'ibis.furkann@gmail.com',
        email: 'ibis.furkann@gmail.com',
        icon: 'email',
        logo: '/images/favicon/icon.webp',
    },
    {
        name: 'Website',
        mailto: 'furkannibis.dev',
        email: 'ibis.furkann@gmail.com',
        icon: 'email',
        logo: '/images/favicon/icon.webp',
    },
]
