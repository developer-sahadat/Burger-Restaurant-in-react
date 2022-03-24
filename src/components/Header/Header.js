import React from 'react';
import { Container, Form, FormControl, Nav, NavDropdown,  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className='nav-content'>
           <Navbar bg="warning" expand="lg">
            <Container >
                <Navbar.Brand href="#" className='fs-5'><span className='title'>Burger Restaurant</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                     >
                    <Nav.Link href="#action1" className='fs-6'>Home</Nav.Link>
                    <NavDropdown className='fs-6' title="Shop" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Food items</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Best Sell Product
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className='fs-6'>
                   Contact
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Enter the name of your Food"
                    className="me-2"
                    aria-label="Search"
                    />
                    <button className='btn-outline-danger bg-warning px-4' variant="outline-success">Search</button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
           </nav>
        </div>
    );
};

export default Header;<h1>ho</h1>