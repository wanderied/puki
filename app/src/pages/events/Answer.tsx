import React, { Component } from 'react';
import { Typography } from 'antd';
import { history } from 'umi';
import { Row, Col, Space } from 'antd';

const { Title } = Typography;

import './Answer.css';
import { Question } from './Question';
import './Question.tsx';

export interface Answerprops {
  title: string;
  content: string;
  date: string;
  answerer: string;
  id: string;
}

const data: Answerprops = {
  title: '求2020-2021雏燕计划时间安排',
  content:
    "看一下流程卡在哪个环节。正常流程是： 项目负责人提交-->导师确认-->学院基地主任确认-->校级管理确认。",
  date: '2020-2-16',
  answerer: 'XXX',
  id: '10',
};

export default function Answerprops(props: Answerprops) {
  props = data;
  return (
    <div>
      <div className="body">
        <div style={{ width: '100%' }}>
          <Question
            title="求2020-2021雏燕计划时间安排"
            question="请问2020-2021雏燕计划中检、定级和终检都是什么时候啊，还有什么时候提交项目成果有硬性要求吗？"
            questioner="XXX"
            date="2020-2-12"
          ></Question>
        </div>
        <Title level={3} className="title">
          问答
        </Title>

        <div className="questionBox">
          <div className="time">
            <span className="timeTxt">{props.date}</span>
          </div>
          <div className="txt">
            <Col className="content">{props.content}</Col>
            <span className="personTxt">回答者：{props.answerer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
