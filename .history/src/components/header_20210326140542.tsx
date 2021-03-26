import React from "react";
import { Menu, Layout } from "antd";

const { Header } = Layout;

//import useState for selected keys later

export const Navigation = () => {
  return (
    <Header>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{
          textAlign: "center",
          opacity: "0.8",
          backgroundColor: "black",
        }}
      >
        <Menu.Item key="option1">Navigation One</Menu.Item>
        <Menu.Item key="option2">Navigation Two</Menu.Item>
      </Menu>
    </Header>
  );
};
