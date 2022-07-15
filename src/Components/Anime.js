import { Card, Container, Row, Col, Image } from "react-bootstrap";
import User1 from "../asset/image/user1.jpg";
import User2 from "../asset/image/user2.jpg";
import User3 from "../asset/image/user3.jpg";
import User4 from "../asset/image/user4.jpg";

const Anime = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ANIME</h1>
        <Row>
          <Col md={4} className="movieWrapper mt-4" id="Anime">
            <Card className="bg-dark text-white movieImage">
              <Image src={User1} alt="Card image" className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-4">
            <Card className="bg-dark text-white movieImage">
              <Image src={User2} alt="Card image" className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-4">
            <Card className="bg-dark text-white movieImage">
              <Image src={User3} alt="Card image" className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-4">
            <Card className="bg-dark text-white movieImage">
              <Image src={User4} alt="Card image"  className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-4">
            <Card className="bg-dark text-white movieImage" >
              <Image src={User1} alt="Card image" className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-4">
            <Card className="bg-dark text-white movieImage">
              <Image src={User2} alt="Card image" className="sizeImage"/>
              <Card.Title className="text-center mt-2">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Anime;
