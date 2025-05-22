import ReactMarkdown from 'react-markdown'

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="mdx prose prose-gray dark:prose-invert max-w-none">
      <ReactMarkdown>{code}</ReactMarkdown>
    </div>
  )
}
