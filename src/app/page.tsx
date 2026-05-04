import Marquee from '@/components/layout/Marquee'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MainPoster from '@/components/homepage/MainPoster'
import RitualFeature from '@/components/homepage/RitualFeature'
import RitualBodyCopy from '@/components/homepage/RitualBodyCopy'

export default function HomePage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="flex-grow">
          <MainPoster />
          <RitualFeature />
          <RitualBodyCopy />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
