import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// 引入AntD的css
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  // React.StrictMode这个标签用来纠正代码错误的，删掉也并不影响程序
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
