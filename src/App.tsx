import React, { Component, Fragment } from 'react';
import './App.css';
import { TabBar } from 'antd-mobile';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Tags from 'components/Tags/index';
import Money from 'components/Money/index';
import Statistics from 'components/Statistics/index';
import NoMatch from 'components/NoMatch/index';
import { stringify } from 'querystring';



class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedTabkey: 'money',
    };
  }

  render() {
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

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            title="标签"
            key="tags"
            selected={this.state.selectedTabkey === 'tags'}
            onPress={() => {
              this.setState({
                selectedTabkey: 'tags',
              });
            }}
          >
            1
        </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="记账"
            key="money"
            selected={this.state.selectedTabkey === 'money'}
            onPress={() => {
              this.setState({
                selectedTabkey: 'money',
              });
            }}
          >
            2
        </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="统计"
            key="statistics"
            selected={this.state.selectedTabkey === 'statistics'}
            onPress={() => {
              this.setState({
                selectedTabkey: 'statistics',
              });
            }}
          >
            3
        </TabBar.Item>
        </TabBar>
      </Router>
    );
  }
}

export default App;
