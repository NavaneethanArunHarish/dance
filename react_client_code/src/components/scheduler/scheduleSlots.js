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
import Moment from 'react-moment';
import createSchedulerAction from '../../actions/scheduler';
import EventAction from '../../actions/event';
import UserAction from '../../actions/student';
import SubCategoryAction from '../../actions/subCategory'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import './scheduler.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { setTimeout } from 'timers';


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};


var subCategory = [
    { "label": "Zumba", "name": "Zumba" },
    { "label": "Bollywood", "name": "Bollywood" },
    { "label": "Indian Classical", "name": "Indian Classical" },
    { "label": "Private Lesson", "name": "Private Lesson" }
]


class ScheduleSlotsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventList: [],
            eventData: '',
            categoryData: '',
            subCategoryData: '',
            userList: [],
            selected: [],
            categoryList: [],
            listOfStudent: [],
            selectedStudent: [],
            scheduleDetails: [],
            allotment: '',
            listOfEvents: [],
            subCategoryList: []
        }
        this.selectedEvent = this.selectedEvent.bind(this);
        this.selectedCategory = this.selectedCategory.bind(this);
        this.selectedUser = this.selectedUser.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.selectedScheduleAllot = this.selectedScheduleAllot.bind(this);
        this.scheduleAllotment = this.scheduleAllotment.bind(this);
        this.selectedSubCategory = this.selectedSubCategory.bind(this);
        this.handleCallbackByCategory = this.handleCallbackByCategory.bind(this);
        this.handleCallbackByEvent = this.handleCallbackByEvent.bind(this);
    }

    componentWillMount() {
        this.props.createSchedulerAction.getCategory();
        this.props.SubCategoryAction.getSubcategory();
    }

    componentWillReceiveProps(nextProps) {
        console.log('NEXTprops', nextProps)

        var listOfEvents;
        var listOfSchedule;
        if (nextProps.getSubCategory) {
            var subCategory = nextProps.getSubCategory.result;
            this.setState({ subCategoryList: subCategory })

        }
        if (nextProps.getEventByCategory) {
            listOfEvents = nextProps.getEventByCategory.result;
            this.setState({ listOfEvents: listOfEvents });
        }
        if (nextProps.getScheduleByEvent) {
            listOfSchedule = nextProps.getScheduleByEvent.result;
            this.setState({ scheduleDetails: listOfSchedule });
        }
        if (nextProps.getUserById) {
            var user = nextProps.getUserById.result;
            var listOfStudent = []
            user.forEach(function (entry) {
                if (entry.user_type === "USER") {
                    listOfStudent.push({
                        value: entry._id,
                        label: entry.firstName,
                    })
                }
            });

            this.setState({
                listOfStudent: listOfStudent
            })
        }
        if (nextProps.getCategory) {
            var categoryData = []
            var category = nextProps.getCategory.result;
            for (var i = 0; i < category.length; i++) {
                var buinesssId = category[i].business_id.business_status
                if (buinesssId == true) {
                    categoryData.push(category[i])
                    this.setState({ categoryList: categoryData });
                }
            }
        }


    };

    selectedEvent(obj) {
        this.setState({ eventData: obj.title });
        var categoryValue = localStorage.getItem("categoryId")
        var subCategory_id = localStorage.getItem("subCategory_id")
        var data = {
            "eventid": obj._id,
            "subCategory_id": subCategory_id,
            "category_id": categoryValue


        }
        this.props.createSchedulerAction.findScheduleByCategoryId(data, this.handleCallbackByCategory);
    }

    handleChangeStudent(value) {
        this.setState({
            selectedStudent: value
        })
    }
    handleCallbackByCategory(data) {
        console.log("data is fire on you", data)
        var data = data.data.result
        if (data.length < 1) {
            toast.error(" Schedules is not available")
        }

    }
    selectedCategory(obj) {

        this.state.userList = [];
        this.state.selectedStudent = [];
        localStorage.setItem("categoryId", obj._id)

        this.setState({ categoryData: obj.name });
    }
    handleCallbackByEvent(data) {
        console.log("data >>>>>>>", data.data.result)
        var data = data.data.result
        if (data.length < 1) {
            toast.error("Events is not available")
        }

    }
    selectedSubCategory(obj) {

        this.setState({ subCategoryData: obj.sub_category_level });
        var categoryValue = localStorage.getItem("categoryId")
        localStorage.setItem("subCategory_id", obj._id)
        console.log('category value==================>', categoryValue)
        var data = {
            "category_id": categoryValue,
            "subCategory_id": obj._id
        }
        this.props.EventAction.getEventByCategory(data, this.handleCallbackByEvent);
        var subCategory_id = localStorage.getItem("subCategory_id")
        var userdata = {
            "category_id": categoryValue,
            "sub_category_id": obj._id
        }
        this.props.createSchedulerAction.getUserById(userdata);
    }

    selectedScheduleAllot(obj) {
        this.setState({ allotment: obj });
    }

    scheduleAllotment() {
        var scheduleId = this.state.allotment._id;
        var students = this.state.selectedStudent
        var categoryValue = localStorage.getItem("categoryId")
        var subCategory_id = localStorage.getItem("subCategory_id")
        for (var i = 0; i < students.length; i++) {
            var data = {
                "hosts": students[i].value,
                "schedule_id": scheduleId,
                "paid_status": "PAID",
                "status": "CONFIRMED",
                "category_id": categoryValue,
                "subCategory_id": subCategory_id

            }
            this.props.createSchedulerAction.addScheduleDetails(data);
          
            setTimeout(function(){browserHistory.push('/ListOfScheduleDetails')}.bind(this),4000)
           
        }
    }

    selectedUser = (e, data) => {
    };

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <MuiThemeProvider>

                    <Card>
                        <center><CardTitle title="Schedule Allotment" /></center>
                        <CardText>
                            <div className="container">
                                <div className="form-horizontal" >
                                    <center>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-3'>
                                                    <div className='col-md-3'>
                                                        <SelectField

                                                            value={this.state.categoryData}
                                                            floatingLabelText="Select Category"
                                                            floatingLabelFixed={true}
                                                            hintText="Select Category"

                                                        >
                                                            {
                                                                this.state.categoryList.map((obj, index) => {
                                                                    return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.selectedCategory.bind(this, obj)} />
                                                                    )
                                                                })
                                                            }
                                                        </SelectField><br />

                                                    </div>
                                                     {this.state.categoryData.length === 0 ? "":
                                                    <div className='col-md-3 textboxAlign'>
                                                        <SelectField

                                                            value={this.state.subCategoryData}
                                                            floatingLabelText="Select Subcategory"
                                                            floatingLabelFixed={true}
                                                            hintText="Select Subcategory"

                                                        >
                                                            {
                                                                this.state.subCategoryList.map((obj, index) => {
                                                                    return (<MenuItem key={index} value={obj.sub_category_level} primaryText={obj.sub_category_level} onClick={this.selectedSubCategory.bind(this, obj)} />
                                                                    )
                                                                })
                                                            }
                                                        </SelectField><br />

                                                    </div>}

                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <center>
                                        {this.state.listOfEvents.length === 0 ? '' : <div className="form-group" >

                                            <div className="row">

                                                <SelectField
                                                    hintText="Select Event"
                                                    floatingLabelText=" Select Event"
                                                    value={this.state.eventData}
                                                    style={{ marginTop: '-10px' }}

                                                >
                                                    {
                                                        this.state.listOfEvents.map((obj, index) => {
                                                            return (<MenuItem key={index} value={obj.title} primaryText={obj.title} onClick={this.selectedEvent.bind(this, obj)} />
                                                            )
                                                        })
                                                    }
                                                </SelectField><br />

                                            </div>
                                        </div>}
                                    </center>
                                    {this.state.subCategoryData == '' ? '' : <div className="form-group col-xs-12" >
                                        <div className="col-md-8">
                                            {
                                                this.state.scheduleDetails.map((obj, index) => {
                                                    return (
                                                        <div className="col-md-4">
                                                            <Card>
                                                                <CardText><Moment format="YYYY/MM/DD">{obj.schedule_date}</Moment>
                                                                    <RadioButtonGroup name="shipSpeed" style={{ display: 'inline-flex', marginLeft: '60px' }}>
                                                                        <RadioButton
                                                                            value="reverse"
                                                                            label="Select schedule"
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
                                        </div>
                                        <div className="col-md-4">
                                            <label> select the user </label>
                                            <Select
                                                name="form-field-name"
                                                value={this.state.selectedStudent}
                                                options={this.state.listOfStudent}
                                                multi={true}
                                                onChange={this.handleChangeStudent}
                                                clearable={false}

                                            /><br />
                                            <RaisedButton label="Allotment" primary={true} className="pull-right" onClick={this.scheduleAllotment} />
                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </CardText>
                    </Card>
                </MuiThemeProvider>
                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log('state', state)
    return {
        //getEvent: state.event.getEventSuccess,
        getUser: state.student.getUserSuccess,
        getCategory: state.scheduler.getCategorySuccess,
        getUserById: state.scheduler.getUserByIdSuccess,
        getScheduleByEvent: state.scheduler.getListScheduleDetail,
        getEventByCategory: state.event.findEventSuccess,
        getSubCategory: state.subCategory.getSuccess

    };
}

function mapDispatchToProps(dispatch) {
    return {
        createSchedulerAction: bindActionCreators(createSchedulerAction, dispatch),
        EventAction: bindActionCreators(EventAction, dispatch),
        UserAction: bindActionCreators(UserAction, dispatch),
        SubCategoryAction: bindActionCreators(SubCategoryAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleSlotsComponent);