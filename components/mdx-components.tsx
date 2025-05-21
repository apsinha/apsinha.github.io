import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image,
  // Add any custom components you want to use in your MDX here
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx prose prose-gray dark:prose-invert max-w-none">
      <Component components={components} />
    </div>
  )
}
