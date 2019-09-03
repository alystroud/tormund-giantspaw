import React from 'react';
import './Filters.css';

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
          <div className="filters-open"></div> :
          <div className="filters-closed">Filters</div>
        }
      </div>
    );
  }
}

export default Filters;
