import './Preview.css'
import React from 'react';

// import DataWorker from '../Services/DataWorker.js'

class Preview extends React.Component {

    render() {
        let name = this.props.name;
        let dd = this.props.data;
        let comps = []
        if(!this.props.data || !this.props.ids[name] || !this.props.links){
            return <span></span>
        }else{
            for (var index = 0; index<this.props.ids[name].length; index++){
                comps.push(
                    <div className="card previewCard" key={name+this.props.ids[name][index].toLowerCase()}>
                        <img className="card-img-top" id={name+this.props.ids[name][index].toLowerCase()} src={this.props.links[name][index]} alt="Card cap"/>
                        <div className="card-body previewBody">
                            <div className="previewTitle">
                                <h4 className="card-title">{dd[name][this.props.ids[name][index]].title}</h4>
                            </div>
                            <p className="card-text">{dd[name][this.props.ids[name][index]].description}</p>
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
}

export default Preview