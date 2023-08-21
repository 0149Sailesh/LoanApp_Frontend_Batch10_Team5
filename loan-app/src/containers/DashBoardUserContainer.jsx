import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import SideMenu from '../components/SideMenuUser';
import GeneralNav from '../components/Navbar/GeneralNav';
import { Footer } from '../components/Footer';
export function DashBoardUserContainer() {
    return (
        <div >
        <div style={{
            height: '100vh',
            backgroundImage: "url(" + "/icons/newwf.png" + ")",
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            overflow:'auto'
        }}>
            <GeneralNav></GeneralNav>
            <div className='mt-5 d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/loan-ig.png" height={140} className='px-5' />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>View Loan</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                            
                            <Nav.Link href='/view-customers'  className='btn px-3 py-2 mt-2 ml-1 bg-danger text-warning border-0 fw-bold' variant="primary">View</Nav.Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/loan-ig.png" height={140} className='px-5' />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>Apply For Loan</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                            <Nav.Link href='/admin-AddLoanCard' className='btn px-3 py-2  mt-2 mr-1 bg-danger text-warning border-0 fw-bold' variant="primary">Apply</Nav.Link>
                         
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/cart.png" height={140} className='px-5' />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>View Items</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                           
                            <Nav.Link href='/view-items' className='   btn px-3 py-2 mt-2 ml-1 bg-danger text-warning border-0 fw-bold' variant="primary">View</Nav.Link>
                        </div>
                    </Card.Body>
                </Card>
                <SideMenu></SideMenu>

            </div>
        
        </div >
        <Footer/>
        </div>
    );
}