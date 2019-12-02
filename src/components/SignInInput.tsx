import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import ValidationUtil from "../utilities/validation-util";

export class SignInInput extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordVisibility: false
        }
    }

    componentDidMount(): void {
        this.setState({email: '', password: '', emailError: true,});
    }

    togglePassword = () => {
        this.setState({passwordVisibility: !this.state.passwordVisibility})
    };

    onChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        if(name === 'email') {
            this.setState({emailError: ValidationUtil.validateEmail(value)});
        }
    };

    onSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Col md={12} className="mb-2">
                            <TextField
                                id="email"
                                label="Email Address"
                                margin="normal"
                                variant="outlined"
                                className="w-100"
                                name="email"
                                required
                                onChange={e => (
                                    this.onChange(e)
                                )}
                            />

                            {!this.state.emailError && <p id="email-error"
                                                          className="text-danger smaller-text font-weight-bold d-flex">
                                <span className="arrow-up my-auto mr-1"></span>Please enter a valid email
                                address format</p>}
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
                                    required
                                    onChange={e => (
                                        this.onChange(e)
                                    )}
                                />
                                <i onClick={this.togglePassword}
                                   className={`cursor passwordIcon fa fa-${this.state.passwordVisibility ? 'eye' : 'eye-slash'}`}></i>
                            </div>
                        </Col>

                        <Col md={12}>
                            <p id="forgotPassword" className="green__text cursor font-weight-medium pt-3">Forgot
                                password?</p>
                        </Col>

                        <Col md={12}>
                            <button id="signIn" className="btn btn-primary w-100 mt-4">Sign in</button>
                        </Col>
                    </Row>
                </form>
            </Fragment>
        );
    }
}