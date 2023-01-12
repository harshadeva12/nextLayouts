import styles from  "../styles/Layout.module.css";
import BaseLayout from "./BaseLayout";
import { Drawer, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import AppMenu from "./nav/app-menu";
import SideBar from "./nav/app-menu-sidebar";
import Login from "./nav/login";
import { Col, Row ,Button, Space } from 'antd';
import Logo from "./nav/logo";
import LoginSidebar from "./nav/login-sidebar";

const ThirdLayout: React.FC = (props:any) => {
  const [openMenu,setOpenMenu]=useState(false);
  return (
    <>
     
       <div>
        <span className="headerMenu">
        <Row>
      <Col span={8}><Logo/></Col>
      <Col span={11}><AppMenu/></Col>
      {/* <Col span={11}><LoginModal/></Col> */}
      <Col span={5}><Login/></Col>
    </Row>
        </span>
          <Drawer placement="left" open={openMenu}
            onClose={()=>{
              setOpenMenu(false)
            }}
            closable={true}>
          <SideBar/>
          <LoginSidebar/>
          </Drawer>
          <div className="menuIcon">
            <MenuOutlined onClick={()=>{setOpenMenu(true)}}/>
          </div>
        <div className={styles.container2}>{props.children}</div>
        </div>
     
    </>
  );
};

export default ThirdLayout;