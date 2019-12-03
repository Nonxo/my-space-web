import React from "react";
import logo from '../../assets/img/logo.svg'
import mailIcon from '../../assets/img/mailIcon.svg'
import {Link} from 'react-router-dom';

const ResetPasswordLink = () => {
    return (
        <div className="bg-light__green h100Vh d-flex">
            <div className="text-center align-self-center w-100">
                <div>
                    <img className="img-fluid" src={logo} alt="Logo" style={{maxWidth: '160px'}}/>
                </div>

                <div className="py-4">
                    <img className="img-fluid" src={mailIcon} alt="Mail Icon" style={{maxWidth: '98px'}}/>
                </div>

                <h3 className="font-weight-bold pb-2">We Sent You a Mail!</h3>

                <p className="mb-0">A mail was sent to <span className="font-weight-bold"
                                                             style={{color: '#005F22'}}>Ololade.jesutofunmi@emailaddress.com</span>
                </p>
                <p className="mb-0"> Click the link in the email to reset your password.</p>
                <p> If you can’t find the email sent, please check your junk, spam or social folders.</p>

                <div className="mt-5 pt-5">
                    <p className="mb-1">Not your email?</p>

                    <Link to="/forgot-password">
                        <p className="green__text cursor">Enter different mail</p>
                    </Link>
                </div>

            </div>
        </div>
    )
};

export default ResetPasswordLink;