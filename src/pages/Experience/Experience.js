import { connect } from 'react-redux'
import { saveExperience } from '../../actions/experience'
import {
    Card, Button, Form, FormGroup, Input, Label,
    CardHeader, CardBody, Row, Col, Navbar, NavbarBrand,
    Container
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Experience({ savedExperience, error, isLoading, saveExperience }) {

    const [model, setModel] = useState({});
    const history = useHistory();

    useEffect(() => {
        if (savedExperience) {
            history.push('/dashboard');
        }
    }, [savedExperience, history]);

    const onSubmit = () => {
        saveExperience(model);
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
                                <CardHeader tag="strong">Experience Form</CardHeader>
                                <CardBody>
                                    <Form onSubmit={onSubmit}>
                                        <FormGroup row>
                                            <Label for="company" sm="4">Company</Label>
                                            <Col sm="8">
                                                <Input type="text" id="company" name="company" value={model.company} onChange={(e) => setModel({ ...model, company: e.target.value })} placeholder="Enter company" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="title" sm="4">Title</Label>
                                            <Col sm="8">
                                                <Input type="text" id="title" name="title" value={model.title} onChange={(e) => setModel({ ...model, title: e.target.value })} placeholder="Enter title" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="summary" sm="4">Summary</Label>
                                            <Col sm="8">
                                                <Input type="text" id="summary" name="summary" value={model.summary} onChange={(e) => setModel({ ...model, summary: e.target.value })} placeholder="Enter summary" />
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
        error: state.saveExperience.error,
        isLoading: state.saveExperience.loading,
        savedExperience: state.saveExperience.data
    }
}

const mapDispatchToProps = { saveExperience }

export default connect(mapStateToProps, mapDispatchToProps)(Experience)