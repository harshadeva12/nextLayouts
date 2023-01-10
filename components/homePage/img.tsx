import React from "react";
import { Row, Col } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const Test = () => (
  <>
    <Row style={{ textAlign: 'center'}}>
      <Col xs={24} sm={12}  md={8}>
        One of three columns
      </Col>
      <Col xs={24} sm={12}  md={8} >
        One of three columns
      </Col>
      <Col xs={24} sm={12}  md={8}>
        One of three columns
      </Col>
    </Row>
  </>
);
export default Test;
