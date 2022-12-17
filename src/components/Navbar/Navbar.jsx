import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import gericht from "/Users/carloscordova/Desktop/restaurant-app/src/assets/gericht.png";
import './Navbar.css'
function Navbars() {
  return (
    <div className="nav-main-container">
      <Navbar
        className="fs-4 d-flex justify-content-evenly text-white fw-bold"
        expand="lg"
      >
        <Container>
          <Navbar.Brand src={gericht}>
            <img className="navlogo" src={gericht} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/aboutus">
                {" "}
                About Us
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/contactus">
                {" "}
                Contact us
              </Nav.Link>
              
              <Nav.Link id="nav-link" as={Link} to="/booktable">
                {" "}
                Book Table
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
