import React, { Component, Fragment } from 'react';

class NoMatch extends Component<any, any> {

  constructor(props: any) { // 构造函数，设置state初始值
    super(props);
    this.state = {};
  }

  componentDidMount() { // 组件完成挂载时运行

  }

  render() {
    return (
      // 如果外层不想用div包裹，可以用Fragment
      <Fragment>
        <h2>404</h2>
      </Fragment>
    );
  }

}

export default NoMatch;