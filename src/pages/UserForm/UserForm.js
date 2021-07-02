import { connect } from 'react-redux'
import { saveUser } from '../../actions/users'
import {
    Card, Button, Form, FormGroup, Input, Label,
    CardHeader, CardBody, Row, Col, Navbar, NavbarBrand,
    Container
} from 'reactstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    select: {
      width: 520,
    },
  }));

function UserForm({ savedUser, user, error, 
    isLoading, saveUser, findUserById, 
    educations, experiences }) {

    const classes = useStyles();
    const [model, setModel] = useState({});
    const [schools, setSchools] = useState([]);
    const [experience, setExperience] = useState([])
    const [openEdu, setOpenEdu] = useState(false);
    const [openExp, setOpenExp] = useState(false);

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

    const handleCloseEdu = () => {
        setOpenEdu(false);
    };
    const handleCloseExp = () => {
        setOpenExp(false);
    };

    const handleOpenEdu = () => {
        setOpenEdu(true);
    };
    const handleOpenExp = () => {
        setOpenExp(true);
    };

    const onSubmit = () => {
        saveUser(model);
        setModel({})
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
                                        <FormGroup row >
                                            <Label for="education" sm="4">Education</Label>
                                            <Col sm="8">
                                                <Select
                                                    labelId="education"
                                                    id="education"
                                                    open={openEdu}
                                                    onClose={handleCloseEdu}
                                                    onOpen={handleOpenEdu}
                                                    value={model.user_educations}
                                                    className={classes.select}
                                                    onChange={(e)=> setModel({ ...model, user_educations: e.target.value })}
                                                >
                                                {
                                                    !isLoading ?
                                                    educations.map((edu, i) => {
                                                        return (
                                                            <MenuItem value={edu.id} key={i}>{edu.school}</MenuItem>
                                                        )
                                                    })
                                                    : <div>Loading</div>
                                                }
                                                </Select>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="experience" sm="4">Experience</Label>
                                            <Col sm="8">
                                                <Select
                                                    labelId="experience"
                                                    id="experience"
                                                    open={openExp}
                                                    onClose={handleCloseExp}
                                                    onOpen={handleOpenExp}
                                                    value={model.user_experiences}
                                                    onChange={(e)=> setModel({ ...model, user_experiences: e.target.value })}
                                                    className={classes.select}
                                                >
                                                {
                                                    !isLoading ?
                                                    experiences.map((exp, i) => {
                                                        return (
                                                            <MenuItem value={exp.id} key={i}>{exp.company}</MenuItem>
                                                        )
                                                    })
                                                    : <div>Loading</div>
                                                }
                                                </Select>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col sm={{ size: 8, offset: 4 }}>
                                                <Button type="submit" color="success" className="shadow" >
                                                    Submit
                                                </Button>
                                                <Link to="/users">
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
        savedUser: state.saveUser.data,
        educations: state.findAllEducation.data || [],
        experiences: state.findAllExperience.data || []
    }
}

const mapDispatchToProps = { saveUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)