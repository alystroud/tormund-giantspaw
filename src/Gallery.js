import React from 'react';
import './Gallery.css';
import data from './data/data.json';
import GalleryCard from './GalleryCard.js';
import Filters from './Filters.js';
import parse from 'date-fns/parse';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import differenceInDays from 'date-fns/differenceInDays';

class Gallery extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: false,
      filterString: "",
      filterAge: "",
      refreshKey: 0
    };
    this.getAgeFromTimestamp = this.getAgeFromTimestamp.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onHashTagClick = this.onHashTagClick.bind(this);
  }

  render() {
    let visibleData = data.sort(function(a, b){
      return (parse(b.timestamp, 'dd/MM/yyyy HH:mm', new Date())) -
              (parse(a.timestamp, 'dd/MM/yyyy HH:mm', new Date()))
    });

    if(this.state.filterString !== "") {
      visibleData = visibleData.filter(item => {
        for(var i = 0; i < item.tags.length; i++){
          if((item.tags[i].toLowerCase()).indexOf(
              this.state.filterString.toLowerCase()) !== -1){
            return true;
          }
        }
        return false;
      });
    }
    if(this.state.filterAge !== "") {
      visibleData = visibleData.filter(item => {
        return this.state.filterAge === item.age;
      });
    }
    const ageList = [];
    visibleData.forEach((a) => {
      a.age = this.getAgeFromTimestamp(a.timestamp);
      if (!ageList.includes(a.age)) {
        ageList.push(a.age);
      }
    });
    const images = visibleData.map((item) =>
      <div key={item.id}
           className="gallery-card col-sm-12 col-xs-12 col-md-4 col-lg-3">
        <GalleryCard item={item} onHashTagClick={this.onHashTagClick}/>
      </div>
    );

    return (
      <div className="gallery-page">
      <Filters filterOpen={this.state.filterOpen}
               onFilterChange={this.onFilterChange}
               filterString={this.state.filterString}
               filterAge={this.state.filterAge}
               filterAgeList={ageList}
               refreshKey={this.state.refreshKey}
               onClick={this.onFilterClick}/>
        <div className="gallery-body">
          <div className="row">
            {images}
          </div>
        </div>

      </div>
    );
  }

  onFilterChange(hashtag, age) {
    const key = this.state.refreshKey;
    this.setState({
      filterString: hashtag,
      filterAge: age,
      refreshKey: key + 1
    });
  }

  onFilterClick() {
    var newFilterState = !this.state.filterOpen;
    this.setState({
      filterOpen: newFilterState
    });
  }

  onHashTagClick(hashtag) {
    const key = this.state.refreshKey;
    this.setState({
      filterString: hashtag,
      refreshKey: key + 1
    });
  }

  getAgeFromTimestamp(timestamp) {
    const date = parse(timestamp, 'dd/MM/yyyy HH:mm', new Date());
    const birthday = parse('30/03/2019 00:00', 'dd/MM/yyyy HH:mm', new Date());
    const years = differenceInYears(date, birthday);
    const months = differenceInMonths(date, birthday);
    const weeks = differenceInWeeks(date, birthday);
    const totalDays = differenceInDays(date, birthday);
    const remainderDays = totalDays - (weeks * 7);

    return (months !== 0 && months !== 1) ? (months + ' months') :
        (weeks + (weeks === 1 ? ' week ' : ' weeks ')) +
        remainderDays + ((remainderDays === 1) ? ' day' : ' days')
  }
}

export default Gallery;
