import React from "react";
import { Menu } from "antd";

export const Navigation = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
    </Menu>
  );
};
