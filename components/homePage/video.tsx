import React from "react";
import { Col, Row, Button } from "antd";
import styles from "../../styles/Layout.module.css";
import VideoComponent from "./video-component";

const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const Video = () => (
  <>
    <div className={styles.fitToScreen}>
      <Row style={{ padding: "10%" }}>
        <Col xs={24} sm={24} md={24} xl={15}>
          <h1>
            Join With Us,as a<br />
            company or cleaner
          </h1>
          <p style={{ color: "blue" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ever since the 1500s, when an unknown printer
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <Button style={{ height: "44px" }} type="primary">
            Apply
          </Button>
        </Col>
        <Col xs={24} sm={24}  md={24} xl={9} style={{ marginTop: "40px" }}>
          <VideoComponent />
        </Col>
      </Row>
    </div>
  </>
);
export default Video;
