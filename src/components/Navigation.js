import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {handleSetAuthedUser} from "../actions/authedUser";

class Navigation extends Component {
    handleLogout() {
        this.props.dispatch(handleSetAuthedUser(null));
    }

    render() {
        return (
            <Container fluid className='p-0 bg-white shadow-lg'>
                <Row>
                    <Col>
                        <Navbar>
                            <Navbar.Brand>Would You Rather?</Navbar.Brand>
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
                        </Navbar>
                    </Col>

                    {
                        this.props.authedUser &&
                            <Col className='d-flex align-content-center justify-content-end'>
                                <Navbar>
                                    <Nav>
                                        <Nav.Link>{`Welcome, ${this.props.authedUser}`}</Nav.Link>
                                        <LinkContainer to='/'>
                                            <Nav.Link onClick={() => this.handleLogout()}>Logout</Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </Navbar>
                            </Col>
                    }
                </Row>

            </Container>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Navigation);