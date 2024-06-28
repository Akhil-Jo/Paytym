import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Plan() {
    return (
        <div>
            <div className="sectionContainer mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sectHead text-center pt-4 mt-3">Best Pricing Plan</h2>
                            <p className="text-center blurColor">
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4} className='d-flex justify-content-center'>
                            <Card className="mb-5 cardBodystyle cardModify">
                                <Card.Body>
                                    <Card.Title className="text-center mt-3">Standard</Card.Title>
                                    <div className="container">
                                        <div className="dashed mt-3"></div>
                                        <h3 className="mt-2 mb-2 text-center">$33/monthly</h3>
                                        <div className="dashed mt-3"></div>
                                    </div>
                                    <div className="container">
                                        <p className="mt-5 mb-0">
                                            Extra features
                                            <ul>
                                                <li>Lifetime free support</li>
                                                <li>Upgrade options</li>
                                                <li>Full access</li>
                                                <li>Web Design</li>
                                                <li>App Design</li>
                                                <li>Web Development</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button className="button rounded-corners buttonModify btnStandard">
                                            Get Started
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='d-flex justify-content-center'>
                            <Card className="mb-5 cardBodyposter cardModify">
                                <Card.Body>
                                    <Card.Title className="text-center mt-3">Personal</Card.Title>
                                    <div className="container">
                                        <div className="dashedRed mt-3"></div>
                                        <h3 className="mt-2 mb-2 text-center">$69/monthly</h3>
                                        <div className="dashedRed mt-3"></div>
                                    </div>
                                    <div className="container">
                                        <p className="mt-5 mb-0">
                                            Extra features
                                            <ul>
                                                <li>Lifetime free support</li>
                                                <li>Upgrade options</li>
                                                <li>Full access</li>
                                                <li>Web Design</li>
                                                <li>App Design</li>
                                                <li>Web Development</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button className="button rounded-corners buttonModify btnPersonal">
                                            Get Started
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='d-flex justify-content-center'>
                            <Card className="mb-5 cardBodymodal cardModify">
                                <Card.Body>
                                    <Card.Title className="text-center mt-3">Business</Card.Title>
                                    <div className="container">
                                        <div className="dashedModal mt-3"></div>
                                        <h3 className="mt-2 mb-2 text-center">$99/monthly</h3>
                                        <div className="dashedModal mt-3"></div>
                                    </div>
                                    <div className="container">
                                        <p className="mt-5 mb-0">
                                            Extra features
                                            <ul>
                                                <li>Lifetime free support</li>
                                                <li>Upgrade options</li>
                                                <li>Full access</li>
                                                <li>Web Design</li>
                                                <li>App Design</li>
                                                <li>Web Development</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button className="button rounded-corners buttonModify btnBusiness">
                                            Get Started
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Plan
