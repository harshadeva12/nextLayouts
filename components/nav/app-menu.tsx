import React from "react";
import { Drawer, Menu } from "antd";

const AppMenu: React.FC = () => {
    return(
        <>
        <Menu mode={"horizontal"} items={[
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

export default AppMenu;
