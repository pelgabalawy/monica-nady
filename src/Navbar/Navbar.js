import './Navbar.css'
import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/apartments">
              {/* Logo Image */}
              <img src={process.env.PUBLIC_URL + './logo192.png'} width="45" alt="" className="d-inline-block align-middle mr-2" />
              {/* //Logo Text */}
              <span id="company_name" className="text-uppercase font-weight-bold">Monica Nady</span>
              </Link>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-Link active" to="/apartments">Apartments<span role="img" aria-labelledby="apartment">&#127972;</span></Link></li>
                <li className="nav-item"><Link className="nav-Link active" to="/houses">Houses<span role="img" aria-labelledby="house">&#127960;</span></Link></li>
                <li className="nav-item"><Link className="nav-Link active" to="/layouts">Layouts<span role="img" aria-labelledby="city">&#127961;</span></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        );
  }

}

export default Navbar