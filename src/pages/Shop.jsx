import Marquee from '../homepage/Marquee'
import Nav from '../homepage/Nav'
import ProductGrid from '../homepage/ProductGrid'
import Footer from '../homepage/Footer'

/**
 * Shop Page
 * Displays all available products in a grid layout
 */
function Shop() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow mt-12 flex flex-col">
          <h1 className="text-center text-4xl font-['Arapey',serif] mb-75">Shop All Products</h1>
          <ProductGrid />
        </div>
        <div className="mt-auto pt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Shop;

