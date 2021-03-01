import lantu_blue from '@/assets/lantu_blue.png';
import tree from '@/assets/tree.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Image, Input, Row, Space, Switch } from 'antd';
import { Link } from 'umi';
import style from '@/pages/community/community.less';
interface PageProps {
  title: string;
  content: string;
  threads: Thread[];
}

interface Thread {
  title: string;
  content: string;
  commentIcon: string;
  comments: string;
  peopleIcon: string;
  people: string;
  rateIcon: string;
  rate: string;
  image: string[];
}

const data: PageProps = {
  title: '#社区#',
  content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
  threads: [
    {
      title: '论坛帖子论坛帖子论坛帖子论坛帖子论坛帖子',
      content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
      commentIcon: '',
      comments: '156人评价',
      peopleIcon: '',
      people: '26人参与讨论',
      rateIcon: '',
      rate: '4.7',
      image: '', //{tree},
    },
  ],
};
export default function Community() {
  return (
    <div>
      <Image src={lantu_blue}></Image>
      <div>首页</div>
      <div>功能模块</div>
      <div>关于我们</div>
      <div>社区</div>
      <Button shape="round" type="primary">
        注册/登录
      </Button>

      <div>开源代码</div>
      <div>XXXXXXX</div>
      <div>XXXXXXX</div>
      <div>XXXXXXX</div>
      <div>XXXXXXX</div>
      <div>XXXXXXX</div>
      <div>XXXXXXX</div>
    </div>
  );
}
