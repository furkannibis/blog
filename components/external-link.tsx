import { AnchorHTMLAttributes } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

interface ExternalLinkProps extends LinkProps {
    newTab?: boolean
}

const ExternalLink = ({ newTab = true, ...props }: ExternalLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return newTab ? (
        <Link {...props}>
            <div className='absolute bottom-0 right-0 m-3 flex w-fit items-end rounded-full border bg-secondary/50 p-3 text-[#EDD4BB] transition-all duration-300 hover:rotate-12 hover:ring-1 hover:ring-[#EDD4BB]'>
                <MoveUpRight size={16} />
            </div>
        </Link>
    ) : (
        <Link {...props}>
            <div className='absolute bottom-0 right-0 m-3 flex w-fit items-end rounded-full border bg-secondary/50 p-3 text-[#EDD4BB] transition-all duration-300 hover:rotate-12 hover:ring-1 hover:ring-[#EDD4BB]'>
                <MoveUpRight size={16} />
            </div>
        </Link>
    )
}

export default ExternalLink
