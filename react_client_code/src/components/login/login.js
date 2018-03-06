import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Select from 'react-select';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import { Footer } from '../footer';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';



import { BaseUrl } from '../../_constants/baseurl';
import * as Actions from '../../actions/loginActions';


//import { userActions } from '../../actions/userActions';

const style = {
  margin: 4,
  mariginRight:20
};

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        value: 1,
            mail: '',
            pwd: ''

    }
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.login = this.login.bind(this);
    this.facebookbutton=this.facebookbutton.bind(this);
    this.twitterbutton=this.twitterbutton.bind(this);
    this.googlebutton=this.googlebutton.bind(this);
   
}

  componentWillMount() {
    console.log('the--------------------',this.props)
   

  }
  
  handleMailChange(event) {
    console.log('------mail change---------------------',event.target.value)
      this.setState({mail:event.target.value})

  }

  handlePwdChange(event) {
      this.setState({pwd:event.target.value})
  }

  login() {
    console.log('-------login object----------',this.state)
      this.props.actions.userLogin(this.state.mail,this.state.pwd);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextprops for user  ",nextProps.userLoginResponse);
    console.log("nextprops admin  ",nextProps.adminLoginResponse);
    console.log("nextprops  trainer ",nextProps.trainerLoginResponse);
    if(nextProps.userLoginResponse != undefined){
      localStorage.setItem('token', nextProps.userLoginResponse.data);
      console.log("nextProps.userLoginResponse-1 > ",nextProps.userLoginResponse)
     browserHistory.push('/StudentDashboard');
    }else{
      console.error('error ----------')
    }
    if(nextProps.adminLoginResponse != undefined){
      localStorage.setItem('token', nextProps.adminLoginResponse.data);
      console.log("nextProps.userLoginResponse2- > ",nextProps.adminLoginResponse)
     browserHistory.push('/Dashboard');
    }else{
      console.error('error  ----------')
    }
    if(nextProps.trainerLoginResponse != undefined){
      localStorage.setItem('token', nextProps.trainerLoginResponse.data);
      console.log("nextProps.userLoginResponse-3 > ",nextProps.trainerLoginResponse)
     browserHistory.push('/TrainerDashboard');
    }else{
      console.error('error ----------')
    }
}

facebookbutton(){

 window.open(BaseUrl.socialurl+'facebook','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;

}
twitterbutton(){

 window.open(BaseUrl.socialurl+'twitter','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;

}
googlebutton(){
  
  console.log('the goole account is coming ')
  
 window.open(BaseUrl.socialurl+'google','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;
 browserHistory.push('/Dashboard');
 
}



  render() {
    
    const { open } = this.state;
    
   
    return (
      <MuiThemeProvider>
      <div className="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed" >
        <div className="mw-500 absolute-center">
          <div className="card color-dark shadow-6dp animated fadeIn animation-delay-7" style={{border:' 1px solid white'
}}>
            <div className="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 className="text-center no-m pt-4 pb-4 color-white index-1">Sign in</h2>
            </div>
            <ul className="nav nav-tabs nav-tabs-full nav-tabs-2 nav-tabs-transparent indicator-primary" role="tablist">
              <li role="presentation" className="active"><a  aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="withoutripple"><i className="zmdi zmdi-account"></i> Login</a></li>
              <li role="presentation" className="active"><a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" className="withoutripple"><i className="zmdi zmdi-key"></i> Recovery</a></li>
            </ul>
            <div className="card-block">
              <div className="tab-content">
                <div className="tab-pane fade active in" id="ms-login-tab">
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon"><i className="zmdi zmdi-account"></i></span>
                          <label className="control-label">Email</label>
                          <input type="text" id="ms-form-user" className="form-control" name="mail" onChange={this.handleMailChange} />
                         
                        </div>
                      </div>

                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon"><i className="zmdi zmdi-lock"></i></span>
                          <label className="control-label">Password</label>
                          <input type="password" id="ms-form-pass" className="form-control" name="pws"  onChange={this.handlePwdChange} />
                         
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-xs-2">
                                                </div>
                        <div className="col-xs-3">
                        <RaisedButton label="Login" onClick={this.login} primary={true} style={style} />
                        </div>
                        <div className="col-xs-3">
                        <RaisedButton label="Cancel" secondary={true} href='/' style={{ marginLeft: '50px' ,marginTop:'3px'}} />
                        </div>
                      </div>
                    </fieldset>

                  <div className="text-center" >
                    <p>or</p>
                    <a href="javascript:void(0)" target="popup" className="wave-effect-light btn btn-raised btn-facebook" onClick={this.facebookbutton} href={BaseUrl.socialurl+'facebook'} ><i className="zmdi zmdi-facebook"></i> </a>
                    <a href="javascript:void(0)"  target="popup" className="wave-effect-light btn btn-raised btn-twitter" onClick={this.twitterbutton}  href={BaseUrl.socialurl+'twitter'}><i className="zmdi zmdi-twitter"></i> </a>
                    <a href="javascript:void(0)" target="popup"  className="wave-effect-light btn btn-raised btn-google"  onClick={this.googlebutton}   href={BaseUrl.socialurl+'google'} ><i className="zmdi zmdi-google"></i> </a>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade" id="ms-recovery-tab">
                  <fieldset>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="zmdi zmdi-account"></i></span>
                        <label className="control-label">Username</label>
                        <input type="text" id="ms-form-user" className="form-control login-form-control" />
                      </div>
                    </div>

                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="zmdi zmdi-email"></i></span>
                        <label className="control-label">Email</label>
                        <input type="email" id="ms-form-email" className="form-control login-form-control" />
                      </div>
                    </div>

                    <button className="btn btn-raised btn-block btn-primary">Send Password</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  console.log(' in component--------------------',state)
  return {
    userLoginResponse:state.login.userLoginResponse,
    trainerLoginResponse:state.login.trainerLoginResponse,
    adminLoginResponse:state.login.adminLoginResponse,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)    
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
