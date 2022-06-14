import styles from './OurServices.module.css';

const OurServices = () => {
  return (
    <section className={styles.services} id='services'>
      <div className='container'>
        <h2 className='subTitle'>Our services include</h2>
        <div className='line'></div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className='subTitle-2'>Academic Research</h3>
            <ul>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Expert advice on topic selection</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Expert advice on structure of reports</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Expert guide for students in writing dissertations and reports
                </span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Proofreading reports</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Reviewing reports</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Data collection and Interview transportation</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Expert assistance in Data analysis and presentation</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Preparing students to defend their thesis</span>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3 className='subTitle-2'>Corporate Research</h3>
            <ul>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Market survey/research</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Market Plans</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>Business Plans</span>
              </li>
              <li>
                <i className='fa-solid fa-angle-right'></i>{' '}
                <span>
                  Internal Research (e.g. Developing staff questionnaires as
                  well as consumer questionnaires)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
