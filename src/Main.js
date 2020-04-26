import React from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import parse from 'date-fns/parse';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const birthday = parse('30/03/2019 00:00', 'dd/MM/yyyy HH:mm', new Date());
    const years = differenceInYears(new Date(), birthday);
    return (
      <div className="main">
        <h1 className="title">Tormund Giantspaw!</h1>
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8  order-1.order-sm-2.order-xs-2 text">
            <p>I am {years} year{years === 1 ? "" : 's'} old.</p>
            <p>I like chewing hair ties and jumping out to scare people.</p>
            <p>My favourite snacks are chicken and sweetcorn.</p>
            <p>And yes, I'm named after the
              <a className="tormund-link" href="https://gameofthrones.fandom.com/wiki.Tormund"> ginger hunk </a>
              from Game of Thrones!
            </p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 .order-first.order-sm-1.order-xs-1">
            <img src="images/20190623_1809.jpg"
                 className="profile"
                 alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
