import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerDetails}>
          <header>
            <h1 className='logo'>FaAfrica Research</h1>
            <p>
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </header>
          <nav>
            <ul>
              <li>
                <a href='/index.html'>Home</a>
              </li>
              <li>
                <a href='/index.html'>Services</a>
              </li>
              <li>
                <a href='/index.html'>About</a>
              </li>
              <li>
                <a href='/index.html'>Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.socialIcons}>
            <ul>
              <li>
                <i className='fa-brands fa-facebook-square'></i>
                <a href='www.facebook.com'>
                  {' '}
                  <span> Facebook</span>
                </a>
              </li>
              <li>
                <i className='fa-brands fa-instagram-square'></i>
                <a href='www.instagram.com'>
                  {' '}
                  <span> Instagram</span>
                </a>
              </li>
              <li>
                <i className='fa-brands fa-twitter-square'></i>
                <a href='www.twitter.com'>
                  {' '}
                  <span> Twitter</span>
                </a>
              </li>
              <li>
                <i className='fa-brands fa-whatsapp-square'></i>
                <a href='www.whatsapp.com'>
                  {' '}
                  <span> WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
