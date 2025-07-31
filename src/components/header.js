import { useState } from 'react';
import '../assets/styles/header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Header = ( ) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => {
    setExpanded(false);
  };

  const handleBrandClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const getBrandText = () => {
    if (location.pathname === '/') {
      return 'Добро пожаловать!';
    } else {
      return 'Назад';
    }
  };

  return (
    <Navbar className='navbar navbar-dark bg-dark' sticky="top" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand as="div" onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
          <h5>{getBrandText()}</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="myNavbar" />
        <Navbar.Collapse id="myNavbar" className="myNavbar">
          <Nav className="me-auto">
            <Link to="/#section1" className='header' onClick={handleNavClick}><h5>Расписание</h5></Link>
            <Link to="/#section2" className='header' onClick={handleNavClick}><h5>Хомлины</h5></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;