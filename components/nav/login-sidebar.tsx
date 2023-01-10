import React from "react";
import { Drawer, Menu } from "antd";

const LoginSidebar: React.FC = () => {
    return(
        <>
        <Menu mode={"horizontal"} items={[
            {
              label:"Login",
              key:"login"
            },
          ]}></Menu>
        </>
        )
};

export default LoginSidebar;
