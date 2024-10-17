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
      {/* Outros componentes ou conteúdo da página */}
      <FeaturesSection/>

      <Footer/>
      {/* Você pode adicionar mais conteúdo aqui */}
    </div>
  );
};

export default Home;

