import Marquee from '../components/homepage/Marquee'
import Nav from '../components/homepage/Nav'
import MainPoster from '../components/homepage/MainPoster'
import ProductGrid from '../components/homepage/ProductGrid'
import Footer from '../components/homepage/Footer'

export default function HomePage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="flex-grow">
          <MainPoster />
          <ProductGrid />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
