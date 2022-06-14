import styles from './WhySection.module.css';

const WhySection = () => {
  return (
    <section className={styles.why} id='why'>
      <div className='container'>
        <h2 className='subTitle'>Why choose FaAfrica?</h2>
        <div className='line'></div>
        <div className={styles.content}>
          <div className='img-box'>
            <img
              src='https://glowriters.com/wp-content/uploads/2020/10/seo_home_woman.jpg'
              alt='why-img'
            />
          </div>
          <div className={styles.details}>
            <ul>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Combined experience of 30+ years</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Extensive appreciation of the African, European and North
                  American academic environment
                </span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Assisted over 300 clients</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Team of experts with relevant industry and research experience
                </span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, voluptates.
                </span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, voluptates.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
