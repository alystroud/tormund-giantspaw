import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer.js';
import Gallery from './Gallery.js';
import Main from './Main.js';
import Nav from './Nav.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App container">
        <Nav/>
        <div className="content">
          <Route exact path="/" component={Main} />
          <Route path="/Gallery" component={Gallery} />
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
