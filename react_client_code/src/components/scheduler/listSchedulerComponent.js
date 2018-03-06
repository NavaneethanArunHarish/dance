import React from 'react';
import ReactTable from "react-table";
import Moment from 'react-moment';
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
import createSchedulerAction from '../../actions/scheduler';
import { Button } from 'semantic-ui-react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import mock from '../../asset/img/delete.png';


class ListSchedulerComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      schedulerDetails: [],
      selected: [],
    }
    this.isSelected = this.isSelected.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.createSchedulerAction.getScheduler();
    localStorage.setItem('selectedScheduler', '');
  }

  componentWillReceiveProps(nextProps) {
    var scheduler = nextProps.getScheduler.result;
    this.setState({
      schedulerDetails: scheduler,
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

  handleChange = (e, data) => {
    localStorage.setItem('selectedScheduler', JSON.stringify(data));
    browserHistory.push('/CreateSchedule')
  };

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
    this.props.createSchedulerAction.deleteSchedule(id);
  };


  render() {
    return (
      <div>
        <HomeHeader />
        <AdminMenu />
        <MuiThemeProvider>
          <Card>
            <div className="container">
              <center><CardTitle title="List of Schedule" /></center>

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
                }, {
                  columns: [{
                      Header: <center>Remove</center>,
                      Cell: row => (
                          <center>
                              <div>
                                  <Button negative onClick={() => this.handleDelete(row)}>
                                  <img src={mock} alt="" className="img-responsive" />
                                  </Button>
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
      </div >
    );
  }
}

function mapStateToProps(state, props) {
  return {
    getScheduler: state.scheduler.getSchedulerSuccess,
    deleteSchedule: state.scheduler.deleteScheduleSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createSchedulerAction: bindActionCreators(createSchedulerAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSchedulerComponent);