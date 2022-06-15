import React from "react";
import styles from "./MainCard.module.css";
const MainCard = (props) => {
  return (
    <div className={styles.container}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
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
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
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
              <li className='nav-item'>
                <a
                  className='nav-link disabled'
                  href='#'
                //   tabindex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className={`row ${styles.card}`}>
        <div className='col-5'>
          <p className={styles.topText}>{props.topText}</p>
          <p className={styles.heading}>{props.title}</p>
          <p className={styles.content}>
            {props.content}
          </p>
          <button className={styles.button}>{props.button}</button>
        </div>
        <img src='./rectangle.png' className={`col-4 ${styles.image}`} />
      </div>
    </div>
  );
};

export default MainCard;
