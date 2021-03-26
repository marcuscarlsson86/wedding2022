import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/header";
import { HeroImage } from "./components/hero";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Content style={{ maxWidth: "1200px", margin: "auto" }}>
        adsadsasdas
        {/* <HeroImage /> */}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
