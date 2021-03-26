import React from "react";
import { Menu } from "antd";

//import useState for selected keys later

export const Navigation = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="option1">Navigation One</Menu.Item>
      <Menu.Item key="option2">Navigation Two</Menu.Item>
    </Menu>
  );
};
