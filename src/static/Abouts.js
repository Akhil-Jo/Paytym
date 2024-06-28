import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutTerface from '../Image/about_terface.png';
import aboutAccess from '../Image/about_access.png';
import aboutRegularly from '../Image/about_regularly.png';
import aboutSharing from '../Image/about_sharing.png';
import aboutImg from '../Image/about_img.png';

function about() {
    return (
        <div>
            <div className="sectionBg">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="firstSection">
                                <h2 className="text-center pt-4">About Our App</h2>
                                <p className="d-flex justify-content-center text-center blurColor">
                                    Do you want to have your own HR management software system? If YES, you have landed at the best place.
                                    Paytym offers extensive HR management software development services for startups and enterprises
                                    irrespective of the industry type.
                                </p>
                            </div>
                            <div>
                                <h3 className="sectHead pt-4">User Friendly Interfaces</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing us. disciplined rid so rational muff the project.</p>
                                <Container>
                                    <Row className="d-flex align-items-center">
                                        <Col xl={6}>
                                            <Row>
                                                <Col sm={6} md={6} lg={6} mb={3} mb-md={0}>
                                                    <div className="d-flex justify-content-center">
                                                        <div>
                                                            <div className="circle bg-success">
                                                                <img src={aboutTerface} className="img-fluid iconImg" alt="About Terface" />
                                                            </div>
                                                        </div>
                                                        <div className="subSent">
                                                            <h6>Elegant Interface</h6>
                                                            <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={6} md={6} lg={6} mb={3} mb-md={0}>
                                                    <div className="d-flex justify-content-center">
                                                        <div>
                                                            <div className="circle bg-warning">
                                                                <img src={aboutAccess} className="img-fluid iconImg" alt="About Access" />
                                                            </div>
                                                        </div>
                                                        <div className="subSent">
                                                            <h6>Elegant Interface</h6>
                                                            <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={6} md={6} lg={6} mb={3} mb-md={0}>
                                                    <div className="d-flex justify-content-center">
                                                        <div>
                                                            <div className="circle bg-primary">
                                                                <img src={aboutRegularly} className="img-fluid iconImg" alt="About Regularly" />
                                                            </div>
                                                        </div>
                                                        <div className="subSent">
                                                            <h6>Elegant Interface</h6>
                                                            <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={6} md={6} lg={6} mb={3} mb-md={0}>
                                                    <div className="d-flex justify-content-center">
                                                        <div>
                                                            <div className="circle bg-info">
                                                                <img src={aboutSharing} className="img-fluid iconImg" alt="About Sharing" />
                                                            </div>
                                                        </div>
                                                        <div className="subSent">
                                                            <h6>Elegant Interface</h6>
                                                            <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={6}>
                                            <img src={aboutImg} className="img-fluid" alt="About Image" />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default about
