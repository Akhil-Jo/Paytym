import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import testimonialOne from '../Image/testimonial_one.png';
import testimonialTwo from '../Image/testimonial_two.png';
import testimonialThree from '../Image/testimonial_three.png';
import testimonialFour from '../Image/testimonial_four.png';
import testimonialFive from '../Image/testimonial_five.png';

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [infoContent, setInfoContent] = useState(null);
    const [testimonialContent, setTestimonialContent] = useState(null);

    const images = [
        { src: testimonialOne, info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them.</div><div class='firstLine'>Selvedin Durak</div><div class='secondLine'>Description</div>" },
        { src: testimonialTwo, info: "<div class='first-info'>These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='firstLine'>Image 2</div><div class='secondLine'>Selvedin Durak</div>" },
        { src: testimonialThree, info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='firstLine'>Selvedin Durak</div><div class='secondLine'>Description</div>" },
        { src: testimonialFour, info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='firstLine'>Image 4 Selvedin</div><div class='secondLine'>Durak</div>" },
        { src: testimonialFive, info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='firstLine'>Selvedin Durak</div><div class='secondLine'>Description</div>" }
    ];

    useEffect(() => {
        const rotateImages = () => {
            // Update the content below the images based on the currently displayed image
            const currentImage = images[currentIndex];
            const matchResult = currentImage.info.match(/<div class='firstLine'>(.*?)<\/div><div class='secondLine'>(.*?)<\/div>/);

            if (matchResult) {
                const firstLineContent = matchResult[1];
                const secondLineContent = matchResult[2];

                const styledFirstLine = <strong style={{ display: 'block', textAlign: 'center' }}>{firstLineContent}</strong>;
                const styledSecondLine = <div style={{ textAlign: 'center' }}>{secondLineContent}</div>;

                // Set the inner HTML of the imageInfo element
                setInfoContent(
                    <React.Fragment key={currentIndex}>
                        {styledFirstLine}
                        <br />
                        {styledSecondLine}
                    </React.Fragment>
                );
            } else {
                // Handle the case where the regular expression didn't match
                console.error("Regular expression did not match.");
            }

            // Update the testimonial content with the first-info text
            const testContainer = currentImage.info.match(/<div class='first-info'>(.*?)<\/div>/)[1];
            const styledTestimonial = <em style={{ fontWeight: 600 }}>{testContainer}</em>;

            // Set the testimonial content
            setTestimonialContent(styledTestimonial);

            // Update the currentIndex
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        // Set an interval to rotate the images every 3 seconds (adjust as needed)
        const intervalId = setInterval(rotateImages, 3000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex, images]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectHead text-center pt-4 mt-5">Testimonial</h2>
                        <p className="d-flex justify-content-center text-center blurColor mb-5">
                            We do not brag but what others say about us can help you in understanding our ability and
                            ethics well.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col id="testimonial">{testimonialContent}</Col>
                </Row>
                <Row>
                    <Col id="imageContainer">
                        {/* Render images based on currentIndex */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                src={images[(currentIndex + i) % images.length].src}
                                className={`image${i === 2 ? ' borderImage' : ''}`}
                                alt={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col id="imageInfo">{infoContent}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testimonial;
