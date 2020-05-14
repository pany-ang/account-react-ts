import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import { TabBar } from 'antd-mobile';

class Tags extends Component {

  constructor(props:any) { // 构造函数，设置state初始值
    super(props);
    this.state = { };
  }

  componentDidMount() { // 组件完成挂载时运行
    
  }

  render() {
    return (
      // 如果外层不想用div包裹，可以用Fragment
      <Fragment>
        <h2>Tags</h2>
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
            selected={true}
            onPress={() => {
              this.renderContent('tags')
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
            selected={false}
            onPress={() => {
              this.renderContent('money')
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
            selected={false}
            onPress={() => {
              this.renderContent('statistics')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </Fragment>
    );
  }

  renderContent(params: string) {
    return (
      <Redirect to={"/" + params} />
    )
  }

}

export default Tags;