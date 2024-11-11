import { Icons } from '@/components/icon'

export type HeaderLinks = {
    icon: keyof typeof Icons
    href: string
    text: string
}[]

export enum UtmMediums {
    Blog = 'blog',
    Homepage = 'home',
    Projects = 'projects',
    Gallery = 'gallery',
    NotFound = 'not_found',
    Navbar = 'navbar',
    Footer = 'footer',
    NotificationPopup = 'notification_popup',
    Contact = 'contact',
}

export type UtmSource = 'furkannibis.dev'
