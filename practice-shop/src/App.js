import './App.css';
import Welcome from './Components/Body/Welcome/Welcome';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Promotions from './Components/Body/Promotions/Promotions';
import WhyWe from './Components/Body/WhyWe/WhyWe';
import Collaboration from './Components/Body/Collaboration/Collaboration';
import Reviews from './Components/Body/Reviews/Reviews';

function App() {
  return (
    <div>
    <Header />
    <Welcome />
    <Footer />
    <WhyWe />
    <Promotions />
    <Reviews />
    <Collaboration />
  </div>
  )
}

export default App;
