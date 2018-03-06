import React from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MapsPlace from 'material-ui/svg-icons/maps/place';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer'

  },
};

export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      token: ''
    }
    this.gotoLogin = this.gotoLogin.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
  }

  gotoLogin() {
    browserHistory.push('/')
  }

  componentWillMount() {
    let currentUserType = localStorage.getItem('userType');
    let currentToken = localStorage.getItem('token');
    this.setState({ userType: currentUserType });
    this.setState({ token: currentToken });
  }

  goToDashboard() {
    browserHistory.push('/')
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className="achu"   >
          <AppBar style={{ backgroundColor: 'lightslategray' }}
            title={<span style={styles.title}>
              <div className="ms-footbar-title" onClick={this.goToDashboard}>
                <span className="ms-logo ms-logo-white ms-logo-sm mr-1">KK</span>
                <h3 className="no-m ms-site-title">Dance
            <span>School</span>
                </h3>
              </div></span>}
            onTitleTouchTap={this.handleTouchTap}
            iconElementLeft={<IconButton></IconButton>}
             iconElementRight={this.state.token === '' ? <a label="LogIn"  style={{color:'#f5f5f5',fontFamily:'Open Sans'}} onClick={this.gotoLogin} > Login</a>
              : <a label="LogOut"   style={{color:'#f5f5f5',fontFamily:'Open Sans' }} onClick={this.gotoLogin} > Logout</a>}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}
