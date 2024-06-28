import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import workChoosePlan from '../Image/work_choosePlan.png';
import workPaymentMethod from '../Image/work_paymentMethod.png';
import workLetsWork from '../Image/work_letsWork.png';

function Work() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="secondSection">
                            <h2 className="sectHead text-center pt-4">How It Works?</h2>
                            <p className="d-flex justify-content-center text-center blurColor">
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="text-center">
                        <img src={workChoosePlan} className="img-fluid mt-5" alt="Choose a Plan" />
                        <h5 className="text-center colorTitle mt-4">Choose a Plan</h5>
                        <p className="cardText text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <img src={workPaymentMethod} className="img-fluid" alt="Payment Method" />
                        <h5 className="text-center colorTitle mt-3">Payment Method</h5>
                        <p className="cardText text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <img src={workLetsWork} className="img-fluid mt-5" alt="Let's Work" />
                        <h5 className="text-center colorTitle mt-4">Let's Work</h5>
                        <p className="cardText text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Work;