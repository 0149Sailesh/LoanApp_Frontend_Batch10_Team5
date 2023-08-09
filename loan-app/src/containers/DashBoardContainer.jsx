import React from 'react';
//import { Homepage } from '../components/HomePage';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import SideMenu from '../components/SideMenu';
import LoginNav from '../components/Navbar/LoginNav';
export function DashBoardContainer() {
    return (
        <div style={{
            height:'100vh',
            backgroundImage: "url(" + "/icons/new-wf.png" + ")",
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <LoginNav></LoginNav>
            <div  className='mt-5 d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/loan-ig.png" height={140} className='px-5' />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>View Loans</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='mt-2 bg-danger text-warning border-0 fw-bold' variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/form-g.png" height={140} />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>Apply For Loans</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='mt-2 bg-danger text-warning border-0 fw-bold' variant="primary">Apply</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='p-4 m-4'>
                    <Card.Img variant="top" src="icons/cart.png" height={140} className='px-5' />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                        <Card.Title>View Items Purchased</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='mt-2 bg-danger text-warning border-0 fw-bold' variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <SideMenu></SideMenu>

            </div>
        </div >
    );
}