import React, { useState } from "react";
import styles from "../../styles/formSteps.module.css";
import TabPanel from "./tabPanel";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Col,
  Row,
  Radio,
  InputNumber,
  Space,
  Card,
} from "antd";
import "@fortawesome/fontawesome-svg-core/styles.css";

const stepFour = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Row>
        <Col span={18}>
          <h2>your booking went through!</h2>
          <h4>we 'll be sweeping your floors in on time</h4>
          <p>
            paul Dennis,we've successfully receved your online booking we will
            send you a confirmation email includig full detalis of our service &
            we'll get to work on finding you a cleaner right away
          </p>
          <p>
            As soon as we have found someone suitable in your area we will contact you to arrange the clean
          </p>
          <h2>Your referance number</h2>
          <Input placeholder="Basic usage" className={styles.input} />
        <h2>Contact details</h2>
        <p>if you need to get in contact with your local office please use the details below.</p>

        <h4>Abcclean company Ltd</h4>
        <p>0855 628 2648</p>
        <p>abc@gmail.com</p>
        </Col>


      </Row>
    </div>
  );
};
export default stepFour;
