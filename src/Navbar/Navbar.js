import './Navbar.css'
import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
    <div className="navbar">
      <link href='https://fonts.googleapis.com/css?family=Liu Jian Mao Cao' rel='stylesheet'></link>
      <ul className="navbar-list">
        <li id="logo">
          <img id="logo-img" src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
        </li>
        <li id="name">Monica Nady</li>
        <li id="section1">Apartments <span role="img" aria-labelledby="apartment">&#127972;</span></li>
        <li id="section2">Houses <span role="img" aria-labelledby="house">&#127960;</span></li>
        <li id="section3">Layouts <span role="img" aria-labelledby="city">&#127961;</span></li>
      </ul>
    </div>);
  }
}

export default Navbar