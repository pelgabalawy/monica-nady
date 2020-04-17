import './Footer.css'
import React from 'react';

class Footer extends React.Component {
  links = {
    "instagram":"https://instagram.com/m.n_for_interiordesign_?igshid=1brory2i0b70g",
    "facebook":"https://www.facebook.com/Monica-Nady-469700573826375/"
  }

  render() {
    return (
    <div className="footer">
    <br/><hr/>
      <ul className="footer-list">
        <li id='facebook'>
          <a href={this.links.facebook} target="_blank" rel="noopener noreferrer">
            <img id='facebook-img' src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="facebook link" />
          </a>
        </li>
        <li id='instagram'>
          <a href={this.links.instagram} target="_blank" rel="noopener noreferrer">
            <img id="instagram-img" src={process.env.PUBLIC_URL + '/images/insta.png'} alt='instagram link'/>
          </a>
        </li>
        <li id='copyrights'>All Rights Reserved</li>
      </ul>
    </div>);
  }
}

  export default Footer