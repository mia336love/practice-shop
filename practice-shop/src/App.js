import './App.css';
import Welcome from './Components/Body/Welcome/Welcome';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Promotions from './Components/Body/Promotions/Promotions';
import WhyWe from './Components/Body/WhyWe/WhyWe';

function App() {
  return (
    <div>
    <Header />
    <Welcome />
    <Footer />
    <WhyWe />
    <Promotions />
  </div>
  )
}

export default App;
