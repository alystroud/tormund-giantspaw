import React from 'react';
import './GalleryCard.css';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInWeeks from 'date-fns/differenceInWeeks';

class GalleryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: this.props.item.caption,
      path: this.props.item.fileName,
      tags: this.props.item.tags,
      timestamp: this.props.item.timestamp
    };
  }

  render() {
    const tags = (this.state.tags).map((tag) =>
      <div key={tag} className="gallery-tag">
        <a href="">{'#' + tag + '  '}</a>
      </div>
    );

    const date = parse(this.state.timestamp, 'dd/MM/yyyy HH:mm', new Date());
    const birthday = parse('30/03/2019', 'dd/MM/yyyy', new Date());
    const months = differenceInMonths(date, birthday);
    const weeks = differenceInWeeks(date, birthday);

    return (
      <div className="card">
        <img src={this.state.path} className="image" alt={this.state.caption}/>
        <div>{this.state.caption}</div>
        <div className="gallery-tags">{tags}</div>
        <div>
        {(months != 0) ? (months + (months == 1 ? ' month' : ' months')) :
            (weeks + (weeks == 1 ? ' week' : ' weeks'))}</div>
      </div>
    );
  }
}

export default GalleryCard;
