import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import AppHeader from './component/header/';
import Login from './component/login/';
import PageList from './containers/List/';
import Detail from './containers/Detail/';
import VIP from './containers/vip/';

const { Header, Footer, Content } = Layout;

class App extends Component {
  
  render() {
    return (
      // 外层括号是JSX中用一个表达式，内层括号是对象（不支持-，需要驼峰命名法）
      <BrowserRouter>
        <Layout style={{ minWidth: 1240 }}>

          <Header className="header">
            <AppHeader />
          </Header>

          <Content className="content">
              <Login/>
              <Switch>
                <Route path='/vip' component={VIP} />
                <Route path='/detail/:id' component={Detail} />
                <Route path='/:id?' component={PageList} />
              </Switch>
          </Content>

          <Footer className="footer">
              @Aelia-Chen 2022
          </Footer>

        </Layout>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



