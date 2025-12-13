import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
