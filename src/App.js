import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import Section from './Section/Section.js';
import config from './config.js';
import Firebase from 'firebase/app';
import {
  Switch,
  Route
} from "react-router-dom";
import AddOrEditProduct from './AddOrEditProduct/AddOrEditProduct.js'

class App extends React.Component {
  constructor(props){
    super(props);
    Firebase.initializeApp(config);
  }
  
  render() {
    
    return (
      <div className="App">
          {/* This is the default components that should show up at all times! */}
          <Navbar/>
          <Switch>
          <Route exact path="/">
            <Section name="Apartments"/>
          </Route>
            <Route exact path="/apartments">
              <Section name="Apartments"/>
            </Route>
            <Route exact path="/houses">
              <Section name="Houses"/>
            </Route>
            <Route exact path="/layouts">
              <Section name="Layouts"/>
            </Route>
            <Route exact path="/monica">
              <AddOrEditProduct/>
            </Route>
          </Switch>
          {/* <AddOrEditProduct /> */}
          <Footer/>  
      </div>);    
  }
}
export default App;
