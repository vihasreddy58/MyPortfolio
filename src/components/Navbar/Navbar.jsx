import React, { useContext } from 'react'; // Removed useState as it's no longer needed for drawer state
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

// Removed all icons except for the brand logo if needed, as they are typically not shown in a flat horizontal nav
// import { IoMenuSharp, IoClose, IoHomeSharp } from 'react-icons/io5';
// import { FaUser, FaFolderOpen } from 'react-icons/fa';
// import { HiDocumentText } from 'react-icons/hi';
// import { BsFillGearFill } from 'react-icons/bs';
// import { MdPhone } from 'react-icons/md';

function Navbar() {
  const { theme } = useContext(ThemeContext);
  // Removed const [open, setOpen] = useState(false);

  const shortname = (name) => name.length > 12 ? name.split(' ')[0] : name;

  return (
    <nav className="navbar" style={{ backgroundColor: theme.primary }}>
      <div className="navbar-container">
        {/* Brand/Logo */}
        <h1 style={{ color: theme.secondary }}>Vihas</h1>

        {/* Navigation Links - Now directly visible in a row */}
        <div className="nav-links-horizontal"> {/* New class for horizontal links */}
          <Link smooth to="/#home" className="nav-link-item">
            <span>Home</span>
          </Link>
          
          <Link smooth to="/#resume" className="nav-link-item">
            <span>Education</span>
          </Link>
          <Link smooth to="/#skills" className="nav-link-item">
            <span>Skills</span>
          </Link>
          <Link smooth to="/#projects" className="nav-link-item">
            <span>Projects</span>
          </Link>
        </div>

        {/* Removed the menu button and the entire drawer conditional rendering */}
        {/*
        <button
          className="nav-menu-button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{ color: theme.tertiary }}
        >
          <IoMenuSharp size={28} />
        </button>

        {open && (
          <div className="drawer-overlay" onClick={() => setOpen(false)}>
            <aside
              className="drawer"
              style={{ backgroundColor: theme.secondary }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="drawer-close-button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{ color: theme.primary }}
              >
                <IoClose size={28} />
              </button>

              <div className="nav-links"> // This div is replaced by nav-links-horizontal
                <Link smooth to="/#home" onClick={() => setOpen(false)} className="nav-link">
                  <IoHomeSharp />
                  <span>Home</span>
                </Link>
                // ... other sidebar links ...
              </div>
            </aside>
          </div>
        )}
        */}
      </div>
    </nav>
  );
}

export default Navbar;