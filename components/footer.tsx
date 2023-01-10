import React from "react";
import { Col, Row, Card } from "antd";
import styles from "../styles/Layout.module.css";

export default function Navbar() {
  return (
    <div>
      <Row>
        <Col span={6} xs={24} sm={12} md={6} xl={6} className={styles.footer}>
          <Card bordered={false} className={styles.footerCard} >
            <h2>Explore</h2>
            <p>Explore</p>
            <p>About</p>
            <p>how it works</p>
            <p>Professionals</p>
            <p>News</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Cleaning</p>
            <p>Reviews</p>
            <p>FAQs</p>
          </Card>
        </Col>
        <Col span={6} xs={24} sm={12} md={6} xl={6} className={styles.footer}>
          <Card bordered={false} className={styles.footerCard} >
            <h2>Explore</h2>
            <p>Explore</p>
            <p>About</p>
            <p>how it works</p>
            <p>Professionals</p>
            <p>News</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Cleaning</p>
            <p>Reviews</p>
            <p>FAQs</p>
          </Card>
        </Col>    
        <Col span={6} xs={24} sm={12} md={6} xl={6} className={styles.footer}>
          <Card bordered={false} className={styles.footerCard} >
            <h2>Explore</h2>
            <p>Explore</p>
            <p>About</p>
            <p>how it works</p>
            <p>Professionals</p>
            <p>News</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Cleaning</p>
            <p>Reviews</p>
            <p>FAQs</p>
          </Card>
        </Col>
        <Col span={6} xs={24} sm={12} md={6} xl={6} className={styles.footer}>
          <Card bordered={false} className={styles.footerCard} >
            <h2>Explore</h2>
            <p>Explore</p>
            <p>About</p>
            <p>how it works</p>
            <p>Professionals</p>
            <p>News</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Cleaning</p>
            <p>Reviews</p>
            <p>FAQs</p>
          </Card>
        </Col>  </Row>
    </div>
  );
}
