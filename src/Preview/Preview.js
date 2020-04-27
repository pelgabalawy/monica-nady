import './Preview.css'
import React from 'react';


// import DataWorker from '../Services/DataWorker.js'

class Preview extends React.Component {
        

    render() {
        const dd = this.props.data;
        const name = this.props.name;
        let comps = []
        for (var index = 1; index<dd.length; index++){
            comps.push(
                <div className="card" key={name+index}>
                    <img className="card-img-top" id={name+index} src="" alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{dd[index].title}</h5>
                        <p className="card-text">{dd[index].description}</p>
                        <p className="card-text"><small className="text-muted">{}</small></p>
                    </div>
                </div>
            )
        }
        
                    
        return (
            <div className="card-deck">
                {comps}
            </div>);
    }
}

export default Preview