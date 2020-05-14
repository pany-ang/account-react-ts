import React, { Component, Fragment } from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";

class Tabbar extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() { // 组件完成挂载时运行
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent={true}
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
            selected={this.props.location.pathname === '/tags'}
            onPress={() => {
              this.props.history.push('/tags')
            }}
          >
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
            selected={this.props.location.pathname === '/money'}
            onPress={() => {
              this.props.history.push('/money')
            }}
          >
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
            selected={this.props.location.pathname === '/statistics'}
            onPress={() => {
              this.props.history.push('/statistics')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </Fragment>
    );
  }

}

export default withRouter(Tabbar);