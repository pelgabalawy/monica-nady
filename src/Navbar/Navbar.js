import './Navbar.css'
import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <link href='https://fonts.googleapis.com/css?family=Liu Jian Mao Cao' rel='stylesheet'></link>
        <div className="container">
          <a href="Home" className="navbar-brand">
            {/* Logo Image */}
            <img src={process.env.PUBLIC_URL + './logo192.png'} width="45" alt="" className="d-inline-block align-middle mr-2" />
            {/* //Logo Text */}
            <span id="company_name" className="text-uppercase font-weight-bold">Monica Nady</span>
          </a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#Apartments" className="nav-link active">Apartments<span role="img" aria-labelledby="apartment">&#127972;</span></a></li>
              <li className="nav-item"><a href="#Houses" className="nav-link active">Houses<span role="img" aria-labelledby="house">&#127960;</span></a></li>
              <li className="nav-item"><a href="#Layouts" className="nav-link active">Layouts<span role="img" aria-labelledby="city">&#127961;</span></a></li>
            </ul>
          </div>
        </div>
      </nav>);
  }
}

export default Navbar