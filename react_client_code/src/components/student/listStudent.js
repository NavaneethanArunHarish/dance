import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import ToggleButton from 'react-toggle-button';
import ReactTable from "react-table";
import createSchedulerAction from '../../actions/scheduler';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import 'react-select/dist/react-select.css';
import "react-table/react-table.css";
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import studentRegister from '../../actions/student';
import categoryById from '../../actions/category';
import moment from 'moment';
import Moment from 'react-moment';



class ListStudent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            studentDetails: [],
            selected: [],
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectedItems = this.selectedItems.bind(this);
    }

    componentWillMount() {
        this.props.studentRegister.getUser();

        localStorage.setItem('selectedCategory', '');
    }
    componentWillUpdate(props) {

    }
    componentWillReceiveProps(nextProps) {
        console.log('nextPROPS', nextProps)
        var user = nextProps.getUser.result;
        //var userPrivilage = nextProps.updateUserPrivilage.result;
        var tempdata = [];
        var student = [];
        for (var i = 0; i < user.length; i++) {
            if ((user[i].user_type === 'STUDENT') || (user[i].user_type === 'USER')) {
                tempdata.push(user[i]);
            }
        }

        this.setState({
            studentDetails: tempdata
        });
    };

    isSelected = (index) => {

        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    selectedItems(e, row) {
        var userData = this.state.studentDetails;
        var key = e.target.value;
        var isTrueSet = (key == 'true');
        for (var key = 0; key < userData.length; key++) {
            if (row.index == key) {
                userData[key].user_status = !isTrueSet;
                var data = {}
                data.user_status = userData[key].user_status;
                var passData = data;

                this.props.studentRegister.updateUserPrivilage(row, passData);
            }
        }
    }

    handleChange = (e, obj) => {
        // console.log('the hghghg ',obj)

        // localStorage.setItem('selectedCategory', JSON.stringify(data));
        browserHistory.push('/StudentRegister')
        this.props.studentRegister.getUser();
    };


    render() {

        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Students" /></center>
                            <ReactTable
                                data={this.state.studentDetails}
                                columns={[{
                                    columns: [{
                                        Header: <center>First Name</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.firstName}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Last Name</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.lastName}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Email</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.email}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Phone</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.phone}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Status</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    <ToggleButton value={row.original.user_status || false}
                                                        onClick={(e) => this.selectedItems(e, row)}
                                                    />
                                                </div>
                                            </center>
                                        )
                                    }]
                                },

                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </div>
                    </Card>
                </MuiThemeProvider>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        getUser: state.student.getUserSuccess,
        getCategoryById: state.category.getSuccess,
        updateUserPrivilage: state.student.updateUserPrevilage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        studentRegister: bindActionCreators(studentRegister, dispatch),
        categoryById: bindActionCreators(categoryById, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListStudent);