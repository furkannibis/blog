import { url } from "inspector";
import { Metadata } from "next";

type Site = {
    title: string
    description: string
    url: string
    logo: string
}

export const site: Site = {
    title: 'Furkan İBİŞ',
    description: 'Practitioner Applying Cybersecurity and Data Engineering Principles.',
    url: process.env.NODE_ENV === 'production' ? 'https://furkannibis.dev' : 'http://localhost:3000',
    logo: '/images/logo.webp'
}

export const siteBaseMetadata: Metadata = {
    title: site.title,
    description: site.description,
    applicationName: 'furkannibis.dev',
    referrer: 'origin-when-cross-origin',
    keywords: ['Furkan İBİŞ', 'Siber Güvenlik', 'Sızma Testi', 'Cyber Security', 'Penetration Testing', 'Data Analyst', 'Veri Analizi', 'Makine Öğrenimi', 'Machine Learning'],
    authors: [
        {
            name: 'Furkan İBİŞ',
            url: 'https://furkannibis.dev'
        }
    ],
    creator: 'Furkan İBİŞ',
    publisher: 'Furkan İBİŞ',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    openGraph: {
        url: site.url,
        type: 'website',
        title: site.title,
        siteName: site.title,
        description: site.description,
        locale: 'en-US',
        images: [
            {
                url: `${site.url}/images/default.webp`,
                width: 1920,
                height: 1080,
                alt: site.description,
                type: 'image/webp'
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    icons: {
        icon: '/images/favicon/favicon.ico',
        shortcut: '/images/favicon/favicon.ico',
    },
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        site: '@ibis_furkann',
        creator: '@ibis_furkann',
        images: [
            {
                url: `${site.url}/images/default.webp`,
                width: 1200,
                height: 630,
                alt: site.description
            }
        ]
    },
    verification: {
        google: 'google-site-verification-id'
    },
    alternates: {
        canonical: site.url,
        languages: {
            'en-US': 'https://furkannibis.dev/en-US'
        },
        types: {
            'application/rss+xml': `${site.url}/rss.xml`,
        },
    },
    category: 'technology'
}