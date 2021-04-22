import "./App.css";
import { Navigation } from "./components/header";
import { TextBox } from "./components/textBox";
import { Layout } from "antd";
const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Navigation />
      <Content>
        <TextBox date="22-05-28" headline="Save The Date" />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
