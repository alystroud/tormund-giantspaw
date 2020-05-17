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
        <div className="row mainRow">
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-6 col-xl-6">
            <img src="images/20190623_1809.jpg"
                 className="profile"
                 alt="logo" />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-6 col-xl-6 text">
            <p>I'm Tormund. I am {years} year{years === 1 ? "" : 's'} old ginger tom.</p>
            <p>My mum named me after some hunky
              <a className="tormund-link" href="https://gameofthrones.fandom.com/wiki.Tormund"> ginger hunk </a>
              off the telly. Although I'm a little chunky, I'm a real softie.
              I love a cuddle and a scritchy-scratch, especially in that magic under-chin spot.</p>
            <p>If you feed me tuna...ahh..tuna... Sorry what was I saying?! Oh yes, I will be your
              best friend if you feed me tuna or sweetcorn. But be careful, I do bite!
              So mind your fingers!
            </p>
            <p>I hate closed doors, I like to be able to see you at all times. So if you
              thought you'd be able to wee in peace, think again! And have a nice relaxing bath on your own?
              Well as long as you can relax with the sound of me crying outside the door.
            </p>
            <p>I'm too young to have my own Instagram, so my mum made me my own website to
              show off all the purr-fect photos of me.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
