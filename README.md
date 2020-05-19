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

***

### React函数组件中使用state
```
用<>定义类型参数：
const [tags, setTags] = useState<String[]>(['衣', '食', '住', '行'])
还可以用TS的联合字符串缩小范围：
const [tags, setTags] = useState<('衣' | '食' | '住' | '行')[]>(['衣', '食', '住', '行'])
```

***

### 受控组件与非受控组件（类似于Vue中的v-model.lazy）
![受控组件](https://i.loli.net/2020/05/15/wTaRfGprX9AvnzE.png)
![非受控组件](https://i.loli.net/2020/05/15/riCDAw5ZG4HPcRz.png)

***

### React的onChange和原生onchange不同:
React中的anChange是值改变后触发，原生onchange是值改变后失去焦点或者按下回车时触发

***

### TS 使用 typeof 和 keyof
![手写](https://i.loli.net/2020/05/15/3HuboildzQaKpxC.png)
![优化](https://i.loli.net/2020/05/15/i2Ur9IX5BEO8Y6T.png)

***

### TS中使用事件委托：
![事件委托](https://i.loli.net/2020/05/15/P5C96agmHznZckG.png)

***

### 使用TS后，props需要这样写才能接收到值：
![props](https://i.loli.net/2020/05/15/O1YaP5M9W8iuxHU.png)

***

### TS中的Partial：只需要满足一部分类型就行
![Partial](https://i.loli.net/2020/05/15/wNT2mMytBfOAUnK.png)

***

### 封装一个自定义Hook：在函数里面使用useState或者其他useXXX，并且return一些读写接口出去
![封装一个自定义Hook](https://i.loli.net/2020/05/18/hqms1wVgSFWMazp.png)

***

### ReactRouter
```
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from "react-router-dom";
const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/money" component={Money} />
            <Route exact path="/statistics" component={Statistics} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}
export default App;
```
```
编程式路由：
this.props.history.push('/tags')
this.props.location
this.props.match
```
```
子组件中使用访问路由可以引入withRouter：
import { withRouter } from "react-router-dom";
```

***

### Hook API 获取动态参数
```
type Params {
  id: string
}
let { id } = useParams<Params>()
```

***

### TS的&符号实践（props接收label和input元素所有属性）
![TS的&符号](https://i.loli.net/2020/05/19/1ohUEzNK7p6SuL8.png)

***

### React语法：<input {...rest} />（将一个对象转变为元素的属性）
![<input {...rest} />](https://i.loli.net/2020/05/19/dCkB8lheVLyXP4H.png)
***