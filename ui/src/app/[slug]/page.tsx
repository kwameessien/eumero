import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { SanityDocument } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

type BlockChild = { text?: string }
type PortableBlock = { _type?: string; children?: BlockChild[] }

function portableTextToPlainText(blocks: PortableBlock[] | undefined): string {
  if (!blocks?.length) return ''
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children?.length) return ''
      return block.children.map((child) => child.text ?? '').join('')
    })
    .filter(Boolean)
    .join('\n\n')
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  image,
  body
}`

const fetchOptions = { next: { revalidate: 30 } }

type PostDoc = SanityDocument & {
  title?: string
  publishedAt?: string
  image?: Parameters<typeof urlFor>[0]
  body?: PortableBlock[]
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<PostDoc | null>(POST_QUERY, { slug }, fetchOptions)

  if (!post?.title) {
    notFound()
  }

  const bodyText = portableTextToPlainText(post.body)
  const imageUrl = post.image ? urlFor(post.image).width(1200).height(630).url() : null

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-12">
      <p className="mb-8">
        <Link className="text-sm text-black/60 underline hover:text-black" href="/">
          ← Back home
        </Link>
      </p>
      <article>
        <h1 className="mb-2 font-[family-name:var(--font-arapey)] text-4xl font-normal text-black">{post.title}</h1>
        <p className="mb-8 text-sm text-black/60">
          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : null}
        </p>
        {imageUrl ? (
          <div className="relative mb-8 aspect-[1200/630] w-full overflow-hidden rounded-sm bg-black/5">
            <Image
              alt={post.title ?? 'Post image'}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              src={imageUrl}
            />
          </div>
        ) : null}
        {bodyText ? (
          <div className="whitespace-pre-wrap text-black/80">{bodyText}</div>
        ) : null}
      </article>
    </main>
  )
}
