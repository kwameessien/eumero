import Marquee from '../components/homepage/Marquee'
import Nav from '../components/homepage/Nav'
import MainPoster from '../components/homepage/MainPoster'
import RitualFeature from '../components/homepage/RitualFeature'
import RitualBodyCopy from '../components/homepage/RitualBodyCopy'
import Footer from '../components/homepage/Footer'

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
