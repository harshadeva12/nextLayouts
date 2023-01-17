import React from "react";
import styles from "../../styles/formSteps.module.css";
import { Button, Checkbox, Form, Input, Col, Row, Radio, Calendar } from "antd";
import "@fortawesome/fontawesome-svg-core/styles.css";
const { TextArea } = Input;
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

const StepTwoTest = () => {
  const onFinish = (values) => {
    (step + 1)
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
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
        <h2>How often do you need services?</h2>
        <Form.Item name="radio-group">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" className={styles.radioButton}>
              Hangzhou
            </Radio.Button>
            <Radio.Button value="b" className={styles.radioButton}>
              Shanghai
            </Radio.Button>
            <Radio.Button value="c" className={styles.radioButton}>
              Beijing
            </Radio.Button>
            <Radio.Button value="d" className={styles.radioButton}>
              Chengdu
            </Radio.Button>
            <Radio.Button value="d" className={styles.radioButton}>
              Chengdu
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <h2>What is your preferred cleaning days?</h2>
        <Form.Item name="checkbox-group"   rules={[{ required: true, message: "Please input your preferred cleaning days!" }]}>
          <Checkbox.Group>
            <Row>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxOne"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxOne" className={styles.bb}>
                  Monday
                </label>
              </Col>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxTwo"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxTwo" className={styles.bb}>
                  Monday
                </label>
              </Col>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxThree"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxThree" className={styles.bb}>
                  Monday
                </label>
              </Col>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxFour"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxFour" className={styles.bb}>
                  Monday
                </label>
              </Col>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxFour"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxFour" className={styles.bb}>
                  Monday
                </label>
              </Col>
              <Col span={8} className={styles.div2}>
                <input
                  type="checkbox"
                  id="checkboxFive"
                  value="Monday"
                  className={styles.aa}
                />
                <label for="checkboxFive" className={styles.bb}>
                  Monday
                </label>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <h2>What time would you prefer?</h2>
        <Form.Item name="radio-group-time" style={{}}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col span={24}>
                <Radio.Button value="a" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={24}>
                <Radio.Button value="b" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={24}>
                <Radio.Button value="c" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <h2>Is parking available nearby?</h2>
        <Form.Item name="radio-group-parking" style={{}}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col span={24}>
                <Radio.Button value="a" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={24}>
                <Radio.Button value="b" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={24}>
                <Radio.Button value="c" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <h2>Do you have any pets?</h2>
        <Form.Item name="radio-group-pets" style={{}}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col span={12}>
                <Radio.Button value="a" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={12}>
                <Radio.Button value="b" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={12}>
                <Radio.Button value="c" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
              <Col span={12}>
                <Radio.Button value="d" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <h2>Do you need to meet cleaner first?</h2>
        <Form.Item name="radio-group-cleaner" style={{}}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col span={12}>
                <Radio.Button value="a" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={12}>
                <Radio.Button value="b" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <div className={styles.siteCalendarDemoCard}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>

        <h2>How will your cleaner access the property?</h2>
        <Form.Item name="radio-group-property" style={{}}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col span={24}>
                <Radio.Button value="a" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>

              <Col span={24}>
                <Radio.Button value="b" className={styles.radioButtonTime}>
                  Hangzhou
                </Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <h2>Special notes</h2>
        <Form.Item
          name="radio-group-property"
          style={{}}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Row>
              <Col>
                <TextArea
                  showCount
                  maxLength={100}
                  style={{
                    height: 120,
                    width: "250%",
                    marginBottom: 24,
                  }}
                  onChange={onChange}
                  placeholder="can resize"
                />
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form>
    </div>
  );
};
export default StepTwoTest;
