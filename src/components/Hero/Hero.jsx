import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id='hero'>
      <div className='container'>
        {' '}
        <div className={styles.desc}>
          <h1 className={styles.title}>Get your paper done by an expert</h1>
          <p className={styles.text}>
            Fa-African.com is a professional academic writing service that
            caters to the needs of more than two thousand people globally, and
            on a daily basis. We truly have the academic assist expertise to
            tackle your assignment. The Writing Company for Quality, Custom
            academic papers. We only hire expert academic writers with credible
            qualifications.
          </p>
          <Link to='#' className={`btn ${styles.heroBtn}`}>
            Get Started <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
