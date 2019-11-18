import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg'

class Index extends Component {
    render() {
        return (
            <Row className="mx-auto">
                <Col md={4} className="bg-green px-5">
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
                <Col md={8}>

                </Col>
            </Row>
        )
    }
}

export default Index;
