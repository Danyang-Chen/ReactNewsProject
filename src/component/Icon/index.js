import React, { Component } from 'react';
import { UsergroupDeleteOutlined, IdcardOutlined,DingdingOutlined,GoogleOutlined,WechatOutlined,DribbbleOutlined, QuestionOutlined } from '@ant-design/icons';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconMap: {
                'usergroup-delete': <UsergroupDeleteOutlined />,
                'idcard': <IdcardOutlined />,
                'dingding': <DingdingOutlined />,
                'google': <GoogleOutlined />,
                'wechat': <WechatOutlined />,
                'dribbble': <DribbbleOutlined />,
            },
        };
    }

    // 若获取到icon的没有在this.state中被替换，则设置了专门替换的符号
    render() {
        const { type } = this.props;
        return this.state.iconMap[type] || <QuestionOutlined />;
    }
}

export default Icon;