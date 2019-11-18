import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  render() {
    return (
      <div>
        <div className="nav">
          <div>
            <a href="./index.html"><FontAwesomeIcon className="cat" icon="paw"/></a>
          </div>
          <div onClick={this.onMenuClick}>
            <div id="menu-icon" className={this.state.open ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={this.state.open ? "nav-open" : " closed"}>
          <ul>
            <li><Link to="/" onClick={this.onMenuClick}>
            Tormund Giantspaw</Link></li>
            <li><Link to="/gallery" onClick={this.onMenuClick}>
              Gallery</Link></li>
            <li>
              <a href="https://www.amazon.co.uk/hz/wishlist/ls/16HRMCU7VCQO0?ref_=wl_share">
                Wish List
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  onMenuClick() {
    const open = !this.state.open;
    this.setState({
      open: open
    });
  }
}
export default Nav;
