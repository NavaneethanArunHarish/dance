import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import * as Actions from '../../actions/loginActions';


class ListTrainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            trainers: [],
            selected: [],
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectedItems = this.selectedItems.bind(this);
    }

    componentWillMount() {

        var token = localStorage.getItem('token');
        this.props.actions.getTrainers(token);


    }

    componentWillReceiveProps(nextProps) {
        console.log('necxxProps', nextProps)
        var allPersons = nextProps.allTrainers.data.result;
        var trainersAlone = [];
        for (var i = 0; i < allPersons.length; i++) {
            if (allPersons[i].user_type == 'TRAINER') {
                trainersAlone.push(allPersons[i]);
            }
        }
        console.log("trainersAlone  ", trainersAlone);
        this.setState({ trainers: trainersAlone });
    };

    isSelected = (index) => {

        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    handleChange = (e, obj) => {
        console.log('the hghghg ', obj)

        // localStorage.setItem('selectedCategory', JSON.stringify(data));
        browserHistory.push('/CreateCategory')
    };

    selectedItems(e, row) {
        var userData = this.state.trainers;
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
    };


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Trainer" /></center>
                            <ReactTable
                                data={this.state.trainers}
                                columns={[{
                                    columns: [{
                                        Header: <center>Name</center>,
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
    console.log("state>>>>>>>>>", state);
    return {
        allTrainers: state.login.allTrainers,
        updateUserPrivilage: state.student.updateUserPrevilage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
        studentRegister: bindActionCreators(studentRegister, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTrainer);