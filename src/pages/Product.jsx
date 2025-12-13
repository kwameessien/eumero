import { useParams } from 'react-router-dom'
import Marquee from '../homepage/Marquee'
import Nav from '../homepage/Nav'
import Footer from '../homepage/Footer'
import byredo1 from '../assets/byredo 1.png'
import byredo2 from '../assets/byredo 2.png'
import byredo3 from '../assets/byredo 3.png'
import byredo4 from '../assets/byredo 4.png'

const products = [
  { 
    id: 1, 
    name: "Product One", 
    price: "$200", 
    image: byredo1,
    description: "Bal d'Afrique is more than just a fragrance—it's a love letter to multicultural celebration, inspired by Ben Gorham's travels and memories of time spent with his father in Africa. His experiences shaped a deep connection to the continent's landscapes and diverse traditions. The fragrance opens with vibrant citrus and African florals, evoking the energy of bustling markets. At its heart, an earthy bouquet of Violet and Cyclamen reflects the untamed beauty of Africa's wild spaces. A warm base of Woods and Tonka Beans lingers, intertwining the lively spirit of his travels with an enduring sense of depth, inviting connection to Africa and beyond."
  },
  { 
    id: 2, 
    name: "Product Two", 
    price: "$300", 
    image: byredo2,
    description: "Bal d'Afrique is more than just a fragrance—it's a love letter to multicultural celebration, inspired by Ben Gorham's travels and memories of time spent with his father in Africa. His experiences shaped a deep connection to the continent's landscapes and diverse traditions. The fragrance opens with vibrant citrus and African florals, evoking the energy of bustling markets. At its heart, an earthy bouquet of Violet and Cyclamen reflects the untamed beauty of Africa's wild spaces. A warm base of Woods and Tonka Beans lingers, intertwining the lively spirit of his travels with an enduring sense of depth, inviting connection to Africa and beyond."
  },
  { 
    id: 3, 
    name: "Product Three", 
    price: "$130", 
    image: byredo3,
    description: "Bal d'Afrique is more than just a fragrance—it's a love letter to multicultural celebration, inspired by Ben Gorham's travels and memories of time spent with his father in Africa. His experiences shaped a deep connection to the continent's landscapes and diverse traditions. The fragrance opens with vibrant citrus and African florals, evoking the energy of bustling markets. At its heart, an earthy bouquet of Violet and Cyclamen reflects the untamed beauty of Africa's wild spaces. A warm base of Woods and Tonka Beans lingers, intertwining the lively spirit of his travels with an enduring sense of depth, inviting connection to Africa and beyond."
  },
  { 
    id: 4, 
    name: "Product Four", 
    price: "$240", 
    image: byredo4,
    description: "Bal d'Afrique is more than just a fragrance—it's a love letter to multicultural celebration, inspired by Ben Gorham's travels and memories of time spent with his father in Africa. His experiences shaped a deep connection to the continent's landscapes and diverse traditions. The fragrance opens with vibrant citrus and African florals, evoking the energy of bustling markets. At its heart, an earthy bouquet of Violet and Cyclamen reflects the untamed beauty of Africa's wild spaces. A warm base of Woods and Tonka Beans lingers, intertwining the lively spirit of his travels with an enduring sense of depth, inviting connection to Africa and beyond."
  },
]

/**
 * Product Detail Page
 * Displays individual product details based on the product ID in the URL
 */
function Product() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <>
        <Marquee />
        <Nav />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow mt-12 px-12 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="product-grid-text">Product not found</p>
            </div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow mt-12 px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left side - Product Image */}
              <div className="flex justify-center items-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-detail-image"
                />
              </div>
              
              {/* Right side - Product Details */}
              <div className="flex flex-col">
                <h1 className="product-title mb-6">{product.name.toUpperCase()}</h1>
                <p className="product-description mb-8">{product.description}</p>
                <p className="product-price mb-8">{product.price}</p>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
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

