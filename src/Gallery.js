import React from 'react';
import './Gallery.css';
import parse from 'date-fns/parse';
import data from './data/data.json';
import GalleryCard from './GalleryCard.js';
import Filters from './Filters.js';

class Gallery extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: false,
      filterString: "",
      filterAge: ""
    };
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onFilterClick() {
    var newFilterState = !this.state.filterOpen;
    this.setState({
      filterOpen: newFilterState
    });
  }

  render() {

    const visibleData = data.sort(function(a, b){
      return (parse(b.timestamp, 'dd/MM/yyyy HH:mm', new Date())) -
              (parse(a.timestamp, 'dd/MM/yyyy HH:mm', new Date()))
    });
    const images = visibleData.map((item) =>
      <div key={item.id}
           className="gallery-card col-sm-12 col-xs-12 col-md-4 col-lg-3">
        <GalleryCard item={item}/>
      </div>
    );

    return (
      <div className="gallery-page">
      <Filters filterOpen={this.state.filterOpen}
               onClick={this.onFilterClick}/>
        <div className="gallery-body">
          <div className="row">
            {images}
          </div>
        </div>

      </div>
    );
  }
}

export default Gallery;
