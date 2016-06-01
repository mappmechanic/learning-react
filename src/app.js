import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

/* Importing Components */
import Header from './components/header';
import Footer from './components/footer';
import FeedbackForm from './components/feedback-form';

class App extends Component {
  render() {
    let tutorialOptions = [
      {id:1,name:"AngularJS Tutorial"},
      {id:1,name:"ReactJS Tutorial"},
      {id:1,name:"Ionic Tutorial"}
    ];

    return (
      <div>
        <Header />
          <FeedbackForm tutorialOptions={tutorialOptions} />
        <Footer />
      </div>
    )
  }
}

render(<App />,document.getElementById('AppContainer'));
