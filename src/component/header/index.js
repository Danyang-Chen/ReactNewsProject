import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './style.css';
import { Menu } from 'antd';
import axios from 'axios';
import Icon from '../Icon';


class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // 可以下载return中，为了代码美观易懂，另写为一个方法
    getMenuItems() {
        // console.log(this.state.list);
        // .map是什么？
        return this.state.list.map(item => {
            return (
                // 引用Icon组件，将后端传进来的值编写为可在页面展示图标的代码，(icon:菜单图标) 
                <Menu.Item 
                    key={item.id} 
                    icon={<Icon type={item.icon} />}
                >
                    <Link to={`/${item.id}`}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                // 先设置了名为list的空数组，Ajax获取到的res.data.data替换数组内容
                this.setState({
                    list: res.data.data
                });
            })
    }

    render() {
        return (
            <Fragment>
                <Link to='/'>
                    <img 
                        src={logo} 
                        className='app-header-logo' 
                        alt="logo"
                    />
                </Link>
                {/* horizontal:表示列表横向排列 */}
                <Menu
                    mode="horizontal"
                    className='app-header-menu'
                >
                    {this.getMenuItems()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;