import React from 'react';
import HomePage from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <HomePage/>
      <Banner/>
      <FeaturesSection/>
      <Footer/>
      
    </div>
  );
};

export default Home;

