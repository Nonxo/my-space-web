import React, {Component} from "react";
import {Dropdown} from "react-bootstrap";
import notificationImg from '../assets/img/notification.svg'
import navProfileImg from '../assets/img/navProfileImg.svg';

export class NavBar extends Component {

    companyTitle = 'Seamfix';
    userId = '18736373';

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white px-5">
                <h4 className="nav-title font-weight-medium">Dashboard</h4>

                <div className="ml-auto d-inline-flex">
                    <div className="my-auto">
                        <img src={notificationImg} alt="notification icon" style={{maxWidth: '24px'}}/>
                    </div>

                    <div className="mx-4 bar-seperation"></div>

                    <div className="my-auto">
                        <h6 className="nav-title mb-0">{this.companyTitle}</h6>
                        <p className="small text-secondary mb-0">User id: {this.userId}</p>
                    </div>

                    <div className="mx-4 bar-seperation"></div>

                    <Dropdown className="navMenu">
                        <Dropdown.Toggle id="dropdown-basic">
                            <img src={navProfileImg} alt="Profile Image" style={{maxWidth: '40px'}}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Help</Dropdown.Item>
                            <Dropdown.Item>Account settings</Dropdown.Item>
                            <Dropdown.Item>Switch company</Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        );
    }
}

export default NavBar;