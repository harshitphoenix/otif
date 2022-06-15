import React from "react";
import styles from "./MainCard.module.css";
const MainCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav className={`${styles.navContainer} navbar navbar-expand-lg`}>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            {/* Navbar */}
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
                  Dropdown
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className={`${styles.navItem} nav-link dropdown-toggle`}
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Use Cases
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className={` dropdown-item`} href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className={`${styles.navItem} nav-link dropdown-toggle`}
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Resources
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className={`${styles.navItem} nav-link dropdown-toggle`}
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Company
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
           
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
      
      <div className={`row ${styles.card}`}>
        <div className='col-5'>
          <p className={styles.topText}>{props.topText}</p>
          <p className={styles.heading}>{props.title}</p>
          <p className={styles.content}>
            {props.content}
          </p>
          <button className={styles.button}>{props.button}</button>
        </div>
        <img src={props.image} className={`col-4 ${styles.image}`} />
      </div>
    </div>
  );
};

export default MainCard;
