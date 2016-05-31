import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="blue-grey darken-3">
        <div className="nav-wrapper">
          <div className="brand-logo">
            <a href="#">
              mappmechanic
            </a>
          </div>
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
