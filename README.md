# learning-react
Learning React JS by Writing Small Example Apps

#Step 1:

We will create a new folder named *"ReactApp"* and then inside it create folders *'public'*, *'src'*.

Also, create a new file called *webpack.config.js* and put the following code in the file:

```javascript
module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader'},
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015','react']
              }
            }
        ]
    },
    devServer: {
      contentBase: "./public",
      colors: true,
      historyApiFallback: true,
      inline: true
    }
};
```

#Step 2:

Hello World Component in React in a file called *app.js* inside the *src* folder:

```javascript

import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello React Learners ! </h1>
      </div>
    )
  }
}

```

Also create an empty *app.css* file for styling later.

Run the webpack server using the following command:

```
webpack-dev-server --progress --hot --inline
```

#Step 3:

We will add a Header Component in a new folder at location */src/components/Header.js* now:

```javascript
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
```

#Step4:

Now we will also create a footer for our ReactApp in the same folder with a new file called *footer.js*:

```javascript
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
```

#Step 5:
Now in order to show the header and footer created we have to modify our main *App component* in *app.js* file:

```javascript
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
        <h1> Hello React Learners ! </h1>
        <Footer />
      </div>
    )
  }
}
```
