import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import footerLogo from '../Image/footer_logo.png';
import footerGooglePlay from '../Image/footer_googlePlay.png';
import footerAppStore from '../Image/footer_appStore.png';

function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} md={3} className="mt-4 mb-4">
                        <img src={footerLogo} className="img-fluid mb-4" alt="Footer Logo" />
                        <p className="cardText">555 North Orchard Street Kings Mountain, NY 28086 </p>
                        <p className="cardText">Email: info@yourdomain.com</p>
                        <p className="cardText">Call : +1 245 369 8741</p>
                        <div className="mt-2 d-flex">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='iconModify'><FaFacebookF /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='iconModify'><FaTwitter/></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='iconModify'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='iconModify'><FaLinkedinIn /></a>
                        </div>
                    </Col>
                    <Col sm={6} md={3} className="mb-4">
                        <h5 className="colorTitle mt-5">Quick Links</h5>
                        <div>
                            <p className="cardText">Home</p>
                            <p className="cardText">About Us</p>
                            <p className="cardText">Features</p>
                            <p className="cardText">FAQ</p>
                            <p className="cardText">Contact</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3} className="mb-4">
                        <h5 className="colorTitle mt-5">Support</h5>
                        <div>
                            <p className="cardText">Help & Support</p>
                            <p className="cardText">Privacy Policy</p>
                            <p className="cardText">Terms & Conditions</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3} className="mb-4">
                        <h5 className="colorTitle mt-5">Download</h5>
                        <div>
                            <img src={footerGooglePlay} className="img-fluid mt-3" alt="Google Play" />
                            <img src={footerAppStore} className="img-fluid mt-3" alt="App Store" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
