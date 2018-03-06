import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import createSchedulerAction from '../../actions/scheduler';
import UserAction from '../../actions/student';
import eventAction from '../../actions/event';
import SubCategoryAction from '../../actions/subCategory'
import category from '../../actions/category';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import './scheduler.css';
import mock from '../../asset/img/dance-new2.jpg';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
//import { Navigation } from '../navigation';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


var time = [
    { value: '12 PM', label: '12 PM' },
    { value: '1 PM', label: '1 PM' },
    { value: '2 PM', label: '2 PM' },
    { value: '3 PM', label: '3 PM' },
    { value: '4 PM', label: '4 PM' },
    { value: '5 PM', label: '5 PM' },
    { value: '6 PM', label: '6 PM' },
    { value: '7 PM', label: '7 PM' },
    { value: '8 PM', label: '8 PM' },
    { value: '9 PM', label: '9 PM' },
    { value: '10 PM', label: '10 PM' },
    { value: '11 PM', label: '11 PM' },
    { value: '12 AM', label: '12 AM' },
    { value: '1 AM', label: '1 AM' },
    { value: '2 AM', label: '2 AM' },
    { value: '3 AM', label: '3 AM' },
    { value: '4 AM', label: '4 AM' },
    { value: '5 AM', label: '5 AM' },
    { value: '6 AM', label: '6 AM' },
    { value: '7 AM', label: '7 AM' },
    { value: '8 AM', label: '8 AM' },
    { value: '9 AM', label: '9 AM' },
    { value: '10 AM', label: '10 AM' },
    { value: '11 AM', label: '11 AM' }

];

