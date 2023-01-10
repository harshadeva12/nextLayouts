import React from "react";
import styles from "../../styles/Layout.module.css";
import { Input } from "antd";
import { Col, Row, Button } from "antd";

const Test = () => (
  <>
    <div>
      <img style={{ height: "100vh", width: "100%" }} src="/images/bgimg.jpg" />
    <div>
    <div className={styles.dontshowMobile}>
      <div>
        <div className={styles.centered}>
          <p>How to place text over an image</p>
          <h1>Your Cleaning Partner</h1>
          <p>How to place text over an image</p>

        
            <div className={styles.inputdiv}>
              <Row>
                <Col lg={8} xs={24}>
                  <Input placeholder="Basic usage" style={{ width: "90%" }} />
                </Col>
                <Col lg={8} xs={24}>
                  <Input placeholder="Basic usage" style={{ width: "90%" }} />
                </Col>
                <Col lg={8} xs={24}>
                  <Button type="primary">Find Your Cleaner</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
  </>
);
export default Test;
