import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const StepOne = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <div style={{padding:'100px'}}>
        <h2>Where do you require cleanng</h2>
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
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input  placeholder="Your name"/>
        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input placeholder="address"/>
        </Form.Item>

        <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input placeholder="email"/>
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary">continue</Button>
      </Form>
    </div>
  );
};
export default StepOne;
