import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 mt-11">
      <Link to="/" className="logo-text">
        EUMERO.
      </Link>
      <div className="flex items-center gap-8">
        <Link to="/shop" className="nav-text hover:text-black transition-colors">shop</Link>
        <a href="#" className="nav-text hover:text-black transition-colors">rituals</a>
        <a href="#" className="nav-text hover:text-black transition-colors">about</a>
        <a href="#" className="nav-text hover:text-black transition-colors">cart</a>
      </div>
    </nav>
  );
}

export default Nav;

