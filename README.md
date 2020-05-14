### 在当前目录下创建一个react+ts的项目
`npx create-react-app . --typescript`

***

### .ts .tsx
.tsx是指支持标签的TS

***

### @import-normalize;
@import-normalize是React自己发明的语法，它能自动添加一些全局css样式

***

### 为了使import引入JS时更加方便（实现Vue中@符号的效果），需要在tsconfig.json中添加：
"baseUrl": "src",

***

### 因为使用了TS，所有在安装依赖的时候，还必须安装依赖的TS声明文件，比如Router：
```
  npm install --save react-router-dom
  npm install @types/react-router-dom
```

***

### CSS-in-JS
React项目中解决css的热门方案: styled-components

***

### svg更强大的用法：SVG symbols
需要借助两个库：svg-sprite-loader 和 svgo-loader

***

### 插槽
React中插槽可以由this.props.children实现

***

### 利用NavLink的activeClassName属性，可以为设置选中的a标签（NavLink标签）添加样式
`<NavLink to="/" activeClassName="selected" ></NavLink>`

***

### React函数组件在的TS类型是：React.FC
```
const App: React.FC = (props) => {
  return ()
}
```

### React函数组件中使用state
```
const [tags, setTags] = useState<String[]>(['衣', '食', '住', '行'])
```