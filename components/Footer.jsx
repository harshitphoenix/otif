import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={`${styles.footerTop}`}>
        <div className='container'>
          <div className={`row`}>
            <div className='col'>
              <p className={styles.heading}>
                If you Have any Questions Contact Us.
              </p>
              <p className={styles.topContent}>
                OTIF bring together all the packages in mexico and the world.
                Otif Products facilitate logistics for your company that
                operates on the internet or in person. Our services includes
              </p>
            </div>
            <button className={styles.button}>Request a Quote </button>
          </div>
        </div>
      </div>
      <div className=''>
        <div>
          <h1>OTIF</h1>
        </div>
        <div className='row'>
          <div className='col-2'>
            <ul className={`${styles.footerItem}`}>
              <li className={styles.bottomHeading}>Products</li>
            </ul>
          </div>
          <div className='col-2'>
            <ul className={`${styles.footerItem}`}>
            <li className={styles.bottomHeading}>Shipping</li>
          </ul>
          </div><div className='col-2'>
            <ul className={`${styles.footerItem}`}>
            <li className={styles.bottomHeading}>International Shipping</li>
          </ul>
          </div>
          <div className='col-2'>
            <ul className={`${styles.footerItem}`}>
            <li className={styles.bottomHeading}>Parcel</li>
          </ul>
          </div><div className='col-2'>
            <ul className={`${styles.footerItem}`}>
            <li className={styles.bottomHeading}>Subscribe to our newsletter</li>
          </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <ul className={styles.footerItem}>
              <li>Terms and Conditions</li>
              <li>Companies</li>
              <li>Quoting</li>
              <li>Security</li>
              <li>Why OTIF?</li>
            </ul>
          </div>
          <div className='col-2'>
            <ul className={styles.footerItem}>
              <li>Shipping</li>
              <li>Shipping to</li>
              <li>Deliveries to Mexico</li>
              <li>Cheap shipping</li>
              <li>Package shipments</li>
              <li>Economic shipment</li>
              <li>National shipments</li>
              <li>Secure shipments</li>
              <li>Prepaid guides</li>
              <li>Express courier</li>
            </ul>
          </div>
          <div className='col-2'>
            <ul className={styles.footerItem}>
              <li>International Deliveries</li>
              <li>Shipping Monterrey</li>
              <li>Secure shipments</li>
            </ul>
          </div>
          <div className='col-2'>
            <ul className={styles.footerItem}>
              <li>Mails from Mexico</li>
              <li>Carssa</li>
              <li>Express Package</li>
              <li>Post Office</li>
              <li>Redpack</li>
              <li>Sendex</li>
              <li>UPS</li>
              <li>DHL</li>
            </ul>
          </div>
          <div className='col-3'>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className={styles.button} type='submit'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
