'use client'

import Image from 'next/image'
import { type MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import Box from '../box'
import Challenge from '../Challenge'
import ClientTweetCard from '../client-tweet-card'
import CountryFlag from '../CountryFlag'
import { CtaCard } from '../cta-card'
import StaticTweet from '../StaticTweet'
import TweetCard from '../tweet-card'
import { Link } from '../ui/link'
import { Heading } from './heading'
import { ImageZoom } from './image-zoom'
import { ItemGrid } from './item-grid'
import { LinkCard } from './link-card'
import { Pre } from './pre'
import { Table } from './table'
import { Tree } from './tree'
import { Video } from './video'

type MdxProps = {
    code: string
}

const components: MDXComponents = {
    h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <Heading as='h2' {...props} />,
    h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <Heading as='h3' {...props} />,
    h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <Heading as='h4' {...props} />,
    h5: (props: React.ComponentPropsWithoutRef<'h5'>) => <Heading as='h5' {...props} />,
    h6: (props: React.ComponentPropsWithoutRef<'h6'>) => <Heading as='h6' {...props} />,
    a: ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link variant='article' {...rest}>
            {children}
        </Link>
    ),
    Image: ({ alt, ...rest }: React.ComponentPropsWithoutRef<typeof Image>) => (
        <>
            <ImageZoom>
                <Image className='rounded-md transition-transform hover:scale-[102%]' alt={alt} {...rest} />
            </ImageZoom>
            <figcaption className='text-center'>{alt}</figcaption>
        </>
    ),
    pre: Pre,

    // Custom components
    Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => <Alert {...props} />,
    AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => <AlertTitle {...props} />,
    AlertDescription: (props: React.ComponentPropsWithoutRef<typeof AlertDescription>) => (
        <AlertDescription {...props} />
    ),
    Table,
    ItemGrid,
    Tree,
    Video,
    LinkCard,
    CtaCard,
    Box,
    StaticTweet,
    CountryFlag,
    ClientTweetCard,
    TweetCard,
    Challenge,
}

const Mdx = ({ code }: MdxProps) => {
    const Component = useMDXComponent(code)

    return (
        <div className='prose prose-sm w-full max-w-none dark:prose-invert'>
            <Component components={{ ...components }} />
        </div>
    )
}

export default Mdx
