import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title text-center">NONTON ANIME GRATIS</div>
          </Col>
          <div className="introbutton mt-4 text-center">
            <Button variant="light" className="text-dark">Lihat Semua List</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
