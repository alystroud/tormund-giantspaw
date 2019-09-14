import React from 'react';
import './Filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: this.props.filterOpen
    };
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
                <select>
                  <option>8 weeks</option>
                  <option>4 months</option>
                </select>
              </div>
              <div className="filters-hashtag">
                <div>Hashtag: </div>
                <textarea></textarea>
              </div>
            </div>
            <div>
              <button type="button">Search</button>
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
}

export default Filters;
