import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full px-6 py-8">
      <div className="flex flex-wrap justify-between items-center w-full">
        <a href="#" className="footer-text hover:text-black transition-colors">Newsletter</a>
        <Link to="/shop" className="footer-text hover:text-black transition-colors">Shop</Link>
        <Link to="/contact" className="footer-text hover:text-black transition-colors">Contact</Link>
        <a href="#" className="footer-text hover:text-black transition-colors">Instagram</a>
        <a href="#" className="footer-text hover:text-black transition-colors">Terms of Service</a>
        <a href="#" className="footer-text hover:text-black transition-colors">Shipping Policy</a>
        <a href="#" className="footer-text hover:text-black transition-colors">Refund Policy</a>
        <a href="#" className="footer-text hover:text-black transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;

