import React from 'react';
import './GalleryCard.css';

class GalleryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: this.props.item.caption,
      path: this.props.item.fileName,
      tags: this.props.item.tags,
      timestamp: this.props.item.timestamp,
      age: this.props.item.age
    };
  }

  render() {
    const tags = (this.state.tags).map((tag) =>
      <div key={tag} className="gallery-tag">
        <a href="#" onClick={() => this.onTagClick(tag)}>{'#' + tag + '  '}</a>
      </div>
    );

    return (
      <div className="card">
        <img src={this.state.path}
             className="image"
             alt={this.state.caption}/>
        <div>{this.state.caption}</div>
        <div className="gallery-tags">{tags}</div>
        <div>{this.state.age}</div>
      </div>
    );
  }

  onTagClick(tag) {
    this.props.onHashTagClick(tag);
  }
}

export default GalleryCard;
