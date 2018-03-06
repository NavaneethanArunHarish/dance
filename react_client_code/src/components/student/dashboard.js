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
import { StudentMenu } from '../../components/student/studentMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import RaisedButton from 'material-ui/RaisedButton';
import * as Actions from '../../actions/loginActions';
import axios from 'axios';

class StudentDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      trainers: '',
    }
  }

  componentWillMount() {
    var token = localStorage.getItem('token');
    this.props.actions.getTrainers(token);
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
    this.setState({ trainers: trainersAlone }); //iterate this data into the table

  }

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
        {/* <SubHeader /> */}
        <StudentMenu />
        <div style={{ height: 500 }}>
          {/* <button onClick={this.createTrainer} className="btn btn-raised btn-primary pull-center">Create Trainer</button>
                <button onClick={this.viewTrainers} className="btn btn-raised btn-primary pull-right">View Trainers</button>

                // table here // */}

        </div>

        <Footer />

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    allTrainers: state.login.allTrainers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
