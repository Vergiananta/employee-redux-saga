import { connect } from 'react-redux'
import { saveUser } from '../../actions/users'
import {
    Card, Button, Form, FormGroup, Input, Label,
    CardHeader, CardBody, Row, Col, Navbar, NavbarBrand,
    Container
} from 'reactstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserForm({ savedUser, user, error, isLoading, saveUser, findUserById }) {

    const [model, setModel] = useState({});
    const history = useHistory();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            findUserById(id);
        }
    }, [id, findUserById]);

    useEffect(() => {
        if (id && user) {
            setModel({ ...user });
        }
    }, [user]);

    useEffect(() => {
        if (savedUser) {
            history.push('/users');
        }
    }, [savedUser, history]);

    const onSubmit = () => {
        saveUser(model);
    };

    return (
        <div>
            <div>
                <Navbar color="muted" dark>
                    <NavbarBrand href="/dashboard" className="mr-auto d-inline-flex p-2">
                        <img src="https://www.ekrut.com/assets/global/ekrut-logo.png" width="80" height="60" />
                    </NavbarBrand>
                </Navbar>
            </div>
            {
                !isLoading ?
                    <Row>
                        <Col sm="12">
                            <Card className="shadow">
                                <CardHeader tag="strong">Employee Form</CardHeader>
                                <CardBody>
                                    <Form onSubmit={onSubmit}>
                                        <FormGroup row>
                                            <Label for="fullName" sm="4">Fullname</Label>
                                            <Col sm="8">
                                                <Input type="text" id="fullName" name="fullName" value={model.fullname} onChange={(e) => setModel({ ...model, fullname: e.target.value })} placeholder="Enter fullname" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="phone" sm="4">Phone</Label>
                                            <Col sm="8">
                                                <Input type="text" id="phone" name="phone" value={model.phone} onChange={(e) => setModel({ ...model, phone: e.target.value })} placeholder="Enter phone" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm="4">Email</Label>
                                            <Col sm="8">
                                                <Input type="text" id="email" name="email" value={model.email} onChange={(e) => setModel({ ...model, email: e.target.value })} placeholder="Enter email" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="address" sm="4">Address</Label>
                                            <Col sm="8">
                                                <Input type="text" id="address" name="address" value={model.address} onChange={(e) => setModel({ ...model, address: e.target.value })} placeholder="Enter address" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col sm={{ size: 8, offset: 4 }}>
                                                <Button type="submit" color="success" className="shadow" >
                                                    Submit
                                                </Button>
                                                <Link to="/dashboard">
                                                    <Button type="reset" color="secondary">Return</Button>
                                                </Link>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    : <div>Loading</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findUserById.error || state.saveUser.error,
        isLoading: state.findUserById.loading || state.saveUser.loading,
        user: state.findUserById.data,
        savedUser: state.saveUser.data
    }
}

const mapDispatchToProps = { saveUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)