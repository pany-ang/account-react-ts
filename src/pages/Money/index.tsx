import React, { Component } from 'react';
import 'pages/Money/index.scss'
import Tabbar from 'components/Tabbar/index'

class Money extends Component<any, any> {

  constructor(props: any) { // 构造函数，设置state初始值
    super(props);
    this.state = {};
  }

  componentDidMount() { // 组件完成挂载时运行

  }

  render() {
    return (
        <div className="money_main">
          <div className="money_content"></div>
          <div>
            <Tabbar></Tabbar>
          </div>
        </div>
    );
  }
}

export default Money;