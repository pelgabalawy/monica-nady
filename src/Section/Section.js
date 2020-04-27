import './Section.css';
import React from 'react';
import Preview from '../Preview/Preview.js'
import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

class Section extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:""
    }
    this.getData(this.props.name.toLowerCase())
  }

  getData(section) {
    var storage = firebase.storage().ref().child(section);  
    var ref = firebase.database().ref('/').child("products/" + section);
    var data_l = {}
    ref.once('value').then(snapshot => {
      data_l = snapshot.val();
      if (data_l){
        this.setState({data: data_l})
        for (let index=1; index<data_l.length; index++){
          storage.child(data_l[index].name).getDownloadURL().then(function(url){
              document.getElementById(section+index.toString()).src=url;
          }).catch(function(error) {
            console.log(error)
          });
        }
      }
      // console.log(this.state)
    });
  }

  render() {
    let nameAtt = this.props.name;
    return (
    <div>
      <br/>
      <div id="section" className="card">
        <div className="card-header" id={nameAtt}><h3>{nameAtt}</h3></div>
          <div className="card-body">
            <Preview data={this.state.data} name={nameAtt.toLowerCase()}/>
          </div>
      </div>
      <br/>
    </div>);
  }
}

export default Section