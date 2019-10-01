import React from 'react';
import './Filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: this.props.filterOpen,
      hashtag: this.props.filterString,
      age: this.props.filterAge,
      ageOptions: this.props.filterAgeList
    };
    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
    this.onHashtagChange = this.onHashtagChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onClearBtnClick = this.onClearBtnClick.bind(this);
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
                <select value={this.state.age}
                        onChange={this.onAgeChange}>
                  <option key="" label=""></option>
                  {this.state.ageOptions.map((age) =>
                    <option key={age} label={age}>{age}</option>
                  )}
                </select>
              </div>
              <div className="filters-hashtag">
                <div>Hashtag: </div>
                <input type="text"
                       onChange={this.onHashtagChange}
                       text={this.state.hashtag}/>
              </div>
            </div>
            <div className="filters-buttons">
              <button type="button"
                      onClick={this.onClearBtnClick}>Clear All</button>
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

  onClearBtnClick(ev) {
    this.props.onFilterChange("", "");
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
