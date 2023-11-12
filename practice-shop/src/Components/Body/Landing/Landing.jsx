import React from 'react';

import Welcome from '../Welcome/Welcome';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Promotions from '../Promotions/Promotions';
import WhyWe from '../WhyWe/WhyWe';
import Collaboration from '../Collaboration/Collaboration';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';
import CollaborationForm from '../CollaborationForm/CollaborationForm';

// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <WhyWe />
            <Promotions />
            <Reviews />
            <Faq />
            <Collaboration />
            {/* <CollaborationForm /> */}
            <Footer />
        </div>
    );
};

export default Landing;