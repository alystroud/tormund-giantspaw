import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <ul>
      <li><Link to="/">Tormund Giantspaw</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </ul>
  </div>
);

export default Nav;
