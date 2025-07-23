import { useState, useEffect } from 'react';
import '../assets/styles/header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Header = ( ) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false);
  };

  const getBrandText = () => {
    if (location.pathname === '/') {
      return 'Добро пожаловать!';
    } else
    return 'Назад';
  };

  return (
    <Navbar className='navbar navbar-dark bg-dark' sticky="top" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand  href="/">
          <h5>{getBrandText()}</h5>
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