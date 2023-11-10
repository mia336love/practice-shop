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
import CollaborationForm from './Components/Body/CollaborationForm/CollaborationForm';

// import Login from '.Components/Body/Login/Login'


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Body/Landing/Landing';
import Login from './Components/Body/Login/Login';
import Catalog from './Components/Body/Catalog/Catalog';


function App() {
  return (
    <BrowserRouter>
        <div>
          
            <Routes>
              <Route path='/' element={<Landing />} />
              {/* <Route path="/catalog" element={<Promotions />} /> */}
              <Route path='/login' element={<Login />}/>
              <Route path='/catalog' element={<Catalog />}/>

          </Routes>
        </div>
    </BrowserRouter>
    
  //   <div className={styles.mainApp}>
  //   {/* <Header /> */}
  //   <Welcome />
  //   <WhyWe />
  //   <Promotions />
  //   <Reviews />
  //   <Faq />
  //   {/* <Collaboration /> */}
  //   <CollaborationForm />
  //   <Footer />

  // </div>
  )
}

export default App;
