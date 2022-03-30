import React from 'react';
import { Container, Form, FormControl, Nav, NavDropdown,  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className='nav-content'>
           <Navbar className='navbar-container' expand="lg">
            <Container >
                <Navbar.Brand href="#" className='fs-5'><span className='title'><NavLink to='/' style={{color:'black', textDecoration:'none'}}>Burger Restaurant</NavLink></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px', }}
                    navbarScroll
                     >
                   <NavLink to='/' className='navItems'>Home</NavLink> 
                        <NavLink className='navItems' to='/shop'>Shop</NavLink>
                        <NavLink className='navItems' to='/contact'>Contact Us</NavLink>
                        <NavLink className='navItems' to='/about'> About</NavLink>
                </Nav>
                <Form className="d-flex search-box">
                    <FormControl
                    type="search"
                    placeholder="Enter the name of your Food"
                    className="me-2 text-red"
                    aria-label="Search"
                    />
                    <button className='btn-outline-danger navbar-btn px-4' variant="outline-success">Search</button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
           </nav>
        </div>
    );
};

export default Header;<h1>ho</h1>