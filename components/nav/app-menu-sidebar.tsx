import React from "react";
import { Drawer, Menu } from "antd";

const SideBar: React.FC = () => {
    return(
        <>
        <Menu mode={"inline"} items={[
            {
              label:"Home",
            key:"home"
            },
            {
              label:"Contact Us",
            key:"contact"
            },
            {
              label:"About Us",
            key:"about"
            }
          ]}></Menu>
        </>
        )
};

export default SideBar;
