import React from 'react';
import './GalleryCard.css';
import parse from 'date-fns/parse';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import differenceInDays from 'date-fns/differenceInDays';

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
    const birthday = parse('30/03/2019 00:00', 'dd/MM/yyyy HH:mm', new Date());
    const years = differenceInYears(date, birthday);
    const months = differenceInMonths(date, birthday);
    const weeks = differenceInWeeks(date, birthday);
    const totalDays = differenceInDays(date, birthday);
    const remainderDays = totalDays - (weeks * 7);

    return (
      <div className="card">
        <img src={this.state.path} className="image" alt={this.state.caption}/>
        <div>{this.state.caption}</div>
        <div className="gallery-tags">{tags}</div>
        <div>
        {(months !== 0 && months !== 1) ? (months + ' months') :
            (weeks + (weeks === 1 ? ' week ' : ' weeks ')) +
            remainderDays + ((remainderDays === 1) ? ' day' : ' days')}</div>
      </div>
    );
  }
}

export default GalleryCard;
