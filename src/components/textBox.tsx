import { Card, Col, Row, Typography } from "antd";
const { Text } = Typography;
interface Props {
  headline: string;
  date: string;
}

export const TextBox: React.FC<Props> = ({ date, headline }) => {
  return (
    <div className="site-card-wrapper">
      <Row justify="space-around" align="middle" style={{ marginTop: "50px" }}>
        <Col style={{ color: "white", textAlign: "center" }}>
          <div className="save-wrapper">{headline}</div>
          <div className="date-wrapper">{date}</div>
        </Col>
      </Row>
    </div>
  );
};
