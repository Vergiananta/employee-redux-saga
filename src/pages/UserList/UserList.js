import { connect } from "react-redux"
import { findAllUser, removeUserById } from '../../actions/users'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, Row, Col, Navbar, NavbarBrand, NavbarToggler,
    Nav, Spinner, Table, CardHeader
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserList({ findAllUser, removeUserById, isRemoved, users, isLoading }) {

    const onDelete = (id) => {
        removeUserById(id);
    };

    const onReload = () => {
        findAllUser();
    };

    useEffect(onReload, []);

    useEffect(() => {
        if (isRemoved) {
            onReload();
        }
    }, [isRemoved]);

    const generatedTableRows = () => {
        let rows = <tr>
            <td colSpan="2" className="text-center"><Spinner color="primary" /></td>
        </tr>
        if (!isLoading) {
            rows = users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.fullname}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>
                            <Link to={`/users/form/${user.id}`}>
                                <Button type="button" color="warning" >Edit</Button>
                            </Link>
                        </td>
                        <td>
                            <Button type="button" color="danger" onClick={onDelete}> Delete</Button>
                        </td>
                    </tr>
                )
            })
        }
        return rows;
    }

    return (
        <div>
            <div>
                <Navbar color="muted" dark>
                    <NavbarBrand href="/dashboard" className="mr-auto d-inline-flex p-2">
                        <img src="https://www.ekrut.com/assets/global/ekrut-logo.png" width="80" height="60" />
                    </NavbarBrand>
                </Navbar>
                <Card className="shadow">
                    <CardHeader tag='strong'> Employee
                        <Link to='/users/form' className="float-right">
                            <Button type="button" color="primary">Create Employee </Button>
                        </Link>
                    </CardHeader>
                    <Table responsive striped hover className='m-0'>
                        <thead>
                            <tr>
                                <th width="5%">#</th>
                                <th>Fullname</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th colSpan="3" width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>{generatedTableRows()}</tbody>
                    </Table>
                </Card>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        error: state.findAllUsers.error || state.removeUserById.error,
        isLoading: state.findAllUsers.loading || state.removeUserById.loading,
        isRemoved: state.removeUserById.data,
        users: state.findAllUsers.data || []
    }
}

const mapDispatchToProps = { findAllUser, removeUserById }

export default connect(mapStateToProps, mapDispatchToProps)(UserList)