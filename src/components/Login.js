import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/Login.css';
import logo from '../images/redux-logo.png';

class Login extends Component {
    render() {
        return (
            <Container fluid className='container rounded shadow-lg pb-4'>
                <Row className='bg-light rounded-top p-2 border-bottom'>
                    <Col>
                        <h5 className='font-weight-bold'>Welcome to the Would You Rather App!</h5>
                        <h6 className='font-weight-light'>Please sign in to continue</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={logo} alt='React Logo' className='mt-5' />
                        <h4 className='mt-5 font-weight-bold'>Sign In</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-3'>
                        <select className='p-2 d-block w-100 rounded'>
                            <option>This is a test!</option>
                        </select>
                        <Button className='p-2 w-100 mt-3'>Log in</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(Login);