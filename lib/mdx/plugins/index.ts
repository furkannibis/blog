import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { type PluggableList } from 'unified'

import { rehypeCode } from './rehype/rehype-code'
import { rehypeInlineCode } from './rehype/rehype-inline-code'
import { remarkCode } from './remark/remark-code'
import { remarkHeading } from './remark/remark-heading'

// @ts-ignore
export const remarkPlugins: PluggableList = [remarkGfm, remarkHeading, remarkCode, remarkMath]
export const rehypePlugins: PluggableList = [rehypeCode, rehypeInlineCode, rehypeKatex]
