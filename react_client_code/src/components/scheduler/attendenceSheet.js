import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import Moment from 'react-moment';
import ScheduleAction from '../../actions/scheduler';
import EventAction from '../../actions/event';
import UserAction from '../../actions/student';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ToggleButton from 'react-toggle-button';
import ReactTable from "react-table";
import FlatButton from 'material-ui/FlatButton';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import './scheduler.css';
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


class AttendenceSheet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            batchStartDate:'',
            listOfSchedule: [],
            scheduleId:'',
            listOfStudent: [],
            status:false
        }
        this.handleBatchStartDate = this.handleBatchStartDate.bind(this);
        this.selectedScheduleAllot = this.selectedScheduleAllot.bind(this);
        this.selectedItems = this.selectedItems.bind(this);
    }

    componentWillMount() {
        this.props.UserAction.getUser();
    }

    componentWillReceiveProps(nextProps) {
        //console.log(">>>>>>>>",JSON.stringify(nextProps));
        var schedule,scheduleDetails,user,listOfStudent = [];
        if (nextProps.getSchedule) {
            schedule = nextProps.getSchedule.result;
            var listOfSchedule = [];
            for(var i=0;i<schedule.length;i++) {
                var date = moment(schedule[i].schedule_date);
                var dateComponent = date.format('YYYY-MM-DD');
                let selectedEvent = localStorage.getItem('batchDate');
                if (dateComponent === selectedEvent) {
                    listOfSchedule.push(schedule[i]);
                }
            }
            this.setState({
                listOfSchedule: listOfSchedule
            })
        }
        
        if(nextProps.getUser) {
            user = nextProps.getUser.result;
        }

        if(nextProps.getScheduleDetails) {
            scheduleDetails = nextProps.getScheduleDetails.data.result;
            for(var k=0;k<user.length;k++) {
                for(var j=0;j<scheduleDetails.length;j++) {
                    if(scheduleDetails[j].schedule_id.host === user[k]._id) {//5a1278365315f50f109bb3eb
                        if (listOfStudent.indexOf(user[k]) === -1) {
                            listOfStudent.push(user[k]);
                        }
                    }
                }
            }
        }

        this.setState({
            listOfStudent: listOfStudent
        })
    };

    handleBatchStartDate(event, date) {
        var d = new Date(date);
        var n = d.toISOString();
        var date1 = moment(n);
        var dateComponent = date1.format('YYYY-MM-DD');
        this.setState({
            batchStartDate: dateComponent
        })
        localStorage.setItem('batchDate', dateComponent);
        this.props.ScheduleAction.getScheduler();
    }

    selectedScheduleAllot(obj) {
        this.setState({
            scheduleId: obj._id
        })
        var data = {
            "schedule_id":obj._id
            //"schedule_id":"5a0c1e41389574978c9e636e"
        }
        this.props.ScheduleAction.findSchedulesByScheduleId(data);
    }


    selectedItems(e,row) {
        var userData = this.state.listOfStudent;
        var key = e.target.value;
        var data;
        for(var i=0;i<userData.length;i++) {
            if (row.index == i) {
                data = userData[i];
            }
        }
        var date = new Date();
        if(key.trim() === "false") {
            var status = "PRESENT";
        } else {
            var status = "ABSENT";
        }
        var obj = {
            "attendance_status":status,
            "date":date,
            "schedule_id":this.state.scheduleId,
            "student_id":data._id
        }
        this.props.ScheduleAction.addAttendance(obj);
    };

    render() {
        return (
          <div>
                <HomeHeader />
                <AdminMenu/>
                <MuiThemeProvider>
                    <Card>
                    <div className="container">
                        <center><CardTitle title="Attendance Sheet"/></center>
                        <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                    <center>
                                    <div className="form-group" >
                                        <div className=''>
                                            <center><DatePicker hintText="Batch Start Date" mode="landscape" autoOk={true} onChange={this.handleBatchStartDate} /><br /></center>
                                        </div>
                                    </div>
                                    </center>
                                    {this.state.listOfSchedule.length === 0 ? '' : <div className="form-group">
                                            <hr />
                                            <center><CardTitle title="Schedule Details" /></center>
                                            {
                                                this.state.listOfSchedule.map((obj, index) => {
                                                    return (
                                                        <div key={index} className="col-md-3">
                                                            <Card>
                                                                <CardText><Moment format="YYYY/MM/DD">{obj.schedule_date}</Moment>
                                                                    <RadioButtonGroup name="shipSpeed" style={{ display: 'inline-flex', marginLeft: '150px' }}>
                                                                        <RadioButton
                                                                            value="reverse"
                                                                            label=""
                                                                          
                                                                            onClick={this.selectedScheduleAllot.bind(this, obj)}
                                                                        />
                                                                    </RadioButtonGroup></CardText>
                                                                <CardText>{obj.starttime} - {obj.endtime}
                                                                </CardText>
                                                            </Card><br />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        }
                                       {this.state.listOfStudent.length === 0 ? '' :  <div className="form-group" >
                                       <hr />
                                        <center><CardTitle title="Student Details" /></center>
                                        <ReactTable
                                            data={this.state.listOfStudent}
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
                                                    Header: <center>Address</center>,
                                                    Cell: row => (
                                                        <center>
                                                            <div>
                                                                {row.original.address}
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
                                            },{
                                                columns: [{
                                                    Header: <center>Status</center>,
                                                    Cell: row => (
                                                        <center>
                                                        <div>
                                                            <ToggleButton value={this.state.status || false} 
                                                            onClick={(e) => this.selectedItems(e, row)} 
                                                            onToggle={(value) => {
                                                                this.setState({
                                                                    status: !value,
                                                                })
                                                            }}
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
  
                                        </div>}
                                    </fieldset>
                                </div>
                        </CardText>
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
        getSchedule: state.scheduler.getSchedulerSuccess,
        getScheduleDetails: state.scheduler.findScheduleDetails,
        addAttendance: state.scheduler.addAttendance

    };
}

function mapDispatchToProps(dispatch) {
    return {
        ScheduleAction : bindActionCreators(ScheduleAction, dispatch),
        UserAction : bindActionCreators(UserAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendenceSheet);