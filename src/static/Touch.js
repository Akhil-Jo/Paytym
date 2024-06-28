import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

function Touch() {
    return (
        <div>
            <div className="finalbgImage">
                <div className="firstSection">
                    <h2 className="text-center pt-5 text-white">Get In Touch</h2>
                    <p className="d-flex justify-content-center text-center text-white">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.
                    </p>
                </div>
                <Container className="mt-5">
                    <div className="touchMain">
                        <InputGroup>
                            <FormControl type="text" className='inputBox' placeholder="Name" />
                        </InputGroup>
                        <InputGroup>
                            <FormControl type="email" className='inputBox' placeholder="Email" />
                        </InputGroup>
                    </div>
                    <div className="mt-4 text-center">
                        <FormControl as="textarea" rows={3} className='inputBox' placeholder="Message" />
                    </div>
                    <div className="text-center mt-4">
                        <Button className="msgBtn mb-5">Send a Message</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Touch;