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
      <div key={item.id} className="gallery-card">
        <GalleryCard item={item}/>
      </div>
    );

    return (
      <div className="gallery-page">
        <div>
          Gallery
          <div className="gallery">
            {images}
          </div>
        </div>

      </div>
    );
  }
}

export default Gallery;
