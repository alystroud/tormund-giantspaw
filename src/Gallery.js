import React from 'react';
import './Gallery.css';
import data from './data/data.json';
import GalleryCard from './GalleryCard.js';

class Gallery extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    const images = data.map((item) =>
      <div key={item.id} className="gallery-card col-sm-12 col-xs-12 col-md-4 col-lg-3">
        <GalleryCard item={item}/>
      </div>
    );

    return (
      <div className="gallery-page">
        <div>
          <div className="row">
            {images}
          </div>
        </div>

      </div>
    );
  }
}

export default Gallery;
