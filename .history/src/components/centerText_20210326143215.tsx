import { Card, Col, Row, Typography } from "antd";
const { Text } = Typography;
interface Props {
  headline: string;
  date: string;
}

export const TextBox: React.FC<Props> = ({ date, headline }) => {
  return (
    <div className="site-card-wrapper">
      <Row justify="space-around" align="middle" style={{ marginTop: "100px" }}>
        <Col span={8}></Col>
        <Col span={8} style={{ color: "white", textAlign: "center" }}>
          {date}
          {headline}
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};
