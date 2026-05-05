import Link from 'next/link'
import { type SanityDocument } from 'next-sanity'

import { client } from '@/sanity/lib/client'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

const fetchOptions = { next: { revalidate: 30 } }

export default async function SanityPosts() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, fetchOptions)

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <h2 className="mb-6 font-[family-name:var(--font-arapey)] text-3xl font-normal text-black">Posts</h2>
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="transition-opacity hover:opacity-70" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <p className="text-lg font-semibold text-black">{post.title}</p>
                <p className="text-sm text-black/60">{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
