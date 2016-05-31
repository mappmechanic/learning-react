import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue-grey darken-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Rahat Khanna</h5>
                <p className="grey-text text-lighten-4">
                  UI Developer working on creating awe-inspiring User Experience using HTML5, CSS3 & Javascript.
                </p>
                <p className="grey-text text-lighten-4">
                  Expertise: Angular2, ES6 (ES2015) , ReactJS, Ionic 2, Cordova/Phonegap, Salesforce & NodeJS
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright Rahat Khanna a.k.a MAppMechanic
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
  }
}
