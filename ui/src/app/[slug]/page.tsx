import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityDocument } from 'next-sanity'
import type { Image as SanityImage } from 'sanity'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

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
  body?: PortableTextBlock[]
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null
      }
      const src = urlFor(value as SanityImage).width(1200).url()
      if (!src) {
        return null
      }
      return (
        <figure className="my-6">
          <Image
            alt={value.alt || ''}
            className="h-auto w-full rounded-sm"
            height={Math.min(value.asset?.metadata?.dimensions?.height ?? 800, 1200)}
            src={src}
            width={Math.min(value.asset?.metadata?.dimensions?.width ?? 1200, 1200)}
          />
        </figure>
      )
    },
  },
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<PostDoc | null>(POST_QUERY, { slug }, fetchOptions)

  if (!post?.title) {
    notFound()
  }

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
        {post.body?.length ? (
          <div className="prose prose-neutral max-w-none text-pretty text-black prose-headings:font-[family-name:var(--font-arapey)] prose-headings:font-normal prose-p:text-black/80 prose-a:text-black">
            <PortableText components={portableTextComponents} value={post.body} />
          </div>
        ) : null}
      </article>
    </main>
  )
}
