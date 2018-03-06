import React from 'react';
import ReactTable from "react-table";
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
import Moment from 'react-moment';
import createAction from '../../actions/event';
import { Button } from 'semantic-ui-react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { Navigation } from '../navigation';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import mock from '../../asset/img/delete.png';


class ListEventComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          eventDetails:[],
          selected: [],
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentWillMount() {
      this.props.createAction.getEvent();
      localStorage.setItem('selectedEvent', '');
    }

    componentWillReceiveProps(nextProps) {
      console.log('NextPrps evvent',nextProps)
      var event = nextProps.getEvent.result;
      for(var i=0;i<event.length;i++) {
        var data =  {
          "_id": event[i]._id,
          "event_date": event[i].event_date,
          "status": event[i].status,
          "event_type": event[i].event_type,
          "location": event[i].location,
          "description": event[i].description,
          "title": event[i].title
        }
        this.state.eventDetails.push(data);
      }
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
        localStorage.setItem('selectedEvent', JSON.stringify(data));
        browserHistory.push('/CreateEvent')
    };

    handleDelete = (data) => {
        var userData = this.state.eventDetails;
        var id = data.original._id;
        for (var key = 0; key < userData.length; key++) {
            if (id === userData[key]._id) {
                this.state.eventDetails.splice(key,1);
                this.setState({eventDetails: this.state.eventDetails});
            }
        }
        var id = data.original._id;
        this.props.createAction.deleteEvent(id);
    };

    handleEvent = (data) => {
        browserHistory.push({
          pathname: '/CreateSchedule',
          state: {
              message: data
          }
      });
      }
    

    render() {
        return (
          <div>
            <HomeHeader />
            <AdminMenu />
            <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Events" /></center>
                            <ReactTable
                                data={this.state.eventDetails}
                                columns={[{
                                    columns: [{
                                        Header: <center>Title Name</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.title}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Event date</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                <Moment format="YYYY/MM/DD">{row.original.event_date}</Moment>
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Event Type</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.event_type}
                                                </div>
                                            </center>
                                        )
                                    }]
                                },
                                {
                                  columns: [{
                                      Header: <center>Description</center>,
                                      Cell: row => (
                                        <center>
                                            <div>
                                                {row.original.description}
                                            </div>
                                        </center>
                                    )
                                  }]
                              },
                              {
                                columns: [{
                                    Header: <center>Location</center>,
                                    Cell: row => (
                                        <center>
                                            <div>
                                                {row.original.location}
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
                            }, {
                                columns: [{
                                    Header: <center>Schedule</center>,
                                    Cell: row => (
                                        <center>
                                            <div>
                                            <Button negative onClick={() => this.handleEvent(row.original)}>
                                                Create Schedule
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

           
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
      createEvent: state.createEvent,
      getEvent: state.event.getEventSuccess,
      deleteEvent: state.event.deleteEventReject
    };
}

function mapDispatchToProps(dispatch) {
    return {
      createAction : bindActionCreators(createAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEventComponent);