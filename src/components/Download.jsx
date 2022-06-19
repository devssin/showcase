import styles from '../styles/global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code from github</p>
          
        </div>
        <a href='https://github.com/devssin/showcase' target='_blank' className={`${styles.btnPrimary}`} rel="noreferrer">Source Code</a>
      </div>
    </div>
  )
}

export default Download