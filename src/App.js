
import {Download, SectionWrapper, Features} from './components'
import assets from './assets'

const App = () => {
  return (
   <>
    <SectionWrapper 
      title="You own store of Nifty NFTs .
      Start Selling & Growing"
      description ="Buy, store, collect NFTs,
      exchange & earn crypto. Join 25+ million people using pronef marketplace "
      showBtn
      mokeupImg = {assets.homeHero}
      banner='banner'
    />
    <SectionWrapper 
      title="Smart User Interface NFTs marketplace"
      description ="Experience a buttery UI of ProNef marketplace.
      Smooth constant colors of fluent UI design"
      showBtn
      mokeupImg = {assets.homeCards}
      reverse
    />
    <Features />
    <SectionWrapper 
      title="Deploiment"
      description ="This app is built using Expo which runs in natively 
      in all users devices. You can easily get you app into propl's hands"
      mokeupImg = {assets.feature}
      reverse
    />
    <SectionWrapper 
      title="Creative way to showcase the store"
      description ="The app contains to screens , 
      the first one lists of all NFTs, 
      the seccond one display details of specific NFT"
      showBtn
      mokeupImg = {assets.homeCards}
      banner='banner02'
    />
    <Download />
   </>
  );
}

export default App;
