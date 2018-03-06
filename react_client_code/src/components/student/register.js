import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import moment, { locales, locale } from 'moment';
import Moment from 'react-moment';
import '../../asset/css/plugins.min.css';
import studentRegister from '../../actions/student';
import ScheduleAction from '../../actions/scheduler';
import eventAction from '../../actions/event';
import SubCategoryAction from '../../actions/subCategory'
import * as LoginAction from '../../actions/loginActions';
import avatar from '../../asset/img/reg.png';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import './student.css';
import { Footer } from '../footer';
import { SubHeader } from '../subheader';
import DatePicker from 'material-ui/DatePicker';
import { HomeHeader } from '../homeHeader';
import { Navigation } from '../navigation';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import category from '../../actions/category';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import AutoId from './autoId'


const style = {
    margin: 12,
};
const styles = {
    customWidth: {
        width: 150,
    },
};

var time = [

    { value: '9 AM', label: '9 AM' },
    { value: '10 AM', label: '10 AM' },
    { value: '11 AM', label: '11 AM' },
    { value: '12 AM', label: '12 AM' },
    { value: '1 PM', label: '1 PM' },
    { value: '2 PM', label: '2 PM' },
    { value: '3 PM', label: '3 PM' },
    { value: '4 PM', label: '4 PM' },
    { value: '5 PM', label: '5 PM' },
    { value: '6 PM', label: '6 PM' },
    { value: '7 PM', label: '7 PM' },
    { value: '8 PM', label: '8 PM' },
    { value: '9 PM', label: '9 PM' }



];

var locationData = [
    { value: 'Duval', label: 'Duval' },
    { value: 'St johns', label: 'St johns' },
    { value: 'Orange park', label: 'Orange park' },
    { value: 'Other', label: 'Other' }
]
var Gender = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' }
]
var choosePerson = [
    { value: 'Physically Challenged', label: 'Physically Challenged' },
    { value: 'Non-Physically Challenged', label: 'Non-Physically Challenged' }
]
var batchList = [
    { value: 'WEEKDAY', label: 'WEEKDAY' },
    { value: 'WEEKEND', label: 'WEEKEND' }
]

var categoryLists = [
    { value: 'Zumba', label: 'Zumba' },
    { value: 'Bollywood', label: 'Bollywood' },
    { value: 'Indian Classical', label: 'Indian Classical' },
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Choreography', label: 'Choreography' },
    { value: 'Private Lesson', label: 'Private Lesson' }

]


class StudentRegister extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            email: '',
            password: '',
            phone: '',
            age: '',
            location: '',
            studentId: '',
            category_id: '',
            category_name: '',
            categoryList: [],
            instructorName: '',
            batch: '',
            batchStartDate: '',
            startTime: '',
            endTime: '',
            payment: '',
            dueDate: '',
            formCount: '',
            listOfSchedule: [],
            selected: [],
            currentSchedule: '',
            checked: false,
            scheduleStartTime: '',
            scheduleEndTime: '',
            eventList: [],
            event_name: '',
            event_id: '',
            listOfStudent: [],
            selectedStudent: '',
            physicallyCharacter: '',
            position: 0,
            subCategory: '',
            subCategory_id: '',
            subCategoryList: []
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        //this.handleQualificationChange = this.handleQualificationChange.bind(this);
        this.saveStudentRegistration = this.saveStudentRegistration.bind(this);
        this.handleCategorySelect = this.handleCategorySelect.bind(this);
        this.handleInstructorNameChange = this.handleInstructorNameChange.bind(this);
        this.selectDOB = this.selectDOB.bind(this);
        this.batchTimimg = this.batchTimimg.bind(this);
        this.handleBatch = this.handleBatch.bind(this);
        this.handleBatchStartDate = this.handleBatchStartDate.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleBatchDueDate = this.handleBatchDueDate.bind(this);
        this.selectedScheduleAllot = this.selectedScheduleAllot.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.physicallyCategory = this.physicallyCategory.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.selectSubCategory = this.selectSubCategory.bind(this);

    }

    batchTimimg(event) {
        this.setState({ batch_time: event.target.textContent })
    }

    physicallyCategory(event) {
        this.setState({ physicallyCharacter: event.value });
    }

    changeEvent(obj) {
        this.setState({ event_name: obj.title, event_id: obj._id })
        var eventid = {
            "eventid": obj._id
        }
        // console.log("event id", eventid)
        this.props.ScheduleAction.findSchedulesByEventId(eventid);
    }

    handleBatchDueDate(event, date) {
        this.setState({
            dueDate: date
        })
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleChangeStudent(value) {
        this.setState({
            selectedStudent: value
        })
    }

    handleLocationChange(event) {
        this.setState({ location: event.value });
    }

    handlePaymentChange(event) {
        this.setState({ payment: event.target.value });
    }

    changeStartTime(event, index, value) {
        this.setState({ startTime: value });
    }

    changeEndTime(event, index, value) {

        this.setState({ endTime: value });

    }

    handleBatch(event) {
        this.setState({ batch: event.value })
    }

    handleStartTimeChange(event, index, value) {
        this.setState({ scheduleStartTime: value });
    }

    handleEndTimeChange(event, index, value) {
        this.setState({ scheduleEndTime: value });
    }

    selectedScheduleAllot(obj) {
        localStorage.setItem('allotment', obj._id);
        this.setState({ allotment: obj });
    }

    handleInstructorNameChange(event) {
        this.setState({ instructorName: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleAgeChange(event) {
        this.setState({ age: event.target.value })
    }

    handleGenderChange(event) {
        this.setState({ gender: event.value });
    }

    handleBatchStartDate(event, date) {
        var d = new Date(date);
        var n = d.toISOString();
        var date1 = moment(n);
        var dateComponent = date1.format('YYYY-MM-DD');
        // console.log(dateComponent);
        this.setState({
            batchStartDate: dateComponent
        })
        localStorage.setItem('batchDate', dateComponent);
        this.props.eventAction.getEvent();
        // this.props.ScheduleAction.getScheduler();
    }


    saveStudentRegistration() {
        if (this.state.checked === true) {
            var obj = {
                "location": this.state.location,
                "schedule_date": localStorage.getItem('batchDate'),
                "eventid": this.state.event_id,
                "starttime": this.state.scheduleStartTime,
                "endtime": this.state.scheduleEndTime,
                "host": "5a0b09b2e510ee1fbc6c0f93",
                "filled_slot": 0,
                "available_slot": 15,
            }
            // this.props.ScheduleAction.addScheduler(obj);
        }
        var result = {
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'gender': this.state.gender,
            'email': this.state.email,
            'phone': this.state.phone,
            'location': this.state.location,
            'category_id': this.state.category_id,
            "sub_category_id": this.state.subCategory_id,
            'dob': this.state.dob,
            'age': this.state.age,
            'batch_schedule': this.state.batch,
            'batch_start_date': this.state.batchStartDate,
            'batch_time': this.state.batch_time,
            "password": "12345",
        }

        this.props.studentRegister.addStudentRegistration(result, this.handleCallback);


    }


    handleCallback(data) {
        console.log('success ...!!!');
        if (data.data != undefined) {
            if (data.data.message === "Account Created Successfully") {
                toast.success("Thank you!! We received your details.Our Team will get back to you shortly")

                setTimeout(function () { browserHistory.push('/ListStudent') }.bind(this), 3000);


            }


        }
        else {

            toast.error("Register failed")
            setTimeout(function () { browserHistory.push('/StudentRegister') }.bind(this), 3000);

        }
    }
    handleCategorySelect(data) {

        this.setState({ category_id: data._id, category_name: data.name })
        // this.props.ScheduleAction.getUserById(data._id);
    }

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    selectDOB(event, date) {
        // console.log("date>>>>" + date);
        this.setState({
            dob: date
        })
    }

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    handleChange = (e, data) => {

        this.setState({ currentSchedule: data })
    };
    selectSubCategory(e) {
        this.setState({ subCategory: e.sub_category_level, subCategory_id: e._id })

    }

    componentWillMount() {
        this.props.studentRegister.getUser();
        this.studentId = AutoId();
        localStorage.setItem('loginStudent', false);
        localStorage.setItem('allotment', '');
        this.props.category.getCategory();
        this.props.eventAction.getEvent();
        this.props.SubCategoryAction.getSubcategory();

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.allUser !== undefined) {

            var user = nextProps.allUser.result;
            var userCount = nextProps.allUser.result.length;

            var currentUserCount = nextProps.allUser.result[userCount - 1].userId;
            this.setState({
                formCount: currentUserCount + 1
            })

        }

        let login = localStorage.getItem('loginStudent');
        if (nextProps.getUserById) {
            var user = nextProps.getUserById.result;
            var listOfStudent = []
            user.forEach(function (entry) {
                if (entry.user_type === "USER") {
                    listOfStudent.push({
                        value: entry._id,
                        label: entry.name,
                    })
                }
            });

            this.setState({
                listOfStudent: listOfStudent
            })
        }
        if (nextProps.createScheduleSuccess) {
            var scheduleId = nextProps.createScheduleSuccess.result._id;
            localStorage.setItem('allotment', scheduleId);
        }
        if (nextProps.createSuccess) {

            var studentId = nextProps.createSuccess.result._id;
            let allotmentId = localStorage.getItem('allotment');
            var data = {
                "host": studentId,
                "schedule_id": allotmentId,
                "paid_status": "PAID",
                "status": "CONFIRMED"
            }
            // this.props.ScheduleAction.addScheduleDetails(data);
        }
        let getBusinessID = localStorage.getItem('ActiveBusinessID')
        console.log("getBusinessid", getBusinessID)
        if (nextProps.getCategory !== undefined) {
            var category = nextProps.getCategory.result;
            var filterByCategory = []
            for (var i = 0; i < category.length; i++) {
                var buisnessID = category[i].business_id.business_status

                console.log("business id", buisnessID)
                if (buisnessID === true) {
                    console.log("category", category[i])
                    filterByCategory.push(category[i])
                    this.setState({ categoryList: filterByCategory })
                }

            }

        }
        if (nextProps.getEvent !== undefined) {
            var event = nextProps.getEvent.result;
            var listofEventbyDate = []
            for (var i = 0; i < event.length; i++) {
                var event_date = moment(event[i].event_date)
                var dateComponent = event_date.format('YYYY-MM-DD');
                if (this.state.batchStartDate === dateComponent) {
                    listofEventbyDate.push(event[i])
                    this.setState({ eventList: listofEventbyDate })
                }
            }

        }

        if (nextProps.getScheduleByEventId !== undefined) {
            var listOfSchedulebyEvent = nextProps.getScheduleByEventId.result
            // console.log("list", JSON.stringify(listOfSchedulebyEvent));
            this.setState({
                listOfSchedule: listOfSchedulebyEvent
            })
        }
        if (nextProps.getSubCategory) {
            var subCategory = nextProps.getSubCategory.result;
            this.setState({ subCategoryList: subCategory })

        }
    }


    render() {

        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <MuiThemeProvider>
                    <Card>
                        <center>
                            <CardTitle title="Student Registration" />

                            <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                        {/* <div className="form-group" style={{ height: '40px', marginTop: '0px' }} >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <CardTitle style={{ float: 'left' }} title="Student ID: " />
                                                        <CardTitle style={{ float: 'left' }} title={this.state.formCount} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Student First Name"
                                                            floatingLabelText="Student First Name"
                                                            onChange={this.handleFirstNameChange}
                                                            name="firstName"
                                                        /><br />
                                                    </div>
                                                    <div className='col-md-3 textboxAlign'>
                                                        <TextField
                                                            hintText="Student Last Name"
                                                            floatingLabelText=" Student Last Name"
                                                            onChange={this.handleLastNameChange}
                                                            name="lastName"
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <SelectField
                                                            value={this.state.gender}
                                                            hintText="Select Gender"
                                                        >
                                                            {
                                                                Gender.map((obj, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={obj.value} primaryText={obj.label} onClick={this.handleGenderChange.bind(this, obj)} />
                                                                    )
                                                                })
                                                            }

                                                        </SelectField><br />
                                                    </div>

                                                    <div className='col-md-3 textboxAlign' style={{ marginTop: '-23px' }} >
                                                        <TextField
                                                            hintText="Enter Email"
                                                            floatingLabelText="Email"
                                                            onChange={this.handleEmailChange}
                                                            name="email"
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Contact Number"
                                                            floatingLabelText="Contact Number"
                                                            onChange={this.handlePhoneChange}
                                                            name="phone"
                                                        /><br />
                                                    </div>

                                                    <div className='col-md-3 textboxAlign' style={{ marginTop: '23px' }}>
                                                        <SelectField
                                                            value={this.state.location}
                                                            hintText="Select Branch"
                                                        >
                                                            {
                                                                locationData.map((obj, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={obj.value} primaryText={obj.label} onClick={this.handleLocationChange.bind(this, obj)} />
                                                                    )
                                                                })
                                                            }

                                                        </SelectField><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <SelectField
                                                            value={this.state.category_name}
                                                            hintText="Interested Dance Form"
                                                        >
                                                            {
                                                                this.state.categoryList.map((obj, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.handleCategorySelect.bind(this, obj)} />
                                                                    )
                                                                })
                                                            }

                                                        </SelectField>

                                                    </div>
                                                    <div className='col-md-3 textboxAlign'>
                                                        <DatePicker hintText="Student Date Of Birth" mode="landscape" autoOk={true} onChange={this.selectDOB} />
                                                        <br />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className='col-md-offset-3'>
                                                <div className='col-md-3'>
                                                    <SelectField
                                                        hintText="Select Sub Category"
                                                        value={this.state.subCategory}
                                                    >
                                                        {
                                                            this.state.subCategoryList.map((obj, index) => {
                                                                return (<MenuItem key={index} value={obj.sub_category_level} primaryText={obj.sub_category_level} onClick={this.selectSubCategory.bind(this, obj)} />
                                                                )
                                                            })
                                                        }
                                                    </SelectField><br />

                                                </div>
                                                <div className='col-md-3 textboxAlign' style={{ marginTop: '-25px' }}>

                                                    <TextField
                                                        hintText="Enter Age"
                                                        floatingLabelText="Age"
                                                        onChange={this.handleAgeChange}
                                                        name='age'
                                                    /><br />

                                                </div>

                                            </div>
                                        </div>



                                        {/* 
                                        {this.state.eventList.length === 0 ? '' :
                                            <div>
                                                <center><CardTitle title="Enter Event Details" /> </center>
                                                <SelectField
                                                    hintText="Enter Event"
                                                    value={this.state.event_name}
                                                >
                                                    {this.state.eventList.map((obj, index) => {
                                                        return (<MenuItem value={obj.title} key={index} primaryText={obj.title} onClick={this.changeEvent.bind(this, obj)} />
                                                        )
                                                    })
                                                    }

                                                </SelectField>
                                            </div>
                                        }

                                        {this.state.listOfSchedule.length === 0 ? '' : <div className="form-group">
                                            <hr />
                                            <center><CardTitle title="Schedule Details" /></center>
                                            {
                                                this.state.listOfSchedule.map((obj, index) => {
                                                    return (
                                                        <div className="col-md-3">
                                                            <Card>
                                                                <CardText><Moment format="YYYY/MM/DD">{obj.schedule_date}</Moment>
                                                                    <RadioButtonGroup name="shipSpeed" style={{ display: 'inline-flex', marginLeft: '60px' }}>
                                                                        <RadioButton
                                                                            value="reverse"
                                                                            label=""
                                                                            style={styles.radioButton}
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
                                            <div className='col-md-2'>
                                                <Checkbox
                                                    label="Create a Schedule"
                                                    checked={this.state.checked}
                                                    onCheck={this.updateCheck.bind(this)}
                                                />
                                            </div>
                                        </div>
                                        }

                                        {this.state.listOfSchedule.length === 0 ? '' : this.state.checked === true ? <div><div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <SelectField
                                                            hintText="Start Time"
                                                            onChange={this.handleStartTimeChange}
                                                            value={this.state.scheduleStartTime}
                                                        >
                                                            {
                                                                time.map((obj, index) => {
                                                                    return (<MenuItem key={index} value={obj.value} primaryText={obj.label} />)
                                                                })
                                                            }
                                                        </SelectField><br />
                                                    </div>
                                                    <div className='col-md-3 textboxAlign'>
                                                        <SelectField
                                                            hintText="End Time"
                                                            onChange={this.handleEndTimeChange}
                                                            value={this.state.scheduleEndTime}
                                                        >
                                                            {
                                                                time.map((obj, index) => {
                                                                    return (<MenuItem value={obj.value} primaryText={obj.label} key={index} />)
                                                                })
                                                            }
                                                        </SelectField><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="form-group" >
                                                <center><div className="col-md-4 multiSelect">
                                                    <Select
                                                        name="form-field-name"
                                                        value={this.state.selectedStudent}
                                                        options={this.state.listOfStudent}
                                                        multi={true}
                                                        onChange={this.handleChangeStudent}
                                                        clearable={false}
                                                    /><br />
                                                </div></center>
                                            </div></div> : ''} */}

                                        <div className="form-group" >
                                            <div style={{ marginLeft: "25%" }} className="col-md-6">
                                                <RaisedButton label="Register" onClick={this.saveStudentRegistration} primary={true} style={style} />
                                                {/* <RaisedButton label="Cancel" onClick={browserHistory.goBack} secondary={true} style={style} /> */}
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </CardText>
                        </center>

                    </Card>
                </MuiThemeProvider>

                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log('the state', state)
    return {
        getCategory: state.category.getSuccess,
        getSchedule: state.scheduler.getSchedulerSuccess,
        createSuccess: state.student.createSuccess,
        loginStudentResponse: state.login.loginStudentResponse,
        createScheduleSuccess: state.scheduler.createSuccess,
        getEvent: state.event.getEventSuccess,
        getUserById: state.scheduler.getUserByIdSuccess,
        allUser: state.student.getUserSuccess,
        getScheduleByEventId: state.scheduler.getListScheduleDetail,
        getSubCategory: state.subCategory.getSuccess

    };
}

function mapDispatchToProps(dispatch) {
    return {
        studentRegister: bindActionCreators(studentRegister, dispatch),
        category: bindActionCreators(category, dispatch),
        ScheduleAction: bindActionCreators(ScheduleAction, dispatch),
        LoginAction: bindActionCreators(LoginAction, dispatch),
        eventAction: bindActionCreators(eventAction, dispatch),
        SubCategoryAction: bindActionCreators(SubCategoryAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegister);