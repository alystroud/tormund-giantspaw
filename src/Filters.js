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
      <div className="filters" onClick={this.props.onClick}>
        {this.props.filterOpen ?
          <div className="filters-open">
            <FontAwesomeIcon className="caret" icon="caret-down"/>
            <div>Filters</div>
          </div> :
          <div className="filters-closed">
            <FontAwesomeIcon className="caret" icon="caret-right"/>
            <div>Filters</div>
          </div>
        }
      </div>
    );
  }
}

export default Filters;
