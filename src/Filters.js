import React from 'react';
import './Filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: this.props.filterOpen,
      hashtag: "",
      age: ""
    };
    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
    this.onHashtagChange = this.onHashtagChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  render() {
    return (
      <div className="filters">
        {this.props.filterOpen ?
          <div className="filters-open">
            <div className="filter-title" onClick={this.props.onClick}>
              <FontAwesomeIcon className="caret" icon="caret-down"/>
              <div>Filters</div>
            </div>
            <div className="filters-filters">
              <div className="filters-age">
                <div>Age: </div>
                <select onChange={this.onAgeChange}>
                  <option></option>
                  <option>8 weeks</option>
                  <option>4 months</option>
                </select>
              </div>
              <div className="filters-hashtag">
                <div>Hashtag: </div>
                <input type="text"
                       onChange={this.onHashtagChange}
                       text={this.state.hashtag}/>
              </div>
            </div>
            <div className="filters-submit">
              <button type="button"
                      onClick={this.onSearchBtnClick}>Search</button>
            </div>
          </div> :
          <div className="filters-closed" onClick={this.props.onClick}>
            <FontAwesomeIcon className="caret" icon="caret-right"/>
            <div>Filters</div>
          </div>
        }
      </div>
    );
  }

  onSearchBtnClick(ev) {
    this.props.onFilterChange(this.state.hashtag, this.state.age);
  }

  onHashtagChange(ev) {
    this.setState({
      hashtag: ev.target.value
    });
  }

  onAgeChange(ev) {
    this.setState({
      age: ev.target.value
    });
  }
}

export default Filters;
