import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News & Events', path: '/news-events' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">

        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img
            src="/images/milton-public-school-logo.png"
            alt="Milton Public School Manvi"
            className="brand-logo"
          />
        </NavLink>

        <nav className={`desktop-nav ${isOpen ? 'mobile-open' : ''}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+918088291165"
          className="header-phone"
        >
          <Phone size={17} />
          <span>Call Us</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;