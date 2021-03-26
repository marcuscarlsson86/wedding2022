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
        <TextBox date="28-05-22" headline="Save The Date" />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
