import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
    return (
        <div>
            <Container className="mt-4 mb-5">
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="secondSection">
                            <h2 className="sectHead text-center pt-4">Awesome Features</h2>
                            <p className="d-flex justify-content-center text-center blurColor">
                                An HR management software system will be of high use when various
                                powerful features will be integrated into it. Paytym develops a
                                wide range of next-gen features for HR management software systems.
                                We craft future-proof solutions in terms of HR management software
                                development.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        class="bi bi-cloud-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path
                                            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Cloud-Based Facilities</h5>
                                <p className="cardText">
                                    We don’t prefer to develop solutions that are limited to certain
                                    devices and browsers. We develop cloud-based SaaS solutions so
                                    that a user can easily access the platform using any
                                    PC/laptop/tablet/smartphone and browser.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="svgIcon">
                                        <path
                                            d="M7.93945 21.4395L10.0605 23.5605L13.5 20.121L16.9395 23.5605L19.0605 21.4395L15.621 18L19.0605 14.5605L16.9395 12.4395L13.5 15.879L10.0605 12.4395L7.93945 14.5605L11.379 18L7.93945 21.4395Z"
                                            fill="white" />
                                        <path
                                            d="M24 3H21V0H18V3H9V0H6V3H3C1.3455 3 0 4.3455 0 6V27C0 28.6545 1.3455 30 3 30H24C25.6545 30 27 28.6545 27 27V6C27 4.3455 25.6545 3 24 3ZM24.003 27H3V9H24L24.003 27Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Leave Management</h5>
                                <p className="cardText">
                                    We craft excellent leave management features so that HRs can
                                    easily ensure attendance of maximum employees, conduct error-free
                                    payroll, and keep the entire workforce enough productive.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg width="25" height="30" viewBox="0 0 25 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="svgIcon">
                                        <path
                                            d="M17.25 15.375C17.25 15.0766 17.1315 14.7905 16.9205 14.5795C16.7095 14.3685 16.4234 14.25 16.125 14.25H8.625C8.32663 14.25 8.04048 14.3685 7.82951 14.5795C7.61853 14.7905 7.5 15.0766 7.5 15.375V16.125C7.5 17.625 9.5745 18.75 12.375 18.75C15.1755 18.75 17.25 17.625 17.25 16.125V15.375ZM15 10.1175C15 8.67 13.8255 7.5 12.375 7.5C10.9245 7.5 9.75 8.6685 9.75 10.1175C9.75 10.8137 10.0266 11.4814 10.5188 11.9737C11.0111 12.4659 11.6788 12.7425 12.375 12.7425C13.0712 12.7425 13.7389 12.4659 14.2312 11.9737C14.7234 11.4814 15 10.8137 15 10.1175ZM0 3.75C0 2.75544 0.395088 1.80161 1.09835 1.09835C1.80161 0.395088 2.75544 0 3.75 0H21C21.4925 0 21.9801 0.0969966 22.4351 0.285452C22.89 0.473907 23.3034 0.75013 23.6516 1.09835C23.9999 1.44657 24.2761 1.85997 24.4645 2.31494C24.653 2.76991 24.75 3.25754 24.75 3.75V25.125C24.75 25.4234 24.6315 25.7095 24.4205 25.9205C24.2095 26.1315 23.9234 26.25 23.625 26.25H2.25C2.25 26.6478 2.40804 27.0294 2.68934 27.3107C2.97064 27.592 3.35218 27.75 3.75 27.75H23.625C23.9234 27.75 24.2095 27.8685 24.4205 28.0795C24.6315 28.2905 24.75 28.5766 24.75 28.875C24.75 29.1734 24.6315 29.4595 24.4205 29.6705C24.2095 29.8815 23.9234 30 23.625 30H3.75C2.75544 30 1.80161 29.6049 1.09835 28.9016C0.395088 28.1984 0 27.2446 0 26.25V3.75ZM2.25 3.75V24H22.5V3.75C22.5 3.35218 22.342 2.97064 22.0607 2.68934C21.7794 2.40804 21.3978 2.25 21 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Attendance Management</h5>
                                <p className="cardText">
                                    No matter you are running your organization traditionally,
                                    remotely or in a hybrid way, attendance management can be easy
                                    for you.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="svgIcon">
                                        <g id="Group 59">
                                            <g id="Group">
                                                <path id="Vector"
                                                    d="M8.25 10.75C8.82453 10.75 9.39344 10.6368 9.92424 10.417C10.455 10.1971 10.9373 9.87485 11.3436 9.46859C11.7498 9.06234 12.0721 8.58004 12.292 8.04924C12.5118 7.51844 12.625 6.94953 12.625 6.375C12.625 5.80047 12.5118 5.23156 12.292 4.70076C12.0721 4.16996 11.7498 3.68766 11.3436 3.28141C10.9373 2.87515 10.455 2.55289 9.92424 2.33303C9.39344 2.11316 8.82453 2 8.25 2C7.08968 2 5.97688 2.46094 5.15641 3.28141C4.33594 4.10188 3.875 5.21468 3.875 6.375C3.875 7.53532 4.33594 8.64812 5.15641 9.46859C5.97688 10.2891 7.08968 10.75 8.25 10.75V10.75ZM20.75 10.75C21.3245 10.75 21.8934 10.6368 22.4242 10.417C22.955 10.1971 23.4373 9.87485 23.8436 9.46859C24.2498 9.06234 24.5721 8.58004 24.792 8.04924C25.0118 7.51844 25.125 6.94953 25.125 6.375C25.125 5.80047 25.0118 5.23156 24.792 4.70076C24.5721 4.16996 24.2498 3.68766 23.8436 3.28141C23.4373 2.87515 22.955 2.55289 22.4242 2.33303C21.8934 2.11316 21.3245 2 20.75 2C19.5897 2 18.4769 2.46094 17.6564 3.28141C16.8359 4.10188 16.375 5.21468 16.375 6.375C16.375 7.53532 16.8359 8.64812 17.6564 9.46859C18.4769 10.2891 19.5897 10.75 20.75 10.75V10.75Z"
                                                    stroke="white" stroke-width="3" stroke-linejoin="round" />
                                                <path id="Vector_2"
                                                    d="M2 27V21.375C2 17.9231 4.35625 15.125 7.26312 15.125H10.4213C12.9744 15.125 14.5 17.6419 14.5 17.6419"
                                                    stroke="white" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path id="Vector_3"
                                                    d="M27 27V21.375C27 17.9231 24.6156 15.125 21.6744 15.125H18.4787C16.0031 15.125 14.495 17.6419 14.5 17.6419M6.375 24.5H23.25"
                                                    stroke="white" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path id="Vector_4"
                                                    d="M20.9344 22.1611L21.7094 22.9405L23.2594 24.4998L21.7094 26.1005L20.9344 26.9011M8.4563 22.1448L7.6688 22.9286L6.09505 24.4955L7.6688 26.088L8.4563 26.8848"
                                                    stroke="white" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Payroll Management</h5>
                                <p className="cardText">
                                    Manual payroll management requires a lot of time and a single
                                    error can ruin the entire process. In order to be error-free and
                                    to manage payroll within minutes,
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="svgIcon">
                                        <path
                                            d="M4.83166 7.09747C7.10854 5.2732 9.94019 4.28126 12.8577 4.28591C15.8936 4.28591 18.6837 5.33739 20.8838 7.09747L22.9596 5.02166L24.9797 7.04176L22.9039 9.11757C24.415 11.0093 25.3613 13.2892 25.6338 15.695C25.9063 18.1008 25.494 20.5346 24.4444 22.7164C23.3948 24.8982 21.7504 26.7393 19.7006 28.0279C17.6509 29.3164 15.2789 30 12.8577 30C10.4366 30 8.06464 29.3164 6.01484 28.0279C3.96505 26.7393 2.32073 24.8982 1.2711 22.7164C0.221469 20.5346 -0.190806 18.1008 0.0817185 15.695C0.354243 13.2892 1.30049 11.0093 2.81157 9.11757L0.735756 7.04318L2.75585 5.02309L4.83166 7.0989V7.09747ZM12.8577 27.1441C14.171 27.1441 15.4714 26.8854 16.6848 26.3829C17.8981 25.8803 19.0005 25.1437 19.9291 24.215C20.8578 23.2864 21.5944 22.184 22.097 20.9707C22.5995 19.7574 22.8582 18.4569 22.8582 17.1437C22.8582 15.8304 22.5995 14.53 22.097 13.3166C21.5944 12.1033 20.8578 11.0009 19.9291 10.0723C19.0005 9.14363 17.8981 8.407 16.6848 7.90443C15.4714 7.40186 14.171 7.14319 12.8577 7.14319C10.2055 7.14319 7.6618 8.19681 5.78635 10.0723C3.9109 11.9477 2.85728 14.4914 2.85728 17.1437C2.85728 19.7959 3.9109 22.3396 5.78635 24.215C7.6618 26.0905 10.2055 27.1441 12.8577 27.1441ZM14.2864 15.715H18.5723L11.4291 25.0012V18.5723H7.1432L14.2864 9.279V15.715ZM7.1432 0H18.5723V2.85728H7.1432V0Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Time Tracking</h5>
                                <p className="cardText">
                                    Time tracking and employee activity tracking are very much needed
                                    today. Be it a remote workforce or a hybrid one, employers should
                                    check what employees are doing in their duty hours.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} className="rounded-0 mt-3 mb-3">
                        <Card className="cardStyle">
                            <Card.Body>
                                <div className="firstCard">
                                    <svg width="24" height="30" viewBox="0 0 24 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="svgIcon">
                                        <path d="M1 1H12.9191L22.3333 10.4142V29H1V1Z" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <mask id="path-2-inside-1_478_4" fill="white">
                                            <path d="M12.5 0V9.16667H23.3333" />
                                        </mask>
                                        <path
                                            d="M13.5 0C13.5 -0.552285 13.0523 -1 12.5 -1C11.9477 -1 11.5 -0.552285 11.5 0H13.5ZM12.5 9.16667H11.5C11.5 9.71895 11.9477 10.1667 12.5 10.1667V9.16667ZM23.3333 10.1667C23.8856 10.1667 24.3333 9.71895 24.3333 9.16667C24.3333 8.61438 23.8856 8.16667 23.3333 8.16667V10.1667ZM11.5 0V9.16667H13.5V0H11.5ZM12.5 10.1667H23.3333V8.16667H12.5V10.1667Z"
                                            fill="white" mask="url(#path-2-inside-1_478_4)" />
                                        <mask id="path-4-inside-2_478_4" fill="white">
                                            <path d="M6.66669 23.3333V18.3333V23.3333Z" />
                                        </mask>
                                        <path
                                            d="M4.66669 23.3333C4.66669 24.4379 5.56212 25.3333 6.66669 25.3333C7.77126 25.3333 8.66669 24.4379 8.66669 23.3333H4.66669ZM8.66669 18.3333C8.66669 17.2287 7.77126 16.3333 6.66669 16.3333C5.56212 16.3333 4.66669 17.2287 4.66669 18.3333H8.66669ZM8.66669 23.3333V18.3333H4.66669V23.3333H8.66669Z"
                                            fill="white" mask="url(#path-4-inside-2_478_4)" />
                                        <mask id="path-6-inside-3_478_4" fill="white">
                                            <path d="M11.6667 23.3334V16.6667V23.3334Z" />
                                        </mask>
                                        <path
                                            d="M9.66669 23.3334C9.66669 24.4379 10.5621 25.3334 11.6667 25.3334C12.7713 25.3334 13.6667 24.4379 13.6667 23.3334H9.66669ZM13.6667 16.6667C13.6667 15.5621 12.7713 14.6667 11.6667 14.6667C10.5621 14.6667 9.66669 15.5621 9.66669 16.6667H13.6667ZM13.6667 23.3334V16.6667H9.66669V23.3334H13.6667Z"
                                            fill="white" mask="url(#path-6-inside-3_478_4)" />
                                        <mask id="path-8-inside-4_478_4" fill="white">
                                            <path d="M16.6667 23.3333V15Z" />
                                        </mask>
                                        <path
                                            d="M14.6667 23.3333C14.6667 24.4379 15.5621 25.3333 16.6667 25.3333C17.7713 25.3333 18.6667 24.4379 18.6667 23.3333H14.6667ZM18.6667 15C18.6667 13.8954 17.7713 13 16.6667 13C15.5621 13 14.6667 13.8954 14.6667 15H18.6667ZM18.6667 23.3333V15H14.6667V23.3333H18.6667Z"
                                            fill="white" mask="url(#path-8-inside-4_478_4)" />
                                    </svg>
                                </div>
                                <h5 className="cardTitle text-center">Analytics and Report</h5>
                                <p className="cardText">
                                    We prefer to integrate analytics and report generation facilities
                                    into HR management software systems. Our HR management software
                                    development services concentrate on including...
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
