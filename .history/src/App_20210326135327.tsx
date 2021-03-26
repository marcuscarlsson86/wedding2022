import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/header";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <div className="header">
        <Navigation />
      </div>
      <Content style={{ maxWidth: "1600px", margin: "auto" }}></Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
