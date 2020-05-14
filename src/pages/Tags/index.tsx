import React, { Component } from 'react';
import 'pages/Tags/index.scss'
import Tabbar from 'components/Tabbar/index'

class Tags extends Component<any, any> {

  constructor(props: any) { // 构造函数，设置state初始值
    super(props);
    this.state = {};
  }

  componentDidMount() { // 组件完成挂载时运行

  }

  render() {
    return (
      <div className="tags_main">
        <div className="tags_content"></div>
        <div>
          <Tabbar></Tabbar>
        </div>
      </div>
    );
  }
}

export default Tags;