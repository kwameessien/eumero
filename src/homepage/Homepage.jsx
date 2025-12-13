import Marquee from './Marquee'
import Nav from './Nav'
import MainPoster from './MainPoster'
import ProductGrid from './ProductGrid'
import Footer from './Footer'

function Homepage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <MainPoster />
          <ProductGrid />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;

