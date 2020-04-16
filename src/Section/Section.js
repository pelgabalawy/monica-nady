import './Section.css'
import React from 'react';

class Section extends React.Component {
  render() {
    return (
        <div className="container">
            <h2>Panel Heading</h2>
            <div className="panel panel-default">
                <div className="panel-heading">Panel Heading</div>
                <div className="panel-body">Panel Content</div>
            </div>
        </div>);
  }
}

export default Section