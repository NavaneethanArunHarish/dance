import React from 'react';
import ReactTable from "react-table";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import Moment from 'react-moment';
import { Button } from 'semantic-ui-react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import ScheduleAction from '../../actions/scheduler';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { SubHeader } from '../subheader';
import { TrainerMenu } from '../../components/trainer/trainerMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import RaisedButton from 'material-ui/RaisedButton';
import * as Actions from '../../actions/loginActions';
import axios from 'axios';
import mock from '../../asset/img/delete.png';

class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      trainers: '',
      schedulerDetails:[]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    var token = localStorage.getItem('token');
    this.props.actions.getTrainers(token);
    this.props.ScheduleAction.getScheduler();
  }

  componentWillReceiveProps(nextProps) {

    var schedulerDetails = [];
    if(nextProps.getScheduler.result !== undefined) {
      var scheduler = nextProps.getScheduler.result;
      var date = new Date();
      var currentDate = date.toISOString();
      var date1 = moment(currentDate);
      var dateComponent = date1.format('YYYY-MM-DD');
      scheduler.forEach(function (entry) {
        var scheduleDate = moment(entry.schedule_date);
        var scheduleDateComponent = scheduleDate.format('YYYY-MM-DD');
        if (scheduleDateComponent === dateComponent) {
           schedulerDetails.push(entry);
        }
    });
      this.setState({
        schedulerDetails: schedulerDetails,
      });
    }

    if(nextProps.allTrainers.data.result !== undefined){
      var allPersons = nextProps.allTrainers.data.result;
      var trainersAlone = [];
      for (var i = 0; i < allPersons.length; i++) {
        if (allPersons[i].user_type == 'TRAINER') {
          trainersAlone.push(allPersons[i]);
        }
      }
      console.log("trainersAlone  ", trainersAlone);
      this.setState({ trainers: trainersAlone }); //iterate this data into the table
    }
  }

  createTrainer() {
    browserHistory.push('/CreateTrainer')
  }

  studentModule() {
    browserHistory.push('/student')
  }

  handleDelete = (data) => {
    var userData = this.state.schedulerDetails;
    var id = data.original._id;
    for (var key = 0; key < userData.length; key++) {
        if (id === userData[key]._id) {
            this.state.schedulerDetails.splice(key,1);
            this.setState({schedulerDetails: this.state.schedulerDetails});
        }
    }
    var id = data.original._id;
    this.props.ScheduleAction.deleteSchedule(id);
  };

  render() {
    return (
      <div>
        <HomeHeader />
        <TrainerMenu />
        <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Schedules" /></center>
                            <ReactTable
                                data={this.state.schedulerDetails}
                                columns={[{
                                          columns: [{
                                            Header: <center>Schedule Date</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                  <Moment format="YYYY/MM/DD">{row.original.schedule_date}</Moment>
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        }, {
                                          columns: [{
                                            Header: <center>Filled Slot</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.filled_slot}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        }, {
                                          columns: [{
                                            Header: <center>Available Slot</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.available_slot}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        },
                                        {
                                          columns: [{
                                            Header: <center>Schedule Rate</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.schedule_rate}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        },
                                        {
                                          columns: [{
                                            Header: <center>Start Time</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.starttime}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        },
                                        {
                                          columns: [{
                                            Header: <center>End Time</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.endtime}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        },
                                        {
                                          columns: [{
                                            Header: <center>Target Revenue</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.target_revenue}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                        },
                                        {
                                          columns: [{
                                            Header: <center>Total Revenue</center>,
                                            Cell: row => (
                                              <center>
                                                  <div>
                                                      {row.original.total_revenue}
                                                  </div>
                                              </center>
                                          )
                                          }]
                                      //   }, {
                                      //     columns: [{
                                      //         Header: <center>Remove</center>,
                                      //         Cell: row => (
                                      //             <center>
                                      //                 <div>
                                      //                     <Button negative onClick={() => this.handleDelete(row)}>
                                      //                     <img src={mock} alt="" className="img-responsive" />
                                      //                     </Button>
                                      //                 </div>
                                      //             </center>
                                      //         )
                                      //     }]
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
function mapStateToProps(state) {
  return {
    allTrainers: state.login.allTrainers,
    getScheduler: state.scheduler.getSchedulerSuccess,
    deleteSchedule: state.scheduler.deleteScheduleSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
    ScheduleAction: bindActionCreators(ScheduleAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
