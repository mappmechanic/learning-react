import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

/* Importing Components */
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

render(<App />,document.getElementById('AppContainer'));
