import './Section.css';
import React from 'react';
import Preview from '../Preview/Preview.js'
import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

const initialState = {
  data: ""
};

class Section extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState
    this.getData(this.props.name.toLowerCase())
  }
  
  

  componentDidMount() {
    this.setState(initialState)
    this.getData(this.props.name.toLowerCase())
  }

  // loadData() {
  //   this.getData(this.props.name.toLowerCase())
  //   this.preview = <Preview name={this.props.name.toLowerCase()} data={this.state.data}/>;
  // }

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
    return (
    <div>
      <br/>
      <div id="section" className="card">
        <div className="card-header" id={this.props.name}><h3>{this.props.name}</h3></div>
          <div className="card-body" id="cardBody">
            {<Preview name={this.props.name.toLowerCase()} data={this.state.data}/>}
          </div>
      </div>
      <br/>
    </div>);
  }
}

export default Section