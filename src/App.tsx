import React, { Component, Fragment } from 'react';
import './App.css';
// import { TabBar } from 'antd-mobile';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // withRouter
} from "react-router-dom";
import Tags from 'components/Tags/index';
import Money from 'components/Money/index';
import Statistics from 'components/Statistics/index';
import NoMatch from 'components/NoMatch/index';

type StateType = {
  selectedTabkey: string
}

class App extends Component<any, StateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedTabkey: 'money',
    };
  }

  render() {
    return (
      <Fragment>
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
              <Route path="/tags" component={Tags} />
              <Route path="/money" component={Money} />
              <Route path="/statistics" component={Statistics} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
