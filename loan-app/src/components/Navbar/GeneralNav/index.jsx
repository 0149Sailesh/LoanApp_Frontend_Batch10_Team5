import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
function LoginNav() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(async () => {

    if (localStorage.getItem('Token')) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false);
    }

  }, [loggedIn]);
  function logOutHandler(){
    localStorage.clear();
    history.push('/')
  }
  return (
    <Navbar expand="lg" className="bg-danger text-white border-bottom border-5 border-warning ">
      <Container className="text-white">
        <Navbar.Brand className='text-white fs-3 font-weight-bold' href="#home">LAMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pr-10 text-white h-100 d-flex align-items-center mt-0  ">
           
           {loggedIn&& <button className='btn border-0 text-white fs-6 mt-0 ' onClick={logOutHandler}>Logout</button>}
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoginNav;