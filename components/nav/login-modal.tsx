import React, { useState } from 'react';
import { Col, Row,Input,Button, Modal } from 'antd';

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel}>
    <Row style={{padding:20,color:"blue"}}>
      <Col span={8}></Col>
      <Col span={8}> <h1 >LogIn</h1></Col>
      <Col span={8}></Col>
    </Row>
    <Row>
      <Col span={4}></Col>
      <Col span={16}><div><div><label>username</label><Input placeholder="username"/><label>password</label><Input placeholder="password"/></div></div></Col>
      <Col span={4}></Col>
    </Row>
    <Row style={{padding:20}}>
      <Col span={8}></Col>
      <Col span={8}><Button type="primary">Login</Button></Col>
      <Col span={8}></Col>
    </Row>
      </Modal>
    </div>
    </>
  );
};
export default LoginModal;