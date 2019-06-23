import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Container fluid className='p-0 shadow-lg'>
                <Navbar bg='light'>
                    <Navbar.Brand>Would You Rather?</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href='#'>Home</Nav.Link>
                            <Nav.Link href='#'>New Question</Nav.Link>
                            <Nav.Link href='#'>Leader Board</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default connect()(Navigation);