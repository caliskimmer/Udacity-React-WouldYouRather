import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/App.css';

import Login from './Login';
import Navigation from './Navigation';

function App() {
  return (
      <Router>
        <Container fluid className='App'>
            <Row>
                <Col className='p-0'>
                    <Navigation />
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col lg={3}>
                    <Login />
                </Col>
            </Row>
        </Container>
      </Router>
  );
}

export default connect()(App);
