import React from 'react';
import Link from 'react-dom';

const NavBar = () => {
  return (
    <div className="App">
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      <Link to="/about">
        <button className="button">About</button>
      </Link>
    </div>
  );
};

export default NavBar;
