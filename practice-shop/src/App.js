import './App.css';

import styles from './App.css'

import Welcome from './Components/Body/Welcome/Welcome';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Promotions from './Components/Body/Promotions/Promotions';
import WhyWe from './Components/Body/WhyWe/WhyWe';
import Collaboration from './Components/Body/Collaboration/Collaboration';
import Reviews from './Components/Body/Reviews/Reviews';
import Faq from './Components/Body/Faq/Faq';


function App() {
  return (
    <div className={styles.mainApp}>
    {/* <Header /> */}
    <Welcome />
    <WhyWe />
    <Promotions />
    <Reviews />
    <Faq />
    <Collaboration />
    <Footer />

  </div>
  )
}

export default App;
