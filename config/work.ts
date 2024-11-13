import { type StaticImageData } from 'next/image'

export type WorkType = {
    title: string
    company: string
    tech: string[]
    description: string
    date?: string
    link?: string
}

export const work: WorkType[] = [
    {
        title: 'Web Developer Intern',
        company: 'Rakort Information Technologies',
        tech: ['Postgresql • Python • FastAPI • React'],
        date: 'February 2024 – May 2024',
        link: 'https://rakort.com/',
        description: 'Backend development with FastAPI and frontend development with React, designing CRUD systems as projects and producing OOP-based solutions.'
    },
    {
        title: 'Software Developer Intern',
        company: 'Kirsehir Ahi Evran University IT Department',
        tech: ['Computer Networking • Python • GNU/Linux • Network Security'],
        date: 'September 2021 – December 2022',
        link: 'https://idari.ahievran.edu.tr/bidb',
        description: 'Cabin designs, network operations, web scraping tasks, and various penetration testing activities were carried out to enhance system performance and security.'
    },
    {
        title: 'Co-Founder',
        company: 'Network and Cyber Security Community',
        tech: ['CTF • Penetrationg Testing'],
        date: 'September 2021 - December 2023',
        description: 'Presentations and training sessions were held within the community, along with trips for students to gain practical experience. Participation in CTF (Capture The Flag) competitions was also encouraged to enhance cybersecurity skills.'
    }
]

export type EducationType = {
    title: string
    company: string
    description: string
    tech: string[]
    date: string
    link?: string
}

export const education: EducationType[] = [
    {
        title: 'Computer Science',
        company: 'Ahi Evran University',
        description: 'Studied core computer science concepts such as operating systems, networks, databases, object-oriented programming, and functional programming. Worked extensively with Python and PostgreSQL.',
        tech: ['Math • Statistics • OS • Network • Databases/PostgreSQL • OOP • Functional Programming • Python'],
        date: '2018 - 2024',
        link: 'https://www.ahievran.edu.tr/',
    },
]

export type ProjectType = {
    title: string
    description: string[]
    link?: string
}

export const project: ProjectType[] = [
    {
        title: 'furkanibis.dev',
        description: ['Taiwind, React, TypeScript, Next.js, MDX, shadcn/ui, Magic UI'],
        link: 'https://www.furkanibis.dev'
    },
    {
        title: 'CipherPass',
        description: ['A secure password manager that encrypts sensitive data, allowing only authorized users access.'],
        link: 'https://github.com/furkannibis/CipherPass'
    },
    {
        title: 'PeerShare',
        description: ['A file-sharing platform developed using Socket and FastAPI for real-time communication and efficient file transfer.'],
        link: 'https://github.com/furkannibis/PeerShare'
    },
    {
        title: 'Waffox',
        description: ['A web firewall developed using machine learning to analyze web traffic.'],
        link: 'https://github.com/furkannibis/waffox'
    },
    {
        title: 'DYOS',
        description: ['Performing vulnerability scanning through the CLI and notifying the user about vulnerability research via web scraping.'],
        link: 'https://github.com/furkannibis/DYOS'
    }
]