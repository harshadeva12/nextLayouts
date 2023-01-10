import styles from  "../../styles/Layout.module.css";
import React from 'react';
import { Card, Col, Row } from 'antd';
import Icon, { BulbTwoTone } from '@ant-design/icons';


const CardData = () => (
  <div>
    <div>
    <Row className={styles.description}>
  
      <Col span={24}> <h1>Ourlocal house cleaning services </h1>
        <p>Lorem ipsum dolor sit amet, consectetur </p></Col>
      
    </Row>
   
    </div>
  
  <div className="site-card-wrapper">
    <Row>
      <Col xs={24} sm={12}  md={8} xl={8} className={styles.card}>
        <Card bordered={false}>
        <BulbTwoTone className={styles.icon}/>
          <h2>Card content</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        </Card>
      </Col>
      <Col xs={24} sm={12}  md={8} xl={8} className={styles.card}>
        <Card bordered={false} >
        <BulbTwoTone className={styles.icon}/>
          <h2>Card content</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        </Card>
      </Col>
      <Col xs={24} sm={12}  md={8} xl={8} className={styles.card}>
        <Card bordered={false}>
        <BulbTwoTone className={styles.icon}/>
          <h2>Card content</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        </Card>
      </Col>
    </Row>
  </div>
  </div>
);
export default CardData;