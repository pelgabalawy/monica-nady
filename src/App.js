import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import Section from './Section/Section.js';
import config from './config.js';
import Firebase from 'firebase/app';
import AddOrEditProduct from './AddOrEditProduct/AddOrEditProduct.js'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"

class App extends React.Component {
  
  render() {
    Firebase.initializeApp(config);
    return (
      <div className="App">
        <Router>
          <Navbar/>

          {/* go to add a product or just the regular home page */}
          <Switch>
            <Route path="/">
              <Section name="Apartments"/>
              <Section name="Houses"/>
              <Section name="Layouts"/>
            </Route>  
            <Route path="/plm">
              <AddOrEditProduct />
            </Route>
          </Switch>

          <Footer/>  
        </Router>
      </div>);    
  }
}
export default App;
