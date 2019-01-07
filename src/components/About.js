import React from 'react';
import redux from '../Assets/images/redux.svg';
const About = () => {
  return (
    <div className="container">
      <img src={redux} width="150px" alt="Redu logo" />
      <h1>This is the second page </h1>
      <p style={{ color: 'gray' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        blanditiis velit vero itaque ex quia modi laboriosam, recusandae non eum
        perspiciatis? Optio sapiente blanditiis, asperiores possimus placeat
        incidunt doloremque quia.
      </p>
    </div>
  );
};

export default About;
