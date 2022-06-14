import styles from './Navbar.module.css';

import { useState } from 'react';

import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${styles.container}`}>
        <h1 className={styles.logo}>
          <img src={logo} alt='logo' />
        </h1>
        <ul className={styles.listItems}>
          <li>
            <a href='/index.html' className={styles.listItem}>
              Home
            </a>
          </li>
          <li>
            <a className={styles.listItem} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a href='#about' className={styles.listItem}>
              About
            </a>
          </li>
          <li>
            <a href='#contact' className={styles.listItem}>
              Contact
            </a>
          </li>
        </ul>
        <button
          className={styles.mobileBtn}
          onClick={() => setIsOpened(prevState => !prevState)}
        >
          {!isOpened ? (
            <i className='fa-solid fa-bars'></i>
          ) : (
            <i className='fa-solid fa-xmark'></i>
          )}
        </button>
      </nav>
      <nav
        className={styles.mobileNav}
        style={{
          display: isOpened && 'block',
        }}
      >
        <ul>
          <li>
            <a href='/index.html'>Home</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
