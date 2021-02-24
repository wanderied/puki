import React from "react";
import {Avatar, Menu, Typography,Button,Tooltip} from 'antd';
import {
  AppstoreOutlined,
  EnterOutlined,
  HeartOutlined,
  LeftOutlined,
  MailOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  SmallDashOutlined
} from "@ant-design/icons";
//import {useAsyncFn} from 'react-use';
import fly from "flyio";
const {SubMenu} = Menu;
const {Title} = Typography;
const data = {
  title: '组件拖出来特别多一个一个删麻烦',
  userName: '王某某',
  date: new Date(),
  iconSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F07%2F20200607222012_lwusd.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616759331&t=377e8691549755a8d44c166aa695c100',
  content: '组件拖出来特别多一个一个删麻烦。这个问题，首先将组件拖入画布中，然后按住“shift”键，' +
    '用鼠标点击要使用的组件，使该组件取消选择。再点 …     更多 \n',
  voteNumber: 100,
  commentsNumber: 100,
  replies: [{
    userName: '王某某',
    iconSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F07%2F20200607222012_lwusd.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616759331&t=377e8691549755a8d44c166aa695c100',
    date: new Date(),
    content: '组件拖出来特别多一个一个删麻烦。这个问题，首先将组件拖入画布中，然后按住“shift”键，' +
      '用鼠标点击要使用的组件，使该组件取消选择。再点 …     更多',
    voteNumber: 100,
    replyNumber: 1,
  }]
};


export default function () {


  //let Name=data.replies[0],Src=data.replies[1],time=data.replies[].date
  return (<div style={{paddingLeft: 500, paddingRight: 500}}>
      
      <div style={{display: 'flex', flexDirection: 'row'}}><Button type='text'>
        <LeftOutlined style={{display: 'flex', alignItems: 'center'}}/></Button>
        <Title level={4}>{data.title}</Title></div>
      <div style={{display: 'flex', flexDirection: 'row'}}><Avatar style={{marginRight:'15px'}} size={64} src={data.replies[0].iconSrc}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Title level={5}>{data.userName}</Title>
          <div>{data.date.toLocaleString()}</div>
        </div>
      </div>
      <div>{data.content}</div>
      <div><HeartOutlined/>{data.voteNumber}<MessageOutlined/>{data.commentsNumber}</div>
      <Menu  mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined/>}>
          评论
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined/>}>
          精选
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined/>}>
          与我有关
        </Menu.Item><Tooltip title="search">
      <Button style={{float:"right",transform:'translateY(10px)'}} type="text" shape="circle" icon={<PlusCircleOutlined />} />
    </Tooltip>
    </Menu>
      <div style={{display: 'flex', flexDirection: 'row'}}><Avatar style={{marginRight:'15px'}} size={64} src={data.replies[0].iconSrc}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Title level={5}>{data.replies[0].userName}</Title>
          <div>{data.replies[0].date.toLocaleString()}</div>
        </div>
      </div>
      <div>{data.replies[0].content}</div>
      <div><HeartOutlined/>{data.replies[0].voteNumber}<EnterOutlined/>{data.replies[0].replyNumber}<SmallDashOutlined /></div>
      <div style={{display: 'flex', flexDirection: 'row'}}><Avatar style={{marginRight:'15px'}} size={64} src={data.replies[0].iconSrc}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Title level={5}>{data.replies[0].userName}</Title>
          <div>{data.replies[0].date.toLocaleString()}</div>
        </div>
      </div>
      <div>{data.content}</div>
      <div><HeartOutlined/>{data.replies[0].voteNumber}<EnterOutlined/>{data.replies[0].replyNumber}<SmallDashOutlined /></div>
    </div>
  );
}


