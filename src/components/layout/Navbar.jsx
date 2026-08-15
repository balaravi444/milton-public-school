import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
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
      <div className="navbar">

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

        <div className="header-actions">
          <div className="header-phone" style={{ alignItems: 'center', gap: '8px' }}>
            <PhoneCall size={17} />
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.85rem', lineHeight: '1.2' }}>
              <a href="tel:+918088291165" style={{ color: 'inherit', textDecoration: 'none' }}>80882 91165</a>
              <a href="tel:+919901464563" style={{ color: 'inherit', textDecoration: 'none' }}>99014 64563</a>
            </div>
          </div>
        </div>

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