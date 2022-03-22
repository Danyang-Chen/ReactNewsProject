####布局
- 页面布局运用了从 **antd** 引用的组件，包括整体布局的 `layout`，`header`展示的各个模块运用 `menu` ，登陆页面的 `modal`，登陆成功或失败提示的 `message` ，跳转的页面使用 `list`，详情页面使用 `card` 布局。
####生命周期函数
- list 组件中，因为进入一个 list 中后，用户可以点击直接进入另一个 list ，但是因为 **`componentDidMount`** 已经请求了一次数据，则不会再次请求数据，于是运用了当父组件传递的props发生变化时执行的 **`componentWillReceiveProps`** 生命周期函数用来再次请求数据。
####路由
- 实现页面跳转就需要用到路由，这个项目在这一块运用到了`Route`，`BrowserRouter`，`Link`，`Switch`，`withRouter`这几个组件，
  - Switch匹配到第一个路由就不会继续匹配了，解决了同一页面展示两个组件的问题
  - withRouter 使未包裹在`<Router>` 组件中的 `<Login/> `也可使用路由的功能，访问其数据
  *（withRouter 作用：非路由组件可以通过withRouter高阶组件访问 History 对象的属性和进行匹配。withRouter将在渲染时向包装组件传递更新的 match、location 和 history 属性。）*
####其他实现
- 利用 ES6 中模板字符串，获取动态的 id，实现页面跳转
- 登录状态下可访问VIP页面，为解决接口获取中先展示VIP页面，若确定不在登录状态才会返回根目录的问题，定义新的变量用以确定是否完成接口获取，且引用多重 if 嵌套语句，使未确定登陆状态时，显示指定页面