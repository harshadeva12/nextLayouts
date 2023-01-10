import React from "react";
import { Drawer, Menu } from "antd";
import LoginModal from "./login-modal";

import { Col, Row ,Button, Space } from 'antd';
const Login: React.FC = () => {
    return(
        <>
          <div style={{padding:10,display:"flex"}}>
          <LoginModal/>
          <Button>Get Started</Button>
          </div>
        </>
        )
};

export default Login;
