import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={`${styles.container} navbar navbar-expand-lg`}>
      <div className='container-fluid'>
        <a className={`${styles.navItem} nav-link `} href='#'>
          Help
        </a>
        <a className={`${styles.navItem} nav-link `} href='#'>
          SignIn
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className={`${styles.navItem} nav-link dropdown-toggle`}
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                English
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Spanish
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Portuguese
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Japanese
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
