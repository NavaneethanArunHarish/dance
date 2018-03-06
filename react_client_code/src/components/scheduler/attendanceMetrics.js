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
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { DateRange,defaultRanges } from 'react-date-range';
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


class AttendanceMetrics extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfSchedule: [],
            listOfAttendance: [],
            attendanceDetails: []
        }
        this.selectedScheduleAllot = this.selectedScheduleAllot.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.ScheduleAction.findAllAttendance();
    }

    componentWillReceiveProps(nextProps) {
        //console.log(">>>>>>>>",JSON.stringify(nextProps));
        if (nextProps.getSchedule) {
            var listOfSchedule = nextProps.getSchedule.result;
            this.setState({
                listOfSchedule: listOfSchedule
            })
        }

        if(nextProps.getAttendance) {
            var listOfAttendance = nextProps.getAttendance.result;
            this.setState({
                listOfAttendance: listOfAttendance
            })
        }
        
    };

    handleSelect(date){
        var startDate = moment( date.startDate._d).format('YYYY-MM-DD');
        var endDate = moment( date.endDate._d).format('YYYY-MM-DD');
        var  start = moment(startDate, 'YYYY-MM-DD').toDate(); 
        var  end = moment(endDate, 'YYYY-MM-DD').toDate(); 
        var data = {
            "startDate":start,
            "endDate":end
        }
        this.props.ScheduleAction.findSchedulesByDate(data);
    }

    selectedScheduleAllot(obj) {
        var listOfAttendance = [];
        for(var i=0;i<this.state.listOfAttendance.length;i++) {
            if(this.state.listOfAttendance[i].schedule_id === obj._id) {
                var date  = moment(this.state.listOfAttendance[i].date);
                this.state.listOfAttendance[i].date = date.format('YYYY-MM-DD');
                listOfAttendance.push(this.state.listOfAttendance[i]);
            }
        }

        this.setState({
            attendanceDetails: listOfAttendance
        })
    }

    render() {
        return (
          <div>
                <HomeHeader />
                <AdminMenu/>
                <MuiThemeProvider>
                    <Card>
                    <div className="container">
                        <center><CardTitle title="Attendance Metrics"/></center>
                        <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                    <center>
                                    <div className="form-group" >
                                    <DateRange
                                        linkedCalendars={ true }
                                        ranges={ defaultRanges }
                                        onChange={ this.handleSelect }
                                        theme={{
                                            Calendar : { width: 200 },
                                            PredefinedRanges : { marginLeft: 10, marginTop: 10 }
                                        }}
                                    />
                                    </div>
                                    {this.state.listOfSchedule.length === 0 ? '' : <div className="form-group">
                                            <hr />
                                            <center><CardTitle title="Schedule Details" /></center>
                                            {
                                                this.state.listOfSchedule.map((obj, index) => {
                                                    return (
                                                        <div key={index} className="col-md-3" key={index}>
                                                            <Card>
                                                                <CardText><Moment format="YYYY/MM/DD">{obj.schedule_date}</Moment>
                                                                    <RadioButtonGroup name="shipSpeed" style={{ display: 'inline-flex', marginLeft: '90px' }}>
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

                                        {this.state.listOfSchedule.length === 0 ? '' :this.state.attendanceDetails.length !== 0 ? <div className="form-group" >
                                       <hr />
                                        <center><CardTitle title="Attendance List" /></center>
                                        <ReactTable
                                            data={this.state.attendanceDetails}
                                            columns={[{
                                                columns: [{
                                                    Header: <center>Date</center>,
                                                    accessor: 'date'
                                                }]
                                            }, {
                                                columns: [{
                                                    Header: <center>Schedule</center>,
                                                    accessor: 'schedule_id'
                                                }]
                                            }, {
                                                columns: [{
                                                    Header: <center>Student</center>,
                                                    accessor: 'student_id'
                                                }]
                                            }, {
                                                columns: [{
                                                    Header: <center>Status</center>,
                                                    accessor: 'attendance_status'
                                                }]
                                            },
                                        ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
  
                                        </div>:''}
                                    </center>
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
        getSchedule: state.scheduler.findScheduleByDate,
        getAttendance: state.scheduler.getAllAttendance

    };
}

function mapDispatchToProps(dispatch) {
    return {
        ScheduleAction : bindActionCreators(ScheduleAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendanceMetrics);