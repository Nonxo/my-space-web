import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg'
import googleLogo from '../../assets/img/google.svg'
import {TextField} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ValidationUtil from "../../utilities/validation-util";

class Index extends Component {

    state = {
        text: '',
        companyName: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        phoneNumberError: false,
        companyNameError: false
    };

    onSubmit = (e: any) => {
        e.preventDefault();
    };

    onChange = (e: any) => {
        const { name, value} = e.target;
        this.setState({[name]: value});
        if(name === 'firstName') {
            this.setState({ firstNameError: ValidationUtil.validateName(value)});
        } else if(name === 'lastName') {
            this.setState({lastNameError: ValidationUtil.validateName(value)});
        } else if(name === 'email') {
            this.setState({emailError: ValidationUtil.validateEmail(value)});
        } else if (name === 'phoneNumber') {
            this.setState({phoneNumberError: ValidationUtil.validatePhone(value)});
        } else if (name === 'companyName') {
            this.setState({companyNameError: ValidationUtil.validateCompanyName(value)})
        }
    };

    componentDidMount(): void {
        this.setState({firstNameError: true});
        this.setState({lastNameError: true});
        this.setState({emailError: true});
        this.setState({phoneNumberError: true});
        this.setState({companyNameError: true})
    }

    render() {
        return (
            <Row className="mx-auto h100Vh">
                <Col md={4} className="bg-green px-5 d-md-block d-none">
                    <Container>
                        <div className="pt-4">
                            <img id="verifyLogo" src={logo} alt="Logo"/>

                            <div className="sign-up--header__padding-top">
                                <h4 id="sign-up-header" className="font-weight-bold sign--up__header">Start verifying identities with Verified.ng</h4>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={8} className="py-4">
                    <Container>
                        <p className="text-secondary text-md-right text-center">Already have an account? <span id="signInText"
                            className="green__text cursor font-weight-medium">Sign In</span></p>

                        <div className="sign-up__div mx-auto mt-5">
                            <h4 id="signUp-text" className="sign-up__h4 font-weight-semi-bold pb-4">Create your verified account</h4>
                            <button id="signUp-with-google" className="btn btn-google px-3"><img style={{maxWidth: '22px'}} className="float-left" src={googleLogo}
                                                                         alt="Google Logo"/> <span
                                className="font-weight-semi-bold">Sign up with Google</span></button>

                            <h6 style={{color: '#859BBCF5'}} className="h-line-between-words mt-4 mb-3">OR</h6>

                            <form onSubmit={this.onSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <TextField
                                            id="firstName"
                                            label="First Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                            name="firstName"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}
                                        />
                                        {!this.state.firstNameError && <p id="firstName-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>The First Name Field Must Be At Least 3 Characters</p>}

                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="lastName"
                                            label="Last Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                            name="lastName"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}
                                        />
                                        {!this.state.lastNameError && <p id="LastName-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>The Last Name Must Be At Least 3 Characters</p>}

                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="email"
                                            label="Email Address"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                            name="email"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}

                                        />
                                        {!this.state.emailError && <p id="email-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>The Email Field Must Contain An "@" Symbol</p>}

                                    </Col>

                                    <Col md={3} className="pr-0">
                                        <div className="flag-div">
                                            <div className="flag-div__Selected d-inline-flex w-100">
                                                <i className="flag al mr-2"></i> <p>+234</p>
                                            </div>

                                            <div className="flag-div__dropdown d-none">

                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={9}>
                                        <TextField
                                            id="phoneNumber"
                                            label="Phone Number"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                            name="phoneNumber"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}
                                        />
                                        { !this.state.phoneNumberError && <p id="phone-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>Invalid Phone Number Entered</p> }

                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="companyName"
                                            label="Company Name"
                                            margin="normal"
                                            variant="outlined"
                                            className="w-100"
                                            name="companyName"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}
                                        />
                                        {!this.state.companyNameError && <p id="companyName-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>The Company Name Field Must Be At Lease 3 Characters</p>}

                                    </Col>

                                    <Col md={12}>
                                        <TextField
                                            id="password"
                                            label="Password"
                                            margin="normal"
                                            type="password"
                                            variant="outlined"
                                            className="w-100"
                                            name="password"
                                            onChange={e => (
                                                this.onChange(e)
                                            )}
                                        />
                                        <div className="d-inline-flex">
                                            <div id="first__level" className="password-strength__div mr-3"></div>
                                            <div id="second__level" className="password-strength__div mr-3"></div>
                                            <div id="third__level" className="password-strength__div mr-3"></div>
                                            <div id="fourth__level" className="password-strength__div mr-3"></div>
                                            <div id="fifth__level" className="password-strength__div mr-3"></div>
                                            <div id="sixth__level" className="password-strength__div"></div>
                                        </div>

                                        {(this.state.password.length > 0 && this.state.password.length < 8) && <p id="password-error" className="text-danger smaller-text font-weight-bold d-flex"><span className="arrow-up my-auto mr-1"></span>Your password must contain an alphanumeric and a number and at least 6 characters</p>}

                                    </Col>

                                    <div className="d-inline-flex my-3">
                                        <Checkbox/>
                                        <p id="termsAndCondition-check" className="my-auto" style={{fontSize: '15px'}}>I have read and agreed to
                                            the <span className="green__text">terms of service</span> and <span
                                                className="green__text">conditions</span> of
                                            Verified.ng</p>
                                    </div>
                                    <Col sm={12}>
                                        <button id="signUp-button" className="btn btn-primary w-100">Continue</button>
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
                                                <p id="privacy">Privacy</p>
                                                <p className="px-2">|</p>
                                                <p id="terms">Terms</p>
                                            </div>
                                        </Col>
                                        <Col md={5}>
                                            <p id="langSelector" className="text-secondary text-md-right">English</p>
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
