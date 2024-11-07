import React from 'react'
import {
    IconBookmark,
    IconBrandAppgallery,
    IconBrandBlogger,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandSpotify,
    IconBrandTiktok,
    IconBrandTwitch,
    IconBrandTwitter,
    IconDashboard,
    IconDeviceDesktop,
    IconFlame,
    IconFolder,
    IconInfoSquareRounded,
    IconListDetails,
    IconMessageCircle,
    IconPencil,
    IconPictureInPicture,
    IconSchool,
    IconSeeding,
    IconStars,
    IconSubtask,
} from '@tabler/icons-react'
import { ChevronRightSquare, Shrub, Target, type LucideIcon } from 'lucide-react'
import { EmailIcon } from 'react-share'

export const Icons = {
    developmentService: ChevronRightSquare,
    productGrowthAdvisoryService: Shrub,
    ctoService: Target,

    instagram: IconBrandInstagram,
    tiktok: IconBrandTiktok,
    github: IconBrandGithub,
    linkedin: IconBrandLinkedin,
    twitter: IconBrandTwitter,
    spotify: IconBrandSpotify,
    twitch: IconBrandTwitch,
    substack: IconSubtask,
    email: EmailIcon,

    servicesPage: IconDeviceDesktop,
    bookmarkPage: IconBookmark,
    learningProductsPage: IconSeeding,
    dashboardPage: IconDashboard,
    projectsPage: IconFlame,
    contactPage: IconMessageCircle,
    articlesPage: IconPencil,
    blogsPage: IconBrandBlogger,
    aboutPage: IconPictureInPicture,
    galleryPage: IconBrandAppgallery,
    archivePage: IconFolder,

    plWhatIsSection: IconInfoSquareRounded,
    plIsForYouSection: IconFlame,
    plWhatIsIncludedSection: IconListDetails,
    plTestimonialsSection: IconStars,

    tclWhatIsSection: IconInfoSquareRounded,
    tclMentorSection: IconSchool,
    tclIsForYouSection: IconFlame,
    tclWhatIsIncludedSection: IconListDetails,
}

export const Icon = React.forwardRef<
    React.ElementRef<LucideIcon>,
    React.ComponentPropsWithoutRef<LucideIcon> & {
        name: keyof typeof Icons
    }
>(({ name, className, ...props }, ref) => {
    const IconComponent = Icons[name]

    if (!IconComponent) {
        console.error(`Icon '${name}' not found.`)
        return null
    }

    return <IconComponent ref={ref} className={className} {...props} />
})

Icon.displayName = 'Icon'
