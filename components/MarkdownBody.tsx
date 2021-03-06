import React from 'react'

interface Props {
  children: string
}

const MarkdownBody = ({children}: Props) => {
  return (
    <div>
      <div className="markdown" dangerouslySetInnerHTML={{__html: children}} />

      <style jsx>{`
        .markdown {
          @apply text-lg leading-relaxed;
        }

        .markdown p,
        .markdown ul,
        .markdown ol,
        .markdown blockquote {
          @apply my-6;
        }

        .markdown h2 {
          @apply text-3xl mt-12 mb-4 leading-snug;
        }

        .markdown h3 {
          @apply text-2xl mt-8 mb-4 leading-snug;
        }
      `}</style>
    </div>
  )
}

export default MarkdownBody
