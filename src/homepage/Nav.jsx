function Nav() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 mt-11">
      <div className="logo-text">
        EUMERO.
      </div>
      <div className="flex items-center gap-8">
        <a href="#" className="nav-text hover:text-black transition-colors">shop</a>
        <a href="#" className="nav-text hover:text-black transition-colors">search</a>
        <a href="#" className="nav-text hover:text-black transition-colors">usd</a>
        <a href="#" className="nav-text hover:text-black transition-colors">cart</a>
      </div>
    </nav>
  );
}

export default Nav;

