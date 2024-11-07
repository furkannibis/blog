import { NextResponse } from 'next/server'
import { absoluteUrl } from '@/utils/urls'
import RSS from 'rss'

import { site } from '@/config/site'
import { getAllBlogPosts } from '@/lib/blog'

export const GET = async () => {
    const feed = new RSS({
        title: "Furkan İBİŞ's Blog",
        description: "Furkan İBİŞ's personal website and blog",
        site_url: `${site.url}`,
        feed_url: `${site.url}/feed.xml`,
        language: 'en-US',
        image_url: `${site.url}/images/og/default.png`,
    })

    const allBlogPosts = await getAllBlogPosts()

    const allPosts = allBlogPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

    allPosts.map(({ title, summary, date, url, author }) => {
        feed.item({
            title: title,
            url: absoluteUrl(url),
            date: date,
            description: summary,
            author: author.name,
        })
    })

    return new NextResponse(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
