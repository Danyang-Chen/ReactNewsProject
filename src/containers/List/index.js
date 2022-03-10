import React, { Component, Fragment } from "react";
import { List } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom';


class PageList extends Component {

    // 因版本问题componentWillReceiveProps生命周期已被删除
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id);
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                this.setState({
                    data: res.data.data
                });
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        // console.log(this.state.data);
        // 需要获取id=..的值，但是在输出的props中找不到
        // console.log(this.props.match.params.id);
        return (
            <Fragment>
                <List
                    style={{ background: '#fff' }}
                    bordered
                    // 表示列表循环的内容
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <Link to={`/detail/${item.id}`}>
                                {item.title}
                            </Link>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    componentDidMount() {
        let url = 'http://www.dell-lee.com/react/api/list.json'
        const id = this.props.match.params.id;
        if (id) {
            url = url + '?id=' + id;
        }
        axios.get(url)
            .then(res => {
                this.setState({data: res.data.data});
            })
    }
}

export default PageList;