import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <div className='container'>
        <div className={styles.contactForm}>
          <h2 className='subTitle'> Place your order now</h2>
          <div className='line'></div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='name'>Name:</label>
              <input type='text' placeholder='Name' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='email'>Email:</label>
              <input type='email' placeholder='Email' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='phone'>Tel:</label>
              <input
                type='tel'
                placeholder='Telephone'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor=''>Essay (any type):</label>
              <select name='' id=''>
                <option value=''>Essay (any type)</option>
                <option value=''>Admission essay</option>
                <option value=''>Analysis (any type)</option>
                <option value=''>Annotated bibliography</option>
                <option value=''>Argumemtative essays</option>
                <option value=''>Article</option>
                <option value=''>Article review</option>
                <option value=''>Blog post</option>
                <option value=''>Book/movie review</option>
                <option value=''>Business plan</option>
                <option value=''>Capstone project</option>
                <option value=''>Case study</option>
                <option value=''>Coursework</option>
                <option value=''>Creative writing</option>
                <option value=''>Critical thinking</option>
                <option value=''>Discussion essay</option>
                <option value=''>Dissertation/Dissertation chapter</option>
                <option value=''>Journal article</option>
                <option value=''>Lab report</option>
                <option value=''>Literature analysis/ Review</option>
                <option value=''>Memo/Letter</option>
                <option value=''>Other</option>
                <option value=''>Outline</option>
                <option value=''>Personal reflection</option>
                <option value=''>Poem</option>
                <option value=''>Presentation.PPT</option>
                <option value=''>Question-Answer</option>
                <option value=''>Reflection paper.Reflection essay</option>
                <option value=''>Report (any type)/Brief report</option>
                <option value=''>Research paper</option>
                <option value=''>Response proposal</option>
                <option value=''>Response essay</option>
                <option value=''>Speech</option>
                <option value=''>Summary</option>
                <option value=''>Term paper</option>
                <option value=''>Thesis/Thesis chapter</option>
                <option value=''>Other</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor=''>Academic level:</label>
              <select name='' id=''>
                <option value=''>High School</option>
                <option value=''>Undergrad.(yrs 1-2)</option>
                <option value=''>Undergrad.(yrs 3-4)</option>
                <option value=''>Masters</option>
                <option value=''>PhD</option>
              </select>
            </div>
            <button className={`btn ${styles.formBtn}`}>
              Order Now &rarr;{' '}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
