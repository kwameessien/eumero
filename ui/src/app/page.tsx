import Marquee from '@/components/layout/Marquee'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MainPoster from '@/components/homepage/MainPoster'
import RitualFeature from '@/components/homepage/RitualFeature'
import RitualBodyCopy from '@/components/homepage/RitualBodyCopy'
import SanityPosts from '@/components/homepage/SanityPosts'

export default async function HomePage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="shrink-0">
            <MainPoster />
          </div>
          <div className="shrink-0">
            <RitualFeature />
          </div>
          <RitualBodyCopy />
          <SanityPosts />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
