import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg'
import googleLogo from '../../assets/img/google.svg'
import {TextField} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

class Index extends Component {
    render() {
        return (
            <Row className="mx-auto">
                <Col md={4} className="bg-green px-5 d-md-block d-none">
                    <Container>
                        <div className="pt-4">
                            <img src={logo} alt="Logo"/>

                            <div className="sign-up--header__padding-top">
                                <h4 className="font-weight-bold">Start verifying identities</h4>
                                <h4 className="font-weight-bold">with Verified.ng</h4>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={8} className="py-4">
                    <Container>
                        <p className="text-secondary text-md-right text-center">Already have an account? <span
                            className="green__text cursor font-weight-medium">Sign In</span></p>

                        <div className="sign-up__div mx-auto mt-5">
                            <h4 className="sign-up__h4 font-weight-semi-bold pb-4">Create your verified account</h4>
                            <button className="btn btn-google px-3"><img className="float-left" src={googleLogo}
                                                                         alt="Google Logo"/> <span
                                className="font-weight-semi-bold">Sign up with Google</span></button>

                            <form>
                                <Row>
                                    <Col md={6}>
                                        <TextField
                                            id="firstName"
                                            label="First Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="lastName"
                                            label="Last Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="email"
                                            label="Email Address"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                    </Col>

                                    <Col md={3}>
                                    </Col>

                                    <Col md={9}>
                                        <TextField
                                            id="phoneNumber"
                                            label="Phone Number"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="companyName"
                                            label="Company Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="password"
                                            label="Password"
                                            margin="normal"
                                            type="password"
                                            variant="outlined"
                                            className="w-100"
                                        />
                                        <div className="d-inline-flex">
                                            <div id="first__level" className="password-strength__div mr-3"></div>
                                            <div id="second__level" className="password-strength__div mr-3"></div>
                                            <div id="third__level" className="password-strength__div mr-3"></div>
                                            <div id="fourth__level" className="password-strength__div mr-3"></div>
                                            <div id="fifth__level" className="password-strength__div mr-3"></div>
                                            <div id="sixth__level" className="password-strength__div"></div>
                                        </div>
                                        <p className="text-danger small font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>Your password must contain an alphanumeric and a number and at least 6 characters</p>
                                    </Col>

                                    <div className="d-inline-flex my-3">
                                        <Checkbox/>
                                        <p className="my-auto" style={{fontSize: '15px'}}>I have read and agreed to
                                            the <span className="green__text">terms of service</span> and <span
                                                className="green__text">conditions</span> of
                                            Verified.ng</p>
                                    </div>
                                    <Col sm={12}>
                                        <button className="btn btn-primary w-100">Continue</button>
                                    </Col>
                                </Row>
                            </form>
                        </div>

                        <div className="sign-up__div mx-auto mt-5">
                            <Row>
                                <Col md={6}>
                                    <p className="text-secondary">All rights reserved © 2019 Verified</p>
                                </Col>

                                <Col md={6}>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={5}>
                                            <div className="text-secondary d-inline-flex">
                                                <p>Privacy</p>
                                                <p className="px-2">|</p>
                                                <p>Terms</p>
                                            </div>
                                        </Col>
                                        <Col md={5}>
                                            <p className="text-secondary text-md-right">English</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Col>
            </Row>
        )
    }
}

export default Index;
