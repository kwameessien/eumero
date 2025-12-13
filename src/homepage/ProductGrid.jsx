import { Link } from 'react-router-dom'
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

function ProductGrid() {
  return (
    <div className="w-full px-12 pb-6 mt-20">
      <div className="flex flex-row justify-center items-end gap-40">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="product-card flex flex-col items-center justify-end cursor-pointer"
          >
            <div className="mb-4 flex items-end product-image-wrapper" style={{ height: '300px' }}>
              <div className="liquid-overlay"></div>
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image max-h-full max-w-[2000px] h-auto object-contain"
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
  );
}

export default ProductGrid;

