import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.info('logged out')
    localStorage.clear();
    history.push('/')
  }
  return (
    <Navbar expand="lg" className="bg-danger text-white border-bottom border-5 border-warning ">
      <ToastContainer/>
      <Container className="text-white">
        <Navbar.Brand className='text-white fs-4 font-weight-semibold' href="#home">Loan Management Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pr-10 text-white">
            {!loggedIn && <Nav.Link className='text-white fs-6' href="/">Login</Nav.Link>}
            {!loggedIn && <Nav.Link className='text-white fs-6' href="/register">Register</Nav.Link>}
           {loggedIn&& <button className='btn border-0 text-white fs-6' onClick={logOutHandler}>Logout</button>}
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoginNav;