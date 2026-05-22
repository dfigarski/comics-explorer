import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link--active' : 'nav-link';

  return (
    <nav className="navbar">
      <NavLink to="/search" className={linkClass}>Szukaj</NavLink>
      <NavLink to="/collection" className={linkClass}>Kolekcja</NavLink>
    </nav>
  );
}

export default Navbar;