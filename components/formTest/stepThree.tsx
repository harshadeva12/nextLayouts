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

type FormStepperProps = {
  //  onStepChange: Function;
  step: number;
};

const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const StepThree = () => {
  const onFinish = (values) => {
    onStepChange(step + 1);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [value, setValue] = useState("0");
  return (
    <Row>
      <Col span={14}>
        <div style={{ padding: "100px" }}>
          <Form
            name="basic"
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2>How many bedrooms need cleaner?</h2>
            <Form.Item name="radio-group">
              <Space>
                <InputNumber
                  min={1}
                  max={10}
                  value={value}
                  onChange={setValue}
                  style={{ width: "150px" }}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    setValue(0);
                  }}
                >
                  Reset
                </Button>
              </Space>
            </Form.Item>

            <h2>Extra tasks</h2>
            <TabPanel />

            <h2>select number of hours</h2>
            <Form.Item name="radio-group-step3">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a" className={styles.radioButtonStep3}>
                  2h
                </Radio.Button>
                <Radio.Button value="b" className={styles.radioButtonStep3}>
                  3h
                </Radio.Button>
                <Radio.Button value="c" className={styles.radioButtonStep3}>
                  4h
                </Radio.Button>
                <Radio.Button value="d" className={styles.radioButtonStep3}>
                  5h
                </Radio.Button>
                <Radio.Button value="e" className={styles.radioButtonStep3}>
                  6h
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <h2>Are you providing the cleaning products</h2>
            <Form.Item name="radio-group-step3">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="x" className={styles.radioButtonStep4}>
                  Brings cleaning product
                </Radio.Button>
                <Radio.Button value="y" className={styles.radioButtonStep4}>
                  I'll provide
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form>
        </div>
      </Col>
      <Col span={10}>
        <div className="" style={{ padding: "100px" }}>
          <Card title="Booking summary" bordered={true} style={{ width: 300 }}>
            <table className={styles.table}>
              <tr>
                <td >first clean</td>
                <td className={styles.tableLeft}>22222</td>
              </tr>
              <tr>
                <td>how often</td>
                <td className={styles.tableLeft}>every two weeks</td>
              </tr>
              <tr>
                <td>hourse for clean</td>
                <td className={styles.tableLeft}>3.5 hours</td>
              </tr>
<br/>
              <tr style={{ marginBottom: "10px" }}></tr>
              <tr>
                <td>3.5 hours </td>
                <td className={styles.tableLeft}>$55.00</td>
              </tr>
              <tr>
                <td>cleaning products</td>
                <td className={styles.tableLeft}>$5</td>
              </tr>
              <br />
              <tr>
                <td>Price</td>
                <td className={styles.tableLeft}>$51</td>
              </tr>
            </table>
          </Card>
        </div>
      </Col>
    </Row>
  );
};
export default StepThree;
