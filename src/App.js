import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import Section from './Section/Section.js';
import config from './config.js';
import Firebase from 'firebase/';

class App extends React.Component {
  
  render() {
    Firebase.initializeApp(config);
    return (
      <div className="App">
        <Navbar/>
        <Section name="Apartments"/>
        <Section name="Houses"/>
        <Section name="Layouts"/>
        <Footer/>
      </div>);    
  }
}
export default App;
