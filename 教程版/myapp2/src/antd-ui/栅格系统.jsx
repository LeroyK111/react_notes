import React from 'react'


import { Row, Col } from 'antd';


export default function Grid() {
  return (
    <div style={{backgroundColor:"red"}}>
      <Row>
        {/* 这个24栅格系统 */}
        {/* <Col span={24}><h1>栅格系统</h1></Col> */}
        <Col span={8}>8</Col>
        <Col span={8} offset={8}>16</Col>
        {/* <Col span={8}>24</Col> */}
      </Row>
    </div>
  )
}
