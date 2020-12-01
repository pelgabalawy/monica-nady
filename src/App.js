import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import Section from './Section/Section.js';
import Preview from './Preview/Preview.js'
import config from './config.js';
import Firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";
import {
  Switch,
  Route
} from "react-router-dom";
import AddOrEditProduct from './AddOrEditProduct/AddOrEditProduct.js';

const initialState = {
  data: {},
  ind: {},
  lls: {}
};

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = initialState
    if(Firebase.apps.length === 0){
      Firebase.initializeApp(config);
    }
    this.getData("apartments")
  }
  
  
  componentDidMount() {
    this.setState(initialState)
    this.getData("layouts")
    this.getData("apartments")
    this.getData("houses")
  }

  getData(section) {
    let storage = Firebase.storage().ref().child(section);  
    let ref = Firebase.database().ref('/').child("products");
    let data_l = this.state.data
    let lks = this.state.lls
    lks[section] = []
    let dp = this.state.ind
    ref.once('value').then(snapshot => {
        data_l = snapshot.val();
        dp[section] = Object.keys(data_l[section])
        for (let index=0; index<dp[section].length; index++){
            storage.child(data_l[section][dp[section][index]].name).getDownloadURL().then(function(url){
              lks[section].push(url)
              //document.getElementById(section+dp[index].toString()).src=url;
            }).catch(function(error) {
              console.log(error)
            });
        }
        this.setState({data: data_l, ind: dp, lls: lks})
    });
  }

  render() {
    // console.log(this.state.data)
    if(!this.state.data || !this.state.ind || !this.state.lls){
      return <div>loading...</div>
    }else{
      return (
        <div className="App">
            {/* This is the default components that should show up at all times! */}
            <Navbar/>

            <Switch>
              <Route exact path="/">
              <Section name="Apartments" 
                preview={<Preview name="apartments" data={this.state.data} ids={this.state.ind} links={this.state.lls}/>}/>
              </Route>
              <Route exact path="/apartments">
                <Section name="Apartments" 
                  preview={<Preview name="apartments" data={this.state.data} ids={this.state.ind} links={this.state.lls}/>}/>
              </Route>
              <Route exact path="/houses">
                <Section name="Houses" 
                  preview={<Preview name="houses" data={this.state.data} ids={this.state.ind} links={this.state.lls}/>}/>
              </Route>
              <Route exact path="/layouts">
                <Section name="Layouts" 
                  preview={<Preview name="layouts" data={this.state.data} ids={this.state.ind} links={this.state.lls}/>}/>
              </Route>
              <Route exact path="/monica">
                <AddOrEditProduct/>
              </Route>
            </Switch>
            
            <Footer/>  
        </div>);
    }  
    
  }
  
}
export default App;
