import React, {Component, Fragment} from "react";
import {Col, Row} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ValidationUtil from "../utilities/validation-util";


class SignUpInput extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            text: '',
            companyName: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phoneNumber: '',
            firstNameError: null,
            lastNameError: null,
            emailError: false,
            phoneNumberError: null,
            companyNameError: null,
            passwordError: null,
            passwordCount: 0,
            passwordVisibility: false
        };
    }

    togglePassword = () => {
        this.setState({passwordVisibility: !this.state.passwordVisibility});
    };


    onSubmit = (e: any) => {
        e.preventDefault();
    };

    onChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        if (name === 'firstName') {
            this.setState({firstNameError: ValidationUtil.validateName(value)});
        } else if (name === 'lastName') {
            this.setState({lastNameError: ValidationUtil.validateName(value)});
        } else if (name === 'email') {
            this.setState({emailError: ValidationUtil.validateEmail(value)});
        } else if (name === 'phoneNumber') {
            this.setState({phoneNumberError: ValidationUtil.validatePhone(value)});
        } else if (name === 'companyName') {
            this.setState({companyNameError: ValidationUtil.validateCompanyName(value)})
        } else if (name === 'password') {
            let passwordValidation = ValidationUtil.validatePassword(value);
            this.setState({passwordCount: passwordValidation});
        }
    };

    componentDidMount(): void {
        this.setState({firstNameError: ''});
        this.setState({lastNameError: ''});
        this.setState({emailError: true});
        this.setState({phoneNumberError: ''});
        this.setState({companyNameError: ''});
        this.setState({passwordError: ''})
    }

    render() {
        return (
            <Fragment>
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
                                required
                                onChange={e => (
                                    this.onChange(e)
                                )}
                            />
                            {this.state.firstNameError !== '' && <p id="firstName-error"
                                                                    className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>{this.state.firstNameError}
                            </p>}

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
                            {this.state.lastNameError !== '' && <p id="firstName-error"
                                                                   className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>{this.state.lastNameError}
                            </p>}
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
                            {!this.state.emailError && <p id="email-error"
                                                          className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>Please enter a valid email
                                address format</p>}

                        </Col>

                        <Col xs={4} md={3} className="pr-0">
                            <div className="flag-div">
                                <div className="flag-div__Selected d-inline-flex w-100">
                                    <i className="flag al mr-2"></i> <p>+234</p>
                                </div>

                                <div className="flag-div__dropdown d-none">

                                </div>
                            </div>
                        </Col>

                        <Col xs={8} md={9}>
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
                            {this.state.phoneNumberError !== '' && <p id="firstName-error"
                                                                      className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>{this.state.phoneNumberError}
                            </p>}

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
                            {this.state.companyNameError !== '' && <p id="firstName-error"
                                                                      className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>{this.state.companyNameError}
                            </p>}

                        </Col>

                        <Col md={12}>
                            <div className="position-relative">
                                <TextField
                                    id="password"
                                    label="Password"
                                    margin="normal"
                                    type={`${this.state.passwordVisibility ? 'text' : 'password'}`}
                                    variant="outlined"
                                    className="w-100"
                                    name="password"
                                    onChange={e => (
                                        this.onChange(e)
                                    )}
                                />
                                <i onClick={this.togglePassword}
                                   className={`passwordIcon fa fa-${this.state.passwordVisibility ? 'eye' : 'eye-slash'}`}></i>
                            </div>

                            {this.state.passwordCount > 0 &&
                            <div style={{display: 'inline-flex'}} className="d-inline-flex">
                                <div id="first__level"
                                     className={`password-strength__div mr-3 ${this.state.passwordCount > 20 ? 'password-strength__strength' : 'password-strength__weak'}`}></div>
                                <div id="second__level"
                                     className={`password-strength__div mr-3 ${this.state.passwordCount >= 40 ? 'password-strength__strength' : ''}`}></div>
                                <div id="third__level"
                                     className={`password-strength__div mr-3 ${this.state.passwordCount >= 60 ? 'password-strength__strength' : ''}`}></div>
                                <div id="fourth__level"
                                     className={`password-strength__div mr-3 ${this.state.passwordCount >= 80 ? 'password-strength__strength' : ''}`}></div>
                                <div id="fifth__level"
                                     className={`password-strength__div mr-3 ${this.state.passwordCount == 100 ? 'password-strength__strength' : ''}`}></div>
                            </div>}


                            {(this.state.password.length > 0 && this.state.password.length < 8) &&
                            <p id="password-error"
                               className="text-danger smaller-text font-weight-bold d-flex"><span
                                className="arrow-up my-auto mr-1"></span>The password field must be at least 8
                                characters</p>}

                        </Col>

                        <div className="d-inline-flex my-3">
                            <Checkbox/>
                            <p id="termsAndCondition-check" className="my-auto" style={{fontSize: '15px'}}>I
                                have read and agreed to
                                the <span className="green__text">terms of service</span> and <span
                                    className="green__text">conditions</span> of
                                Verified.ng</p>
                        </div>
                        <Col sm={12}>
                            <button id="signUp-button" className="btn btn-primary w-100">Continue</button>
                        </Col>
                    </Row>
                </form>
            </Fragment>
        );
    }
}

export default SignUpInput;