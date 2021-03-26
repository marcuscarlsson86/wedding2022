import React from "react";
import { Menu, Layout } from "antd";

//import useState for selected keys later

export const Navigation = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ textAlign: "center" }}>
      <Menu.Item key="option1">Navigation One</Menu.Item>
      <Menu.Item key="option2">Navigation Two</Menu.Item>
    </Menu>
  );
};
