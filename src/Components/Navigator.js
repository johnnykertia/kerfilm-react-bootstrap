import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <b>KER FILM</b>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#Trending">TRENDING</Nav.Link>
            <Nav.Link href="#Anime">ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      {/* Navbar */}
    </div>
  );
};

export default NavigationBar;
