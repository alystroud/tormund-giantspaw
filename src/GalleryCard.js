import React from 'react';
import './GalleryCard.css';

class GalleryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: this.props.item.caption,
      path: this.props.item.fileName,
      tags: this.props.item.tags
    };
  }

  render() {
    return (
      <div className="card">
        <img src={this.state.path} className="image"/>
        <div>{this.state.caption}</div>
        <div>{this.state.tags}</div>
      </div>
    );
  }
}

export default GalleryCard;
