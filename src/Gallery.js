import React from 'react';
import './Gallery.css';
import data from './data/data.json';

class Gallery extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    const images = data.map((item) =>
      <div>
        <img src={item.fileName} className="image"/>
        <div>{item.caption}</div>
      </div>
    );

    return (
      <div className="gallery-page">
        <div>
          Gallery
          <div>
            {images}
          </div>
        </div>

      </div>
    );
  }
}

export default Gallery;
