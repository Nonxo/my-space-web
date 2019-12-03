import React from 'react';
import {Row, Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg'
import googleLogo from '../../assets/img/google.svg'
import SignUpInput from "../../components/SignUpInput";
import signInImage from "../../assets/img/auth-img.svg";
import {Link} from 'react-router-dom';


const Index = () => {
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

                        <Col md={12} className="mt-5 pt-5">
                            <img src={signInImage} className="img-fluid" alt="Sign In Image"
                                 style={{maxWidth: '325px'}}/>
                        </Col>
                    </div>
                </Container>
            </Col>
            <Col md={8} className="py-4">
                <Container className="h-100">
                    <p className="text-secondary text-md-right text-center">Already have an account?
                        <Link to="/login">
                            <span
                                id="signInText"
                                className="green__text cursor font-weight-medium">Sign In</span>
                        </Link>
                    </p>

                    <Col md={12} className="vertical-alignment">
                        <div className="sign-up__div mx-auto">
                            <h4 id="signUp-text" className="sign-up__h4 font-weight-semi-bold pb-4">Sign in to
                                continue to your account.</h4>
                            <button id="signUp-with-google" className="btn btn-google px-3"><img
                                style={{maxWidth: '22px'}} className="float-left" src={googleLogo}
                                alt="Google Logo"/> <span
                                className="font-weight-semi-bold">Sign up with Google</span></button>

                            <h6 style={{color: '#859BBCF5'}} className="h-line-between-words mt-4 mb-3">OR</h6>

                            <SignUpInput/>
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

export default Index;
