import React from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../../assets/img/logo.svg";
import ForgotPasswordInput from "../../components/ForgotPasswordInput";
import {Link, useHistory} from "react-router-dom";
import forgotPasswordImage from '../../assets/img/forgot-password.svg';

const ForgotPassword = () => {
   const history = useHistory();
   const routeToConfirmation = () => {
       history.push("/reset-password-link");
   };
    return (
        <Row className="mx-auto h100Vh">
            <Col md={4} className="bg-green px-5 d-md-block d-none">
                <Container>
                    <div className="pt-4">
                        <img id="verifyLogo" src={logo} alt="Logo"/>

                        <div className="sign-up--header__padding-top">
                            <h4 id="sign-up-header" className="font-weight-bold sign--up__header">Forgot Password ?</h4>
                        </div>

                        <Col md={12} className="mt-5 pt-5">
                            <img src={forgotPasswordImage} className="img-fluid" alt="Sign In Image"
                                 style={{maxWidth: '450px'}}/>
                        </Col>
                    </div>
                </Container>
            </Col>
            <Col md={8} className="py-4">
                <Container className="h-100">
                    <p className="text-secondary text-md-right text-center">Go back to
                        <Link to="/login">
                        <span id="signInText"
                              className="green__text cursor font-weight-medium pl-2">Sign In</span>
                        </Link>
                    </p>

                    <Col md={12} className="vertical-alignment">
                        <div className="sign-up__div mx-auto">
                            <ForgotPasswordInput routeToConfirmation={routeToConfirmation}/>
                        </div>
                    </Col>

                    <Col md={12}>
                        <div className="sign-up__div mx-auto">
                            <Row>
                                <Col md={6}>
                                    <p className="text-secondary">All rights reserved © 2019 Verified</p>
                                </Col>

                                <Col md={6}>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={5}>
                                            <div className="text-secondary d-inline-flex">
                                                <p id="privacy">Privacy</p>
                                                <p className="px-2">|</p>
                                                <p id="terms">Terms</p>
                                            </div>
                                        </Col>
                                        <Col md={5}>
                                            <p id="langSelector"
                                               className="text-secondary text-md-right">English</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Container>
            </Col>
        </Row>
    )
};

export default ForgotPassword