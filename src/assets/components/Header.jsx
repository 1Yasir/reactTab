import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
   

    return (
        <Navbar expand="lg" className={`bg-black ${scroll > 100 ? 'bg-danger' : ''}`}>
            <Container>
                <Navbar.Brand className='text-white'>Tab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white'>Home</Nav.Link>
                        <Nav.Link className='text-white'>Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
