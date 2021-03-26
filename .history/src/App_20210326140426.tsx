import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/header";
import { TextBox } from "./components/centerText";
import { Layout } from "antd";
import { Card, Col, Row } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>{/* <Navigation /> */}</Header>

      <Content className="center">
        <TextBox headline="Save the date" date="28-05-22" />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
