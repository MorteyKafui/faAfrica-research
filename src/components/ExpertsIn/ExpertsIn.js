import styles from './ExpertsIn.module.css';

import data from '../../data/accordionContents';
import AccordionItem from '../AccordionItem/AccordionItem';

const ExpertsIn = () => {
  return (
    <section className={styles.experts} id='about'>
      <div className='container'>
        <h2 className='subTitle'>We're experts in</h2>
        <div className='line'></div>

        <AccordionItem />
      </div>
    </section>
  );
};

export default ExpertsIn;
