import Select from 'react-select';
import { Container, Row, Col } from 'react-grid-system';
import React from 'react';
import axios from 'axios';
import ToggleButton from 'react-toggle-button'
import { connect } from 'react-redux';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import ReactTable from "react-table";
import { Footer } from '../footer';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import { HomeHeader } from '../homeHeader';

import 'react-select/dist/react-select.css';
import "react-table/react-table.css";
import {BaseUrl} from '../../_constants/baseurl';

import { DeleteModal } from '../deletemodal';
import Modal from 'react-modal';

class RoleManagement extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            allUser:[],
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
              ]
         }
        this.getUser=this.getUser.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.selectType=this.selectType.bind(this);
    }

    componentWillMount() {
        this.getUser();
    }

    getUser() {
        axios({
            method: 'get',
            url: BaseUrl.RestUrl + 'user/getall_user'

        }).then(response => {
            if (response) {
                var data = response.data;
                }
                   this.setState({
                    allUser: data
                })
            })
        }

    handleChange(e,row) {
        var userData = this.state.allUser;
        var key = e.target.value
        var isTrueSet = (key == 'true');
        Object.keys(userData).forEach(function (key) {
            console.log("---r---",row.index);
            console.log("---k---",key);

                  if (row.index == key) {
                    userData[key].userStatus = !isTrueSet;
                    console.log("--", userData[key].userStatus)
                    var data = {}
                    data.userStatus = userData[key].userStatus;
                    console.log("Data is", data)
                    var passData = data;
            axios({
                method: 'put',
                url: BaseUrl.RestUrl+'user/changeUserPrivilage',
                data:{
                    userid:row.original._id,
                    userStatus:passData.userStatus
                }
            }).then(response => {
               
                if (response) {
                    console.log('************ASHWIN*****************',response)
                }
            })
        }
    })
    this.setState({
        allUser:userData
    })
}

    selectType(val) {
            var data = this.state.event;
            data.host._id = val.value;
    
            this.setState({
                event: data
            })
    }

    

    render() {
       
        return (
            <div>
            <Header />
            <div className="bg-set-color">
                  <div style={{ float: 'left' }}>
                        <SideBar />
                    </div>
                    <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title"><i className="zmdi zmdi-graduation-cap"></i> Manage Roles</h3>
                            </div>
                {/* <Container style={{ height: '-webkit-fill-available' }}> */}
                    <Row>
                        <Col sm={12}>
                        <ReactTable
                                data={this.state.allUser}
                                columns={[{
                                    columns: [{
                                        Header: 'Name',
                                        accessor: 'name'
                                    }]
                                }, {
                                    columns: [{
                                        Header: 'Email',
                                        accessor: 'email'
                                    }]
                                }, {
                                    columns: [{
                                        Header: 'Phone',
                                        accessor: 'phone'
                                    }]
                                }, {
                                    columns: [{
                                        Header: 'Type Of User',
                                        accessor: 'typeOfUser'
                                    }]
                                }, {
                                    columns: [{
                                        Header: 'Status',
                                        Cell: row => (
                                            
                                            <div>
                                                <ToggleButton value={row.original.userStatus || false} 
                                                onClick={(e) => this.handleChange(e, row)} 
                                                />
                                            </div>
                                        )
                                    }]
                                },
                                {
                                    columns: [{
                                        Header: 'Change Type',
                                        accessor:"typeOfUser",
                                        Cell: row => (<div>
                                            <select value={row.original.typeOfUser} name="typeOfUser">
                                                <option value="Open">ADMIN</option>
                                                <option value="Close">TRAINER</option>
                                            </select>
                                        </div>)
                                    }]
                                },
                                
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </Col>
                        
                    </Row>
                   
                {/* </Container> */}

                {/* <Footer /> */}

            </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
    };
}

export default connect(mapStateToProps)(RoleManagement);