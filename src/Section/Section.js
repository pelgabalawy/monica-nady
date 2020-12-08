import './Section.css';
import React from 'react';


class Section extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:this.props.data,
      name: this.props.name
    }
  }

  render() {
    // console.log(this.state)
    let name = this.state.name;
    let dd = this.state[name]
    let ids = Object.keys(dd)
    let comps = []
    for (var index = 0; index<ids.length; index++){
        comps.push(
            <div className="card previewCard" key={name+ids[index]}>
                <img className="card-img-top" id={name+ids[index]} src={dd[ids[index]]["img"]} alt="Card cap"/>
                <div className="card-body previewBody">
                    <div className="previewTitle">
                        <h4 className="card-title">{dd[ids[index]].title}</h4>
                    </div>
                    <p className="card-text">{dd[ids[index]].description}</p>
                    <p className="card-text"><small className="text-muted">{}</small></p>
                </div>
            </div>
        )
    }   
    return (
      <div>
        <br/>
        <div id="section" className="card">
          <div className="card-header" id={this.props.name}><h3>{this.props.name}</h3></div>
            <div className="card-body" id="cardBody">
              <div className="card-deck">
                {comps}
              </div>
            </div>
        </div>
        <br/>
      </div>);
  }
  
}

export default Section