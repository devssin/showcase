import assets from '../assets'
import styles from '../styles/global'

const FeatureCard = ({iconText, iconUrl}) => (
  <div className={`${styles.featureCard}`}>
    <img src={iconUrl} alt={iconText} className={`${styles.featureImg}`}/>
    <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
)


const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using cross-platforme technology, React
            Native
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={assets.react} iconText='React Native' />
          <FeatureCard iconUrl={assets.javascript} iconText='JavaScript' />
          <FeatureCard iconUrl={assets.expo02} iconText='Expo' />
        </div>
      </div>
    </div>
  )
}

export default Features
