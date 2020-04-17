import './Preview.css'
import React from 'react';

class Preview extends React.Component {
  render() {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src="https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale" alt="Card cap"/>
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