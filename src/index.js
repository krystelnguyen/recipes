import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { About } from './About';
import { Details } from './Details';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" render={(props) => <Details getId={props} /> } component={Details} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
