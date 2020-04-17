import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js'
import Navbar from './Navbar/Navbar.js'
import Section from './Section/Section.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section name="Apartments"/>
      <Section name="Houses"/>
      <Section name="Layouts"/>
      <Footer/>
    </div>
  );
}

export default App;