class SchedulerComponent extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            id: '',
            startTime: '',
            endTime: '',
            event: '',
            event_id: '',
            scheduledRate: '',
            schedulerDate: '',
            filledSlot: '',
            availableSlot: '15',
            location: '',
            host: '',
            host_id: '',
            targetAvenue: '',
            totalAvenue: '',
            userList: [],
            eventList: [],
            categoryList: [],
            subCategoryList: [],
            eventData:''
        }
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.changeSchedularDate = this.changeSchedularDate.bind(this);
        this.changeFilledSlot = this.changeFilledSlot.bind(this);
        this.changeAvailableSlot = this.changeAvailableSlot.bind(this);
        this.changeScheduledRate = this.changeScheduledRate.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeHost = this.changeHost.bind(this);
        this.schedulerRegister = this.schedulerRegister.bind(this);
        this.changeTargetAvenue = this.changeTargetAvenue.bind(this);
        this.changeTotalAvenue = this.changeTotalAvenue.bind(this);
        this.selectedUser = this.selectedUser.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.handleCategorySelect = this.handleCategorySelect.bind(this);
        this.selectSubCategory = this.selectSubCategory.bind(this);
    }

    componentWillMount() {
        this.props.UserAction.getUser();
        this.props.eventAction.getEvent();
        this.props.category.getCategory();
        this.props.SubCategoryAction.getSubcategory();
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps value', nextProps)
        if (nextProps.getUser !== undefined){
            var user = nextProps.getUser.result;
        for (var i = 0; i < user.length; i++) {
            if (user[i].user_type === "USER") {
                if (this.state.userList.indexOf(user[i]) === -1) {
                    this.state.userList.push(user[i]);
                }
            }
        }
    }    
        if(nextProps.getEvent !== undefined){
            var event = nextProps.getEvent.result;
            this.setState({ eventList: event })
    
        }

        if(this.props.location.state.message) {
            this.setState({ eventData: this.props.location.state.message })
        }

        if(this.props.location.state.message) {
            this.setState({ scheduleData: this.props.location.state.message })
        }
       
        if (nextProps.getCategory !== undefined) {
            var category = nextProps.getCategory.result;
            var filterByCategory = []
            for (var i = 0; i < category.length; i++) {
                var buisnessID = category[i].business_id.business_status;
                if (buisnessID === true) {
                    filterByCategory.push(category[i])
                    this.setState({ categoryList: filterByCategory })
                }

            }

        }
        if (nextProps.getSubCategory !== undefined) {
            var subCategory = nextProps.getSubCategory.result;
            this.setState({ subCategoryList: subCategory })

        }
    };

    changeStartTime = (event, index, value) => this.setState({ startTime: value });

    changeEndTime = (event, index, value) => this.setState({ endTime: value });

    changeHost(event, index, value) {
        this.setState({ host: value._id });

    }
    handleCategorySelect(data) {
        this.setState({ category_name: data.name, category_id: data._id })
    }
    selectSubCategory(e) {
        this.setState({ subCategory: e.sub_category_level, subCategory_id: e._id });
    }
    changeEvent(obj) {
        console.log('the value', obj)
        this.setState({ event: obj.title, event_id: obj._id });
    }

    changeFilledSlot(e) {
        this.setState({ filledSlot: e.target.value });
    }

    changeSchedularDate = (event, date) => {
        this.setState({
            schedulerDate: date,
        });
    };

    changeAvailableSlot(e) {
        this.setState({ availableSlot: e.target.value });
    }

    changeTargetAvenue(e) {
        this.setState({ targetAvenue: e.target.value });
    }

    changeTotalAvenue(e) {
        this.setState({ totalAvenue: e.target.value });
    }

    changeScheduledRate(e) {
        this.setState({ scheduledRate: e.target.value });
    }

    changeLocation(e) {
        this.setState({ location: e.target.value });
    }

    selectedUser(obj) {
        this.setState({ host: obj.firstName, host_id: obj._id });
    }
    handleCallback(data) {
        if (data.data !== undefined) {
            if (data.data.code == '200') {
                toast.success("Schedule created Successfully");
                setTimeout(function () { browserHistory.push('/ListOfSchedule') }.bind(this), 3000);
            }
        }
        else {

            toast.error("Schedule Failed");
            setTimeout(function () { browserHistory.push('/CreateSchedule') }.bind(this), 3000);
        }




    }
    schedulerRegister() {
        if (this.state.id === '') {
            var obj = {
                "location": this.state.location,
                "schedule_date": this.state.schedulerDate,
                "eventid": this.state.eventData._id,
                "starttime": this.state.startTime,
                "endtime": this.state.endTime,
                "host": this.state.host_id,
                "filled_slot": this.state.filledSlot,
                "available_slot": this.state.availableSlot,
                "schedule_rate": this.state.scheduledRate,
                "target_revenue": this.state.targetAvenue,
                "total_revenue": this.state.totalAvenue,
                "category_id": this.state.category_id,
                "subCategory_id": this.state.subCategory_id
            }
            this.props.createSchedulerAction.addScheduler(obj, this.handleCallback);
        } else {
            var obj = {
                "_id": this.state.id,
                "location": this.state.location,
                "schedule_date": this.state.schedulerDate,
                "eventid": this.state.eventData._id,
                "starttime": this.state.startTime,
                "endtime": this.state.endTime,
                "host": this.state.host_id,
                "filled_slot": this.state.filledSlot,
                "available_slot": this.state.availableSlot,
                "schedule_rate": this.state.scheduledRate,
                "target_revenue": this.state.targetAvenue,
                "total_revenue": this.state.totalAvenue,
                "category_id": this.state.category_id,
                "subCategory_id": this.state.subCategory_id
            }
            this.props.createSchedulerAction.updateScheduler(obj);
        }
    }


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <ToastContainer
                    position="top-center"
                    autoClose={800}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <MuiThemeProvider>
                    <div className="row">
                        <div className="col-md-6">
                            <Card>
                                <center><CardTitle title="Create Schedule" />
                                    <CardText>
                                        <div className="form-horizontal" >
                                            <fieldset>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <DatePicker hintText="Select Schedule Date" floatingLabelText="Scheduler Date" mode="landscape" onChange={this.changeSchedularDate} />
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <SelectField
                                                                    hintText="Enter Start Time"
                                                                    onChange={this.changeStartTime}
                                                                    value={this.state.startTime}
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
                                                                    hintText="Enter End Time"
                                                                    onChange={this.changeEndTime}
                                                                    value={this.state.endTime}
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
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <SelectField
                                                                    hintText="Event Name"
                                                                    value={this.state.eventData.title}
                                                                    disabled={true}
                                                                >
                                                                    <MenuItem value={this.state.eventData.title} primaryText={this.state.eventData.title} />
                                                                </SelectField><br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <SelectField
                                                                    hintText="Enter Host"
                                                                    value={this.state.host}
                                                                >
                                                                    {
                                                                        this.state.userList.map((obj, index) => {
                                                                            return (<MenuItem key={index} value={obj.firstName} primaryText={obj.firstName} onClick={this.selectedUser.bind(this, obj)} />
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
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <SelectField value={this.state.category_name} hintText="Select Category">
                                                                    {
                                                                        this.state.categoryList.map((obj, index) => {
                                                                            return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.handleCategorySelect.bind(this, obj)} />)
                                                                        })
                                                                    }
                                                                </SelectField><br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter Filled Slot"
                                                                    floatingLabelText="Filled Slot"
                                                                    onChange={this.changeFilledSlot}
                                                                    value={this.state.filledSlot}
                                                                />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Available Slot"
                                                                    floatingLabelText="Available Slot"
                                                                    onChange={this.changeAvailableSlot}
                                                                    value={this.state.availableSlot}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter Scheduled Rate"
                                                                    floatingLabelText="Scheduled Rate"
                                                                    onChange={this.changeScheduledRate}
                                                                    value={this.state.scheduledRate}
                                                                />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Target Avenue"
                                                                    floatingLabelText="Target Avenue"
                                                                    onChange={this.changeTargetAvenue}
                                                                    value={this.state.targetAvenue}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter Total Avenue"
                                                                    floatingLabelText="Total Avenue"
                                                                    onChange={this.changeTotalAvenue}
                                                                    value={this.state.totalAvenue}
                                                                />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Location"
                                                                    floatingLabelText="Location"
                                                                    onChange={this.changeLocation}
                                                                    value={this.state.location}
                                                                /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div style={{ marginLeft: "25%" }} className="col-md-6">
                                                        <RaisedButton label="Create" primary={true} onClick={this.schedulerRegister} />
                                                        <RaisedButton label="Cancel" secondary={true} onClick={browserHistory.goBack} style={{ marginLeft: '10px' }} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </CardText>
                                </center>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <img src={mock} alt="" className="img-responsive wow animated zoomIn animation-delay-8" />
                        </div>
                    </div>
                </MuiThemeProvider>
                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log('state', state)
    return {
        getUser: state.student.getUserSuccess,
        scheduleResponse: state.scheduler.createSuccess,
        errorResponse: state.scheduler.createRejected,
        getEvent: state.event.getEventSuccess,
        getCategory: state.category.getSuccess,
        getSubCategory: state.subCategory.getSuccess

    };
}

function mapDispatchToProps(dispatch) {
    return {
        createSchedulerAction: bindActionCreators(createSchedulerAction, dispatch),
        UserAction: bindActionCreators(UserAction, dispatch),
        eventAction: bindActionCreators(eventAction, dispatch),
        category: bindActionCreators(category, dispatch),
        SubCategoryAction: bindActionCreators(SubCategoryAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerComponent);