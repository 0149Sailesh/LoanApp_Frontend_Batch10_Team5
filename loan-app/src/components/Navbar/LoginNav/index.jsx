import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function LoginNav() {
  return (
    <Navbar expand="lg" className="bg-danger text-white border-bottom border-5 border-warning ">
      <Container className="text-white">
        <Navbar.Brand className='text-white fs-3 font-weight-bold' href="#home">LUMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pr-10 text-white">
            <Nav.Link className='text-white fs-6' href="/login">Login</Nav.Link>
            <Nav.Link className='text-white fs-6' href="/register">Register</Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoginNav;