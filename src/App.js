import React from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import Section from './Section/Section.js';
import config from './config.js';
import Firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";
import {
  Switch,
  Route
} from "react-router-dom";
import AddOrEditProduct from './AddOrEditProduct/AddOrEditProduct.js';

class App extends React.Component {

  constructor(props){
    super(props)
    this.status = {data: null} 
    if(Firebase.apps.length === 0){
      Firebase.initializeApp(config);
    }
  }

    /**
   * data:{
   *  "apartments": {
   *    1: {
   *      "description": "",
   *      "name": "",
   *      "title": "",
   *      "imgs": ""
   *    }
   *  }
   * 
   * }
   */

  componentDidMount() {
      this.getData(["apartments", "houses", "layouts"]).then((value) => {
        console.log(value)
        this.setState({data: value})
      });
  }

  async getData(sections) {
    let data = {};
    for(let i=0; i<sections.length; i++){
      data[sections[i]] = {}
      let ref = await Firebase.database().ref('/').child("products/" + sections[i]);
      ref.once('value').then(snapshot => {
          data[sections[i]] = snapshot.val();
          let ids = Object.keys(data[sections[i]])  
          for (let j=0; j<ids.length; j++){
            this.getImages(sections[i], ids[j], data[sections[i]][ids[j]]["name"]).then((tmp) =>{
              data[sections[i]][ids[j]]["img"] = tmp
            })
          }  
      })
    }
    // console.log(data)
    return data
  }

  // inputs: the section name, Ex: apartments | image_names list of names we got from the db
  // output: a list of downloadable links for all the images in the section folder in the firebase storage
  async getImages(section, folder_id, img){
    let storage = Firebase.storage().ref().child(section);
    let url_f = await storage.child(folder_id + "/" + img).getDownloadURL()
    return url_f  
  }

  render() {
    let data = this.state.data
    console.log(data)
    if(!data){
      return <div>loading...</div>
    }else{
      return (
        <div className="App">
            {/* This is the default components that should show up at all times! */}
            <Navbar/>
            <Switch> 
              <Route exact path="/">
                <Section name="apartments" data={data}/>
              </Route>
              <Route exact path="/apartments">
                <Section name="apartments" data={data}/>
              </Route>
              <Route exact path="/houses">
                <Section name="houses" data={data}/>
              </Route>
              <Route exact path="/layouts">
                <Section name="layouts" data={data}/>
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