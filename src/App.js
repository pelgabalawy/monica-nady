import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js'
import Navbar from './Navbar/Navbar.js'
import View from './View/View.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <View/>
      <Footer/>
    </div>
  );
}

export default App;
