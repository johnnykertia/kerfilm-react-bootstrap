import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ImageList from "../asset/image/45318.jpg";
import Trending1 from "../asset/image/trending1.jpg";
import Trending2 from "../asset/image/trending2.jpg";
import Trending3 from "../asset/image/trending3.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING</h1>
        <Row>
          <Col md={4} className="movieWrapper mt-4" id="Trending">
            <Card className="bg-dark text-white movieImage">
              <Image src={ImageList} alt="Card image" className="sizeImage"/>
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
              <Image src={Trending1} alt="Card image" className="sizeImage"/>
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
              <Image src={Trending2} alt="Card image" className="sizeImage"/>
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
              <Image src={Trending2} alt="Card image"  className="sizeImage"/>
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
              <Image src={Trending3} alt="Card image" className="sizeImage"/>
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
              <Image src={Trending1} alt="Card image" className="sizeImage"/>
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

export default Trending;
