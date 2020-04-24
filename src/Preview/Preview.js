import './Preview.css'
import React from 'react';
import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

// import DataWorker from '../Services/DataWorker.js'

class Preview extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {};
        // console.log(this.props)
        // let section = this.props.name
        this.getData(this.props.name.toLowerCase());   
    }

    getData (section) {
        //first section is the pulling the needed data from the db
        const storage = firebase.storage().ref();
        let { state } = this;
        //get the image names and decsription from the db
        let ref = firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);

            var data = this.state.products[section];
            for (var i=0; i<data.length; i++){
                if (data[i.toString()] !== undefined){
                    console.log(data[i].title);
                    console.log(data[i].description);
                    console.log(data[i].name);
                    //second section is using the pulled data to pull the links needed
                    //Get the download link to every image (add a loop here)
                    storage.child(section + state.products).getDownloadURL().then((url) => {
                        //build a json to display all of the images and descriptions
                        const g = state.products[section][i].name = url
                        this.setState(state)
                        console.log(state.products[section][i])
                    }).catch((error) => {
                    // Handle any errors
                    })
                }
            }
        
        });
    }
        

    render() {
        return (
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={this.state.products} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">status or date</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://www.washingtonian.com/wp-content/uploads/2019/05/ArlingtonFeatured54.jpg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">status or date</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">status or date</small></p>
                    </div>
                </div>
            </div>);
    }
}

export default Preview