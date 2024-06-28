import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from '../Image/banner_img.png';

function Banner() {
    return (
        <Container>
            <Row className="justify-content-between mt-4">
                <Col md={6} className="d-flex align-items-center text-white">
                    <div>
                        <h1 className="display-5">Creative <br />Solutions to</h1>
                        <h1 className="display-5 fw-bold">Improve your <br />Business.</h1>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-5">
                        <img src={bannerImg} className="img-fluid" alt="Banner" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
