import React from 'react';
import reactLogo from '../Assets/images/logo.svg';

const Home = () => {
  return (
    <div className="container page">
      <img src={reactLogo} width="200px" alt="React logo" />
      <h1 style={{ color: 'gray' }}>Hello React</h1>
    </div>
  );
};

export default Home;
