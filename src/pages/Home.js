import React from 'react';
import HomePage from '../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <HomePage/>
      
      {/* Outros componentes ou conteúdo da página */}
      <h1>Bem-vindo à Página Inicial!</h1>
      {/* Você pode adicionar mais conteúdo aqui */}
    </div>
  );
};

export default Home;

