import { useState } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const match = useMatch('/');

  return (
    <header className={`header ${!match ? 'header-top' : ''}`}>
      <div className='container'>
        <h1>
          <Link 
          to='/'>
            Franklin Zapata
          </Link>
        </h1>
        <h2>
          I'm a passionate
          <span> Front-End Developer</span> from Colombia
        </h2>
        <nav className={`navbar ${open ? 'navbar-mobile' : '' }`}>
          <ul
          onClick={() => setOpen(false)}
          >
            <li>
              <NavLink 
              className={({ isActive }) => `nav-link` + (isActive ? ' active' : '')}
              to='/'
              >
              Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `nav-link` + (isActive ? ' active' : '')}
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `nav-link` + (isActive ? ' active' : '')}
                to='/resume'
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `nav-link` + (isActive ? ' active' : '')}
                to='/portfolio'
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => `nav-link` + (isActive ? ' active' : '')}
                to='/contact'
              >
                Contact
              </NavLink>
            </li>
          </ul>   
            <i 
            onClick={() => setOpen(!open)}
            className={
              `mobile-nav-toggle 
              bi bi-${open ? "x" : "list"}`
            }
            />
        </nav>

        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/franklin-zapata'
            target='_blank'
            rel='noopener noreferrer'
            className='linkedin'
            >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href='https://github.com/FranklinZ12'
            target='_blank'
            rel='noopener noreferrer'
            className='github'
            >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar