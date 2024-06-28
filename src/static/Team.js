import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teamImg from '../Image/team_img.png';
function Team() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectHead text-center pt-4 mt-3">Our Expert Team</h2>
                        <p className="text-center blurColor">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={teamImg} className="img-fluid mt-4 mb-5" alt="Expert Team" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team
