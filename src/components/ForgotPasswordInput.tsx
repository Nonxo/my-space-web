import React, {Component, Fragment} from 'react';
import {TextField} from "@material-ui/core";
import {Col} from "react-bootstrap";
import ValidationUtil from "../utilities/validation-util";

export class ForgotPasswordInput extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            emailError: false,
        };
    };

    componentDidMount(): void {
        this.setState({email: '', emailError: true})
    }

    onChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        if(name === 'email') {
            this.setState({emailError: ValidationUtil.validateEmail(value)});
        }
    };

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.routeToConfirmation()
    };

    render() {
        return (
            <Fragment>
                <h4 id="resetPwdText" className="sign-up__h4 font-weight-semi-bold pb-4">Send a link to your email to
                    reset password</h4>

                <form onSubmit={this.onSubmit}>
                    <Col md={12} className="mb-2 px-0 pb-4">
                        <TextField
                            id="email"
                            label="Email Address"
                            margin="normal"
                            variant="outlined"
                            className="w-100"
                            name="email"
                            required
                            onChange={ e => (
                                this.onChange(e)
                            )}
                        />

                        {!this.state.emailError && <p id="email-error"
                                                      className="text-danger smaller-text font-weight-bold d-flex">
                            <span className="arrow-up my-auto mr-1"></span>Please enter a valid email
                            address format</p>}
                    </Col>

                    <button className="btn btn-primary w-100">Send Reset Request</button>
                </form>
            </Fragment>
        );
    }
}

export default ForgotPasswordInput;