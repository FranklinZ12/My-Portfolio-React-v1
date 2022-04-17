import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <h1>
          <Link 
          className='a'
          to='/'>
            Franklin Zapata
          </Link>
        </h1>
        <h2>
          I'm a passionate
          <span> Front-End Developer</span> from Colombia
        </h2>
        <nav className='navbar'>
          <ul>
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
            className={
              `mobile-nav-toggle 
              fa-solid fa-${open ? "x" : "bars"}`
            }
            onClick={() => setOpen(!open)}
            />
        </nav>

        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/franklin-zapata'
            target='_blank'
            rel='noopener noreferrer'
            className='linkedin'
            >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href='https://github.com/FranklinZ12'
            target='_blank'
            rel='noopener noreferrer'
            className='github'
            >
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>

      </div>
    </header>
  )
}

export default Navbar