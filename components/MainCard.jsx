import React from "react";
import styles from "./MainCard.module.css";
const MainCard = () => {
  return (
    <div className={styles.container}>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            Navbar
          </a>

          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class='dropdown-divider' />
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link disabled'
                  href='#'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className='row'>
        <div className='col-4'>
          <p className={styles.topText}>OTIF PLATFORM</p>
          <p className={styles.heading}>OPTIMIZATION OF GLOBAL SUPPLY CHAIN</p>
          <p className={styles.content}>
            OTIF is the next dimension of consolidation, orchestration, and
            optimization of the global supply chain networks, integrating
            different production enterprises and logistics providers for your
            convenience.
          </p>
          <button className={styles.button}>START</button>
        </div>
        <img src='./rectangle.png' className={`col-4 ${styles.image}`} />
      </div>
    </div>
  );
};

export default MainCard;
