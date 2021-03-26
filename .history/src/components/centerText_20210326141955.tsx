import { Card, Col, Row } from "antd";

interface Props {
  headline: string;
  date: string;
}

export const TextBox: React.FC<Props> = (date, headline) => {
  return (
    <div className="site-card-wrapper">
      <Row justify="space-around" align="middle">
        <Col span={8}></Col>
        <Col span={8} style={{ color: "white" }}>
          {date}
        </Col>
        <Col span={8}>3</Col>
      </Row>
    </div>
  );
};
