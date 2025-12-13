import { Link } from 'react-router-dom'
import Marquee from '../homepage/Marquee'
import Nav from '../homepage/Nav'
import Footer from '../homepage/Footer'
import byredo1 from '../assets/byredo 1.png'
import byredo2 from '../assets/byredo 2.png'
import byredo3 from '../assets/byredo 3.png'
import byredo4 from '../assets/byredo 4.png'

const products = [
  { id: 1, name: "Product One", price: "$200", image: byredo1 },
  { id: 2, name: "Product Two", price: "$300", image: byredo2 },
  { id: 3, name: "Product Three", price: "$130", image: byredo3 },
  { id: 4, name: "Product Four", price: "$240", image: byredo4 },
]

/**
 * Shop Page
 * Displays all available products in a 2x2 grid layout
 */
function Shop() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow mt-0 flex flex-col">
          <h1 className="shop-heading text-center mb-5">Shop All Products</h1>
          <div className="w-full px-12 pb-6 mt-12">
            <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="product-card flex flex-col items-center justify-end cursor-pointer"
                >
                  <div className="mb-6 flex items-end product-image-wrapper" style={{ height: '400px' }}>
                    <div className="liquid-overlay"></div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image max-h-full max-w-[500px] h-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="product-grid-text mb-0.5">{product.name}</p>
                    <p className="product-grid-text">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Shop;

