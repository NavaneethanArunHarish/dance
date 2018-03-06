import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { SubHeader } from '../subheader';
import { AdminMenu } from './adminMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import RaisedButton from 'material-ui/RaisedButton';
import * as Actions from '../../actions/loginActions';
import studentRegister from '../../actions/student';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import moment from 'moment';
import dancePixels from '../../asset/img/dance/Capture.JPG';



class Dashboard extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      trainers: '',
      totalCount: '',
      studentDetails: [],
      selected: []
    }
    this.isSelected = this.isSelected.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    var token = localStorage.getItem('token');
    this.props.actions.getTrainers(token);
    this.props.studentRegister.getUser();
  }

  componentWillReceiveProps(nextProps) {
    //console.log("nextprops  ",nextProps.allTrainers.data.result);
    var allPersons = nextProps.allTrainers.data.result;
    var trainersAlone = [];
    for (var i = 0; i < allPersons.length; i++) {
      if (allPersons[i].user_type == 'TRAINER') {
        trainersAlone.push(allPersons[i]);
      }
    }
    console.log("trainersAlone  ", trainersAlone);
    this.setState({ trainers: trainersAlone });
    var user = nextProps.getUser.result;
    console.log('the user', user)
    var tempdata=user;
    var student=[];
for( var i=0;i<user.length;i++){
     tempdata[i].firstName =user[i].firstName +" "+user[i].lastName
    student.push(tempdata);
   
}
    this.setState({
      studentDetails: tempdata,
      totalCount: user.length
    });

  }
  isSelected = (index) => {

    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  handleChange = (e, obj) => {
    browserHistory.push('/CreateCategory')
    this.props.studentRegister.getUser();
  };

  createTrainer() {
    browserHistory.push('/CreateTrainer')
  }

  studentModule() {
    browserHistory.push('/student')
  }

  render() {
    return (
      <div>
        <HomeHeader />
        <AdminMenu />


        <MuiThemeProvider>
          <div>
            <div className="row">
              <div className="col-md-12">
                <img src={dancePixels} alt="" className="img-responsive wow animated zoomIn animation-delay-8" style={{ height: '200px', width: '100%' }} />
              </div>
            </div>

            <div className="row">
              <Card>
              <center><CardTitle title="List of Student" /></center>
                <div className="row" style={{paddingLeft: '25px'}} >
                  <div className="col-md-6">
                    Total Registered Student: {this.state.totalCount} 
                  </div>
                </div>
                <CardText>
                <Table   className="table-hover" onRowSelection={this.handleRowSelection}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn>Student Name</TableHeaderColumn>
                                        <TableHeaderColumn>Gender </TableHeaderColumn> 
                                        <TableHeaderColumn>Email</TableHeaderColumn>
                                        <TableHeaderColumn>Contact Number</TableHeaderColumn>
                                        <TableHeaderColumn>Interested Dance Form</TableHeaderColumn>
                                        <TableHeaderColumn>Prefer Batch</TableHeaderColumn>
                                        <TableHeaderColumn>Prefer Batch Time</TableHeaderColumn>
                                        <TableHeaderColumn>Register Date</TableHeaderColumn>
                                        

                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    { this.state.studentDetails.filter(function (listValue, index) {
                                        console.log('yejj ',listValue.user_type)
                                    if ( listValue.user_type != "ADMIN" &&listValue.user_type != "TRAINER" ) return true
                                           
                                            }).map((listValue, index) =>
                                       

                                    
                                            <TableRow selected={this.isSelected(index)} key={index} onChange={(e) => this.handleChange(e, listValue)}>
                                                <TableRowColumn>{listValue.firstName}</TableRowColumn>
                                                <TableRowColumn>{listValue.gender}</TableRowColumn>
                                                <TableRowColumn>{listValue.email}</TableRowColumn>
                                                <TableRowColumn>{listValue.phone}</TableRowColumn>
                                                <TableRowColumn>{listValue.category_id}</TableRowColumn> 
                                                <TableRowColumn>{listValue.batch_schedule}</TableRowColumn> 
                                                <TableRowColumn>{listValue.batch_time}</TableRowColumn> 
                                                
                                                <TableRowColumn>{moment(listValue.created_date).format('YYYY-MM-DD')}</TableRowColumn>
                                            </TableRow>
                                    
                                    )}
                                </TableBody>
                            </Table>
                </CardText>
              </Card>
            </div>
          </div>
        </MuiThemeProvider>


        <Footer />

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    allTrainers: state.login.allTrainers,
    getUser: state.student.getUserSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
    studentRegister: bindActionCreators(studentRegister, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
