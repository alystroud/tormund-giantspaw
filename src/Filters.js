import React from 'react';
import './Filters.css';

class Filters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterOpen: this.props.filterOpen
    };
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onFilterClick(){
    alert("test");
    this.state.filterClick(!this.state.filterOpen);
  }

  render() {
    return (
      <div className="filters" onClick={this.props.onFilterClick}>
        {this.state.filterOpen ? "Filters" : "closed"}
      </div>
    );
  }
}

export default Filters;
