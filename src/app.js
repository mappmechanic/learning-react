import React, {Component} from 'react';
import {render} from 'react-dom';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

class App extends Component {
  render() {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="nav1.html">Nav Option 1</a></li>
            <li><a href="nav2.html">Nav Option 2</a></li>
            <li><a href="nav3.html">Nav Option 3</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

render(<App />,document.getElementById('AppContainer'));
