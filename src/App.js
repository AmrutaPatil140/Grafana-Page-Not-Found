import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Home = () => (
  <h1>
     Let's deal with 404? Page Not Found!
  </h1>
);

const About = () => (
  <h1>
    About this example....
  </h1>
);

const Page404 = ({ location }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Grafana page Not Found</h1>
        </header>
        <BrowserRouter>
          <div>
            <div className="App-intro">
              
                <div className="App-block"><Link to="/">Home</Link></div>               
                <div className="App-block"><Link to="/about">About</Link></div>
                <div className="App-block"><Link to="/more">More</Link></div>
            
            </div>

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;