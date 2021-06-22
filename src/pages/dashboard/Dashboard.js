import { useState } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col, Navbar, NavbarBrand, NavbarToggler,
    Nav, NavLink, NavItem, Collapse
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

function Dashboard() {


    return (
        <div>
            <div>
                <Navbar color="muted" dark>
                    <NavbarBrand href="/dashboard" className="mr-auto d-inline-flex p-2">
                        <img src="https://www.ekrut.com/assets/global/ekrut-logo.png" width="80" height="60" />
                    </NavbarBrand>
                </Navbar>
            </div>
            <CardDeck>
                <Row className="d-flex justify-content-center">
                    <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src='https://png.pngtree.com/png-vector/20190316/ourmid/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.jpg' alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Employee</CardTitle>
                                <CardText>"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence." – Hellen Keller.</CardText>
                                <Link to="/users">
                                    <Button type="reset" color="secondary">Let's Create</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-3-580x386.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Education</CardTitle>
                                <CardText>“The difference between school and life? In school, you’re taught a lesson and then given a test. In life, you’re given a test that teaches you a lesson.” — Tom Bodett</CardText>
                                <Link to="/education">
                                    <Button type="reset" color="secondary">Let's Create</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src="https://www.pngitem.com/pimgs/m/78-788231_icon-blue-company-icon-png-transparent-png.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Experience</CardTitle>
                                <CardText>“The value of experience is not in seeing much, but in seeing wisely.” — William Osler</CardText>
                                <Link to="/experience">
                                    <Button type="reset" color="secondary">Let's Create</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </div>
    )
}

export default Dashboard;