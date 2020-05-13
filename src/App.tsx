import React from 'react';
import './App.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Switch>
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
        </Switch>
      </div>
    </Router>
  );
}


function Tags() {
  return <h2>tags</h2>;
}

function Money() {
  return <h2>money</h2>;
}

function Statistics() {
  return <h2>statistics</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}

export default App;
