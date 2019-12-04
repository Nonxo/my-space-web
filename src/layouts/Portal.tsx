import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Dashboard from "../views/portal/Dashboard/Dashboard";
import SideNav from "../components/SideNav";
import NavBar from "../components/NavBar";

const Portal = () => {
    return (
        <div className="d-flex">
            <SideNav/>

            <div id="content-wrapper" className="d-flex flex-column h100Vh">
                <div id="content">
                    <NavBar/>
                    <div className="container-fluid py-3 px-5">
                        <Switch>
                            <Redirect from="/app" to="/app/dashboard" exact/>
                            <Route path="/app/dashboard" component={Dashboard} exact/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portal;