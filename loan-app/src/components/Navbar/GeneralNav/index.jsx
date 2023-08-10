import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function GeneralNav() {
  return (
    <Navbar expand="lg" className="bg-danger text-white border-bottom border-5 border-warning ">
      <Container className="text-white">
        <Navbar.Brand className='text-white fs-3 font-weight-bold' href="#home">LUMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default GeneralNav;