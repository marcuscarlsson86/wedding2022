import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/header";
import { TextBox } from "./components/centerText";
import { Layout } from "antd";
const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Navigation />
      <Content>
        <TextBox headline="Save the date" date="28-05-22" />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
