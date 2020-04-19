import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo-opt.svg"

import { Navbar, Nav, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar">
        {/* <Container> */}
        <div class="container">
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <img class= "img-fluid lazy" src={logo} width="40" height="40" alt="&#8962;"></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/about">
                <Nav.Link as="span" eventKey="about">
                  <Button variant="secondary" active>
                    About
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/alaschem">
                <Nav.Link as="span" eventKey="ALASCHEM">
                  <Button variant="secondary" active>
                    ALASCHEM
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/faculty">
                <Nav.Link as="span" eventKey="Faculty">
                  <Button variant="secondary" active>
                    Faculty
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/statistics">
                <Nav.Link as="span" eventKey="Statistics">
                  <Button variant="secondary" active>
                    Statistics
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/syllabus">
                <Nav.Link as="span" eventKey="Syllabus">
                  <Button variant="secondary" active>
                    Syllabus
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/NAAC">
                <Nav.Link as="span" eventKey="NAAC">
                  <Button variant="secondary" active>
                    NAAC
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/reading-material">
                <Nav.Link as="span" eventKey="ReadingMaterial">
                  <Button variant="secondary" active>
                    Reading Material
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/photo-gallery">
                <Nav.Link as="span" eventKey="PhotoGallery">
                  <Button variant="secondary" active>
                    Photo Gallery
                  </Button>
                </Nav.Link>
              </Link>
              <Link to="/notice">
                <Nav.Link as="span" eventKey="Notice">
                  <Button variant="secondary" active>
                    Notice
                  </Button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </div>
      </Navbar>
    </>
  )
}

export default CustomNavbar
