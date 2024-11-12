import React from 'react'
import { AlertCircle, Book, CheckCircle2, Flag, Info, LucideIcon } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'

type TypeMappingItem = {
    color: string
    icon: LucideIcon
}

const typeMapping: Record<string, TypeMappingItem> = {
    warning: {
        color: 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-100',
        icon: AlertCircle,
    },
    info: {
        color: 'bg-orange-200 text-orange-800 dark:bg-orange-600 dark:text-orange-100',
        icon: Info,
    },
    definition: {
        color: 'bg-lime-200 text-lime-800 dark:bg-lime-600 dark:text-lime-100',
        icon: Book,
    },
    theorem: {
        color: 'bg-emerald-200 text-emerald-800 dark:bg-emerald-600 dark:text-emerald-100',
        icon: CheckCircle2,
    },
    flag: {
        color: 'bg-sky-200 text-sky-800 dark:bg-sky-600 dark:text-sky-100',
        icon: Flag,
    },
    default: {
        color: 'bg-rose-200 text-rose-800 dark:bg-rose-600 dark:text-rose-100',
        icon: AlertCircle,
    },
}

type BoxProps = {
    text: string
    type?: keyof typeof typeMapping
}

const Box: React.FC<BoxProps> = ({ text, type = 'default' }) => {
    const typeConfig = typeMapping[type]
    const iconComponent = typeConfig?.icon

    return (
        <div className={`my-2 rounded-lg p-4 ${typeConfig?.color} `}>
            {iconComponent && (
                <span className='mb-1 mr-2 inline-flex items-center justify-center align-middle'>
                    {React.createElement(iconComponent, { size: 16 })}
                </span>
            )}
            <ReactMarkdown
                components={{ p: (props) => <p {...props} /> }}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                skipHtml={false}>
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default Box
