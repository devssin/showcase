import React from 'react'

import styles from '../styles/global'
import assets from '../assets'
import Button from './Button'

const SectionWrapper = ({ title, description, banner, showBtn, mokeupImg,reverse }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center ${!reverse ? styles.boxClass: styles.boxReverseClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`
          ${styles.descDiv} 
          ${!reverse ? 'fadeLeftMini' : 'fadeRightMini'}
        `}>
          <h1 className={`
            ${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText  }
          `}>{title}</h1>
          <p className={`
            ${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText  }  
          `}>{description}</p>
          {showBtn && <Button assetUrl={assets.expo} link='' />}
        </div>
        <div className={`flex-1 ${styles.flexCenter}`}>
          <img src={mokeupImg} alt='mokeup' className={`
            ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
          `} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper
