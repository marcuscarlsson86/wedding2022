import React from "react";
import { Menu, Layout } from "antd";

const { Header } = Layout;

//import useState for selected keys later

export const Navigation = () => {
  return (
    <Header style={{ backgroundColor: "rosybrown" }}>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ backgroundColor: "rosybrown", textAlign: "center" }}
      >
        <Menu.Item key="option1">Datum</Menu.Item>
        <Menu.Item key="option2">Om oss</Menu.Item>
      </Menu>
    </Header>
  );
};
