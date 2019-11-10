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
            <FontAwesomeIcon className="cat" icon="paw"/>
          </div>
          <div onClick={this.onMenuClick}>
            <FontAwesomeIcon className="bars" icon="bars"/>
          </div>
        </div>
        {this.state.open ?
          <div className="nav-open">
            <ul>
              <li><Link to="/" onClick={this.onMenuClick}>
                Tormund Giantspaw</Link></li>
              <li><Link to="/gallery" onClick={this.onMenuClick}>
                Gallery</Link></li>
            </ul>
          </div> : null}
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
