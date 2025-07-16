import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/styles/header.css';

const Header = ( ) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      document.body.setAttribute('data-spy', 'scroll');
      document.body.setAttribute('data-target', '.navbar');
      document.body.setAttribute('data-offset', '50');
  
      return () => {
        document.body.removeAttribute('data-spy');
        document.body.removeAttribute('data-target');
        document.body.removeAttribute('data-offset');
      };
    }, []);

    // Функция закрытия меню при клике на ссылку
    const handleNavClick = () => {
      setExpanded(false);
    };

    return (
      <Navbar data-bs-theme="dark" className='header' sticky="top" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container fluid>
          <Navbar.Brand  href="/">
            <img className='headerLogo' src={Logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="myNavbar" />
          <Navbar.Collapse id="myNavbar" className="myNavbar">
            <Nav className="me-auto">
              <Nav.Link href="#section1" className='header1' onClick={handleNavClick}><h5>Хомлины</h5></Nav.Link>
              <Nav.Link href="#section2" className='header2' onClick={handleNavClick}><h5>Направления</h5></Nav.Link>
              <Nav.Link href="#section3" className='header3' onClick={handleNavClick}><h5>Почему мы?</h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;