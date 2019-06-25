import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './styles/Login.css';
import logo from '../images/redux-logo.png';
import { handleSetAuthedUser } from '../actions/authedUser';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false
        };
    }

    handleChange = (e) => {
        this.setState({selectedId: e.target.value});
    };

    handleSubmit = () => {
        this.props.dispatch(handleSetAuthedUser(this.state.selectedId));
        this.setState({toHome: true});
    };

    componentDidMount() {
        if (!this.props.userIds && !this.props.userIds[0]) {
            return;
        }

        this.setState({
            selectedId: this.props.userIds[0]
        });
        //console.log(this.state.selectedId);
        //this.props.dispatch(handleSetAuthedUser(this.state.selectedId));
    }

    render() {
        const { userIds } = this.props;
        const { toHome, selectedId } = this.state;

        if (toHome === true) {
            return <Redirect to='/home' />
        }

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
                        {
                            selectedId &&
                                 <select
                                    onChange={this.handleChange}
                                    value={selectedId}
                                    className='p-2 d-block w-100 rounded'>
                                    {
                                        userIds.map((id) => (
                                            <option key={id}>
                                                {id}
                                            </option>
                                        ))
                                    }
                                </select>
                        }
                        <Button className='p-2 w-100 mt-3'
                            onClick={() => this.handleSubmit()}>
                            Log in
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users).sort(),
    }
}

export default connect(mapStateToProps)(Login);