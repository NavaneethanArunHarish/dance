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
import createAction from '../../actions/business';
import UserAction from '../../actions/student';
import SubCategoryAction from '../../actions/subCategory'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import './business.css';
import mock from '../../asset/img/carousal2.jpg';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { AdminMenu } from '../../components/adminPage/adminMenu';
import { SubHeader } from '../subheader';

import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import FlatButton from 'material-ui/FlatButton'
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const style = {
    margin: 12,
};


class CreateBusiness extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            name: '',
            building: '',
            street: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            phone: '',
            landline: '',
            openhours: '',
            owner: '',
            value: '',
            subCategory: '',
            subCategory_id: '',
            subCategoryList: []

        }
        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleLandlineChange = this.handleLandlineChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOwnerSelect = this.handleOwnerSelect.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePinCodeChange = this.handlePinCodeChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleOpenHoursChange = this.handleOpenHoursChange.bind(this);
        this.createBusiness = this.createBusiness.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.selectSubCategory = this.selectSubCategory.bind(this);
    }

    componentWillMount() {

        this.props.UserAction.getUser();
        this.props.SubCategoryAction.getSubcategory();
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
        var user = nextProps.getUser.result;
        for (var i = 0; i < user.length; i++) {
            if (user[i].user_type === "ADMIN") {
                var name = user[i].firstName + ' ' + user[i].lastName;
                this.setState({ value: name });
            }
        }
        if (nextProps.getSubCategory) {
            var subCategory = nextProps.getSubCategory.result;
            this.setState({ subCategoryList: subCategory })

        }
    };

    selectSubCategory(e) {
        this.setState({ subCategory: e.sub_category_level, subCategory_id: e._id })

    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });

    }

    handleBuildingChange(e) {
        this.setState({
            building: e.target.value
        });

    }
    handleStateChange(e) {
        this.setState({
            state: e.target.value
        });

    }
    handleStreetChange(e) {
        this.setState({
            street: e.target.value
        });

    }
    handleCityChange(e) {
        this.setState({
            city: e.target.value
        });

    }
    handleCountryChange(e) {
        this.setState({
            country: e.target.value
        });

    }
    handlePinCodeChange(e) {
        this.setState({
            pincode: e.target.value
        });
    }
    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value
        });
    }
    handleLandlineChange(e) {
        this.setState({
            landline: e.target.value
        });

    }

    handleOpenHoursChange(e) {
        this.setState({
            openhours: e.target.value
        });

    }
    handleOwnerSelect(e) {
        // this.setState({
        //     owner: e.target.value
        // });

    }
    handleImageUpload(e) {

    }
    handleCallback(data) {
        console.log('data', data)
        if (data.data !== undefined) {
            if (data.data.code == '200') {
                toast.success("Business created Successfully");
                setTimeout(function () { browserHistory.push('/ListBusiness') }.bind(this), 3000);

            }
        }
        else {

            toast("Business Failed");
            setTimeout(function () { browserHistory.push('/CreateBusiness') }.bind(this), 3000);
        }


    }

    createBusiness() {
        var result = {
            "name": this.state.name,
            "building": this.state.building,
            "street": this.state.street,
            "city": this.state.city,
            "state": this.state.state,
            "country": this.state.country,
            "pincode": this.state.pincode,
            "phone": this.state.phone,
            "landline": this.state.landline,
            "openhours": this.state.openhours,
           
        }
        this.props.createAction.createBusiness(result, this.handleCallback);
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
                    <Card>
                        <center>
                            <CardTitle title="Create Business" />
                            <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            //hintText="Enter Name Of Business"
                                                            floatingLabelText="Name"
                                                            onChange={this.handleNameChange}
                                                            value={this.state.name}
                                                        />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Building"
                                                            floatingLabelText="Building"
                                                            onChange={this.handleBuildingChange}
                                                            value={this.state.building}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Street"
                                                            floatingLabelText="Street"
                                                            onChange={this.handleStreetChange}
                                                            value={this.state.street}
                                                        /><br />

                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter City"
                                                            floatingLabelText="City"
                                                            onChange={this.handleCityChange}
                                                            value={this.state.city}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter State"
                                                            floatingLabelText="State"
                                                            onChange={this.handleStateChange}
                                                            value={this.state.state}
                                                        />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Country"
                                                            floatingLabelText="Country"
                                                            onChange={this.handleCountryChange}
                                                            value={this.state.country}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Pincode"
                                                            floatingLabelText="Pincode"
                                                            onChange={this.handlePinCodeChange}
                                                            value={this.state.pincode}
                                                        />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Phone No"
                                                            floatingLabelText="Phone"
                                                            onChange={this.handlePhoneChange}
                                                            value={this.state.phone}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <label style={{ marginRight: '8%' }}>Upload Logo </label>
                                                        <FlatButton label="Choose file" labelPosition="before">
                                                            <input type="file" onChange={this.handleImageUpload} />
                                                        </FlatButton>
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <SelectField
                                                            hintText="Select Owner"
                                                            value={this.state.value}
                                                            disabled={true}
                                                        >
                                                            <MenuItem value={this.state.value} primaryText={this.state.value} />
                                                        </SelectField>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Landline"
                                                            floatingLabelText="Landline"
                                                            onChange={this.handleLandlineChange}
                                                            value={this.state.landline}
                                                        /><br />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Open Hours"
                                                            floatingLabelText="Openhours"
                                                            onChange={this.handleOpenHoursChange}
                                                            value={this.state.openhours}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="form-group" >
                                            <div style={{ marginLeft: "23%" }} className="col-md-6">
                                                <RaisedButton label="Create" onClick={this.createBusiness} primary={true} style={style} />
                                                <RaisedButton label="Cancel" onClick={browserHistory.goBack} secondary={true} style={style} />
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
    console.log('theis state ', state)
    return {
        createBusiness: state.createBusiness,
        businessResponse: state.business.createSuccess,
        errorResponse: state.business.createRejected,
        getSubCategory: state.subCategory.getSuccess,
        getUser: state.student.getUserSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createAction: bindActionCreators(createAction, dispatch),
        UserAction: bindActionCreators(UserAction, dispatch),
        SubCategoryAction: bindActionCreators(SubCategoryAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBusiness);