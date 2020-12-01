import './Section.css';
import React from 'react';

class Section extends React.Component {

  render() {
    return (
    <div>
      <br/>
      <div id="section" className="card">
        <div className="card-header" id={this.props.name}><h3>{this.props.name}</h3></div>
          <div className="card-body" id="cardBody">
            {/* {<Preview name={this.props.name.toLowerCase()} data={this.state.data}/>} */}
            {this.props.preview}
          </div>
      </div>
      <br/>
    </div>);
  }
}

export default Section