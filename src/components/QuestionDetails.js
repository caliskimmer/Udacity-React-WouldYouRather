import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import QuestionData from './QuestionData';

import './styles/QuestionDetails.css';

const QuestionDetails = ({question, userAvatar}) => {
    return (
        <Container className='rounded'>
            <Row className='py-3 bg-light question-header rounded-top'>
                <Col className='d-flex justify-content-start'>
                    <div className='d-inline-block font-weight-bold'>{`Asked by: ${question['author']}`}</div>
                </Col>
            </Row>
            <Row>
                <Col className='col-4 d-flex justify-content-center align-items-center border-right'>
                    <img className="rounded-circle question-avatar" src={userAvatar} alt='test' />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5 className='my-3 font-weight-bold text-left'>Results:</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <QuestionData
                                option={question.optionOne}
                                totalVotes={question.optionOne.votes.length+question.optionTwo.votes.length} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <QuestionData
                                option={question.optionTwo}
                                totalVotes={question.optionOne.votes.length+question.optionTwo.votes.length} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

function mapStateToProps({ questions, users, authedUser }, ownProps) {
    return {
        question: questions[ownProps.match.params.id],
        userAvatar: users[questions[ownProps.match.params.id].author].avatarURL,
        authedUser
    };
}

export default connect(mapStateToProps)(QuestionDetails);
