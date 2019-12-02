import React from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg';
import googleLogo from '../../assets/img/google.svg'
import {SignInInput} from "../../components/SignInInput";



const SignIn = () => {
        return (
            <Row className="mx-auto h100Vh">
                <Col md={4} className="bg-green px-5 d-md-block d-none">
                    <Container>
                        <div className="pt-4">
                            <img id="verifyLogo" src={logo} alt="Logo"/>

                            <div className="sign-up--header__padding-top">
                                <h4 id="sign-up-header" className="font-weight-bold sign--up__header">Start verifying
                                    identities with Verified.ng</h4>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={8} className="py-4">
                    <Container className="h-100">
                        <p className="text-secondary text-md-right text-center">Don't have an account? <span
                            id="signInText"
                            className="green__text cursor font-weight-medium">Register</span></p>

                        <Col md={12} className="vertical-alignment">
                            <div className="sign-up__div mx-auto mt-5">
                                <h4 id="signUp-text" className="sign-up__h4 font-weight-semi-bold pb-4">Sign in to
                                    continue to your account.</h4>
                                <button id="signUp-with-google" className="btn btn-google px-3"><img
                                    style={{maxWidth: '22px'}} className="float-left" src={googleLogo}
                                    alt="Google Logo"/> <span
                                    className="font-weight-semi-bold">Sign up with Google</span></button>

                                <h6 style={{color: '#859BBCF5'}} className="h-line-between-words mt-4 mb-3">OR</h6>

                                <SignInInput/>
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

export default SignIn
