import React, { Fragment, useState } from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from "react-router-dom";
import Tags from 'pages/Tags/index';
import Money from 'pages/Money/index';
import Statistics from 'pages/Statistics/index';
import NoMatch from 'pages/NoMatch/index';

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <div>
          {/* <nav>
              <ul>
                <li>
                  <Link to="/tags">标签页</Link>
                </li>
                <li>
                  <Link to="/money">记账页</Link>
                </li>
                <li>
                  <Link to="/statistics">统计页</Link>
                </li>
              </ul>
            </nav> */}
          {/* <Switch>
              <Redirect exact from="/" to="/money" />
              <Route path="/tags">
                <Tags />
              </Route>
              <Route path="/money">
                <Money />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch> */}
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/money" component={Money} />
            <Route exact path="/statistics" component={Statistics} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}

export default App;
