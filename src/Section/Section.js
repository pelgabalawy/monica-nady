import './Section.css';
import React from 'react';
import Preview from '../Preview/Preview.js'

class Section extends React.Component {
  render() {
    let nameAtt = this.props.name;
    return (
    <div>
      <br/>
      <div id="section" className="card">
        <div className="card-header" id={nameAtt}><h3>{nameAtt}</h3></div>
          <div className="card-body">
            <Preview name={nameAtt}/>
          </div>
      </div>
      <br/>
    </div>);
  }
}

export default Section