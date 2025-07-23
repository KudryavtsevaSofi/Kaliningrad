import { useState, useEffect } from 'react';
import '../assets/styles/header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ( ) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar className='navbar navbar-dark bg-dark' sticky="top" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand  href="/">
          <h5>Добро пожаловать!</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="myNavbar" />
        <Navbar.Collapse id="myNavbar" className="myNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#section1" className='header' onClick={handleNavClick}><h5>Расписание</h5></Nav.Link>
            <Nav.Link href="#section2" className='header' onClick={handleNavClick}><h5>Хомлины</h5></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;