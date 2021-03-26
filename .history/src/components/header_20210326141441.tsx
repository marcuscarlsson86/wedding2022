import React from "react";
import { Menu, Layout } from "antd";

const { Header } = Layout;

//import useState for selected keys later

export const Navigation = () => {
  return (
    <Header style={{ backgroundColor: "black" }}>
      <Menu mode="horizontal" theme="dark" style={{ backgroundColor: "black" }}>
        <Menu.Item key="option1">Navigation One</Menu.Item>
        <Menu.Item key="option2">Navigation Two</Menu.Item>
      </Menu>
    </Header>
  );
};
