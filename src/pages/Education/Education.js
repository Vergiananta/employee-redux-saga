import { connect } from 'react-redux'
import { saveEducation } from '../../actions/education'
import {
    Card, Button, Form, FormGroup, Input, Label,
    CardHeader, CardBody, Row, Col, Navbar, NavbarBrand, 
    Container
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Education({ error, isLoading, savedEducation, saveEducation }) {
    
  const [model, setModel] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (savedEducation) {
      history.push('/dashboard');
    }
  }, [savedEducation, history]);

  const onSubmit = () => {
    saveEducation(model);
  };

    return (
        <Container fluid error={error}>
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
                        <CardHeader tag="strong">Education Form</CardHeader>
                        <CardBody>
                            <Form onSubmit={onSubmit}>
                                <FormGroup row>
                                    <Label for="school" sm="4">University</Label>
                                    <Col sm="8">
                                        <Input type="text" id="school" name="school" value={model.school} onChange={(e) => setModel({...model, school: e.target.value})} placeholder="Enter school" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="major" sm="4">Major</Label>    
                                    <Col sm="8">
                                        <Input type="text" id="major" name="major" value={model.major} onChange={(e) => setModel({...model, major: e.target.value})} placeholder="Enter major" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="startDate" sm="4">Release Year</Label>    
                                    <Col sm="8">
                                        <Input type="text" id="startDate" name="startDate" value={model.start_date} onChange={(e) => setModel({...model, start_date: e.target.value})} placeholder="Enter start_date" />
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
        </Container>

    )
}


const mapStateToProps = (state) => {
    return {
        error: state.saveEducation.error,
        isLoading: state.saveEducation.loading,
        savedEducation: state.saveEducation.data
    }
}

const mapDispatchToProps = { saveEducation }

export default connect(mapStateToProps, mapDispatchToProps)(Education)