import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <Container fluid className='p-0 shadow-lg'>
                <Navbar bg='light'>
                    <Navbar.Brand>Would You Rather?</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/home'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/new-question'>
                                <Nav.Link>New Question</Nav.Link>
                            </LinkContainer>
                            {/*<LinkContainer>*/}
                            {/*    <Nav.Link>Leader Board</Nav.Link>*/}
                            {/*</LinkContainer>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default connect()(Navigation);