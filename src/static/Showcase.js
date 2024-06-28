import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import showcase_Leaves from '../Image/showcase_Leaves.png';
import showcase_CalendarSchedule from '../Image/showcase_CalendarSchedule.png';
import showcase_Login from '../Image/showcase_Login.png';
import showcase_Dashboard from '../Image/showcase_Dashboard.png';
import showcase_CalendarMeeting from '../Image/showcase_CalendarMeeting.png';
import showcase_NewLeave from '../Image/showcase_NewLeave.png';

function Showcase() {
    return (
        <div>
            <div className="section">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="firstSection">
                                <h2 className="text-center pt-5 text-white">Showcase</h2>
                                <p className="d-flex justify-content-center text-center text-white">
                                    It is a long established fact that a reader will be distracted by the readable content of a
                                    page when looking at its layout.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={12}>
                            <Row className="gy-3 mb-5">
                                <Col sm={6} md={2} className="text-center">
                                    <img src={showcase_Leaves} className="img-fluid" alt="Showcase Leaves" />
                                </Col>
                                <Col sm={6} md={2} className="text-center">
                                    <img src={showcase_CalendarSchedule} className="img-fluid" alt="Showcase Calendar Schedule" />
                                </Col>
                                <Col sm={6} md={2} className="text-center">
                                    <img src={showcase_Login} className="img-fluid" alt="Showcase Login" />
                                </Col>
                                <Col sm={6} md={2} className="text-center">
                                    <img src={showcase_Dashboard} className="img-fluid" alt="Showcase Dashboard" />
                                </Col>
                                <Col sm={6} md={2} className="mb-3 text-center">
                                    <img src={showcase_CalendarMeeting} className="img-fluid" alt="Showcase Calendar Meeting" />
                                </Col>
                                <Col sm={6} md={2} className="mb-3 text-center">
                                    <img src={showcase_NewLeave} className="img-fluid" alt="Showcase New Leave" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Showcase
