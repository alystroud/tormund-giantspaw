import React from 'react';
import './Main.css';

const Main = () => (
  <div className="main">
    <img  src="images/20190623_1809.jpg"
          className="profile"
          alt="logo" />
    <p>Hi I'm Tormund Giantspaw!</p>
    <p>I like chewing hair ties and jumping out to scare people.</p>
    <p>My favourite snacks are chicken and sweetcorn.</p>
    <p>And yes, I'm named after the
      <a className="tormund-link" href="https://gameofthrones.fandom.com/wiki.Tormund"> ginger hunk </a>
      from Game of Thrones!
    </p>
  </div>
);

export default Main;
