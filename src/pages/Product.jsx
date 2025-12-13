import { useParams } from 'react-router-dom'
import Marquee from '../homepage/Marquee'
import Nav from '../homepage/Nav'
import Footer from '../homepage/Footer'

/**
 * Product Detail Page
 * Displays individual product details based on the product ID in the URL
 */
function Product() {
  const { id } = useParams()

  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow mt-12 px-12 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-4xl font-['Arapey',serif] mb-8">Product {id}</h1>
            <div className="text-center">
              <p className="product-grid-text">Product detail page coming soon...</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Product;

