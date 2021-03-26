import { Card, Col, Row } from "antd";

interface Props {
  headline: string;
  date: string;
}

export const TextBox: React.FC<Props> = () => {
  return (
    <div className="site-card-wrapper">
      <Row justify="space-around" align="middle">
        <Col span={8}>1</Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
    </div>
  );
};
