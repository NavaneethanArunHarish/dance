import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import createAction from '../../actions/assets';
import UserAction from '../../actions/student';
import businessAction from '../../actions/business';
import category from '../../actions/category';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import mock from '../../asset/img/carousal9.jpg';
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
import { SubHeader } from '../subheader';
import FlatButton from 'material-ui/FlatButton'
import AlertContainer from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const style = {
    margin: 12,
};

var assertList = [
    { "label": "HUMAN", "name": "HUMAN" },
    { "label": "STATIC", "name": "STATIC" }
]

class Assets extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            asset_name: '',
            asset_type: '',
            business_id: '',
            business_name: '',
            category_id: '',
            category_name: '',
            asset_cost: '',
            user_asset_id: '',
            user_asset_name: '',
            purchase_cost: '',
            origin_date: '',
            expire_date: '',
            revenue_for_business: '',
            reccuring_cost: '',
            userList: [],
            categoryList: [],
            businessList: []

        }
        this.changeAssetName = this.changeAssetName.bind(this);
        this.saveAssets = this.saveAssets.bind(this);
        this.changeAssertType = this.changeAssertType.bind(this);
        this.changeAssetCost = this.changeAssetCost.bind(this);
        this.changeBusinessId = this.changeBusinessId.bind(this);
        this.handleCategorySelect = this.handleCategorySelect.bind(this);
        this.changeExpireDate = this.changeExpireDate.bind(this);
        this.changeOriginDate = this.changeOriginDate.bind(this);
        this.changePurchaseCost = this.changePurchaseCost.bind(this);
        this.changeRevenueForBusiness = this.changeRevenueForBusiness.bind(this);
        this.changeRecurringCost = this.changeRecurringCost.bind(this);
        this.selectedUser = this.selectedUser.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }

    componentWillMount() {
        this.props.UserAction.getUser();
        this.props.category.getCategory();
        this.props.businessAction.getBusiness();
    }


    componentWillReceiveProps(nextProps) {
        console.log('assets nextprops', nextProps)
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
        if (nextProps.getBusiness != undefined) {
            var business = nextProps.getBusiness
            this.setState({ businessList: business })
        }
        if (nextProps.getUser !== undefined) {
            var user = nextProps.getUser.result;
            for (var i = 0; i < user.length; i++) {
                if (user[i].user_type === "USER") {
                    if (this.state.userList.indexOf(user[i]) === -1) {
                        this.state.userList.push(user[i]);
                    }
                }
            }
        }

    };

    changeAssetName(e) {
        this.setState({ asset_name: e.target.value });
    }

    changeAssetCost(e) {
        this.setState({ asset_cost: e.target.value });

    }

    changeAssertType(e) {
        console.log('the value is', e)
        this.setState({ asset_type: e.name });

    }

    changeBusinessId(e) {
        console.log('the value is', e)
        this.setState({ business_id: e._id, business_name: e.name });

    }
    handleCategorySelect(data) {
        console.log('the target value', data.name);
        this.setState({ category_id: data._id, category_name: data.name })
    }
    changeExpireDate = (event, date) => {
        this.setState({
            expire_date: date,
        });
    };

    changeOriginDate = (event, date) => {
        this.setState({
            origin_date: date,
        });
    };

    changePurchaseCost(e) {
        this.setState({ purchase_cost: e.target.value });

    }
    changeRevenueForBusiness(e) {
        this.setState({ revenue_for_business: e.target.value });

    }
    changeRecurringCost(e) {
        this.setState({ reccuring_cost: e.target.value });

    }

    selectedUser(obj) {
        console.log("obj", obj.firstName)
        this.setState({ user_asset_id: obj._id, user_asset_name: obj.firstName });
    }
    handleCallback(data) {
        if (data.data !== undefined) {
            if (data.data.code == '200') {
                toast.success("Assets created Successfully");
                setTimeout(function () { browserHistory.push('/ListAssets') }.bind(this), 3000);
            }
        } else {
            toast.error("Assets Failed");
            setTimeout(function () { browserHistory.push('/CreateAssets') }.bind(this), 3000);

        }




    }
    saveAssets() {
        var result = {
            "asset_name": this.state.asset_name,
            "asset_type": this.state.asset_type,
            "business_id": this.state.business_id,
            "category_id": this.state.category_id,
            "asset_cost": this.state.asset_cost,
            "user_asset_id": this.state.user_asset_id,
            "purchase_cost": this.state.purchase_cost,
            "origin_date": this.state.origin_date,
            "expire_date": this.state.expire_date,
            "revenue_for_business": this.state.revenue_for_business,
            "recurring_cost": this.state.reccuring_cost

        }
        this.props.createAction.createAssets(result, this.handleCallback);
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
                            <img src={mock} alt="" className="img-responsive wow animated zoomIn animation-delay-8" style={{ height: '670px', width: '100%' }} />
                        </div>
                        <div className="col-md-6">
                            <Card>
                                <center>
                                    <CardTitle title="Create Asset" />
                                    <CardText>
                                        <div className="form-horizontal" >
                                            <fieldset>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <TextField
                                                                    hintText="Enter Asset Name"
                                                                    floatingLabelText="Asset Name"
                                                                    onChange={this.changeAssetName}
                                                                    value={this.state.asset_name}
                                                                />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Asset Cost"
                                                                    floatingLabelText="Asset Cost"
                                                                    onChange={this.changeAssetCost}
                                                                    value={this.state.asset_cost}
                                                                /><br />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <SelectField value={this.state.category_name} hintText="Select Category">
                                                                    {this.state.categoryList.map((obj, index) => {
                                                                        return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.handleCategorySelect.bind(this, obj)} />)
                                                                    })
                                                                    }
                                                                </SelectField> <br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <SelectField value={this.state.asset_type} hintText="Enter Assert">
                                                                    {
                                                                        assertList.map((obj, index) => {
                                                                            return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.changeAssertType.bind(this, obj)} />)
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
                                                                <SelectField value={this.state.business_name} hintText="Select Business">
                                                                    {
                                                                        this.state.businessList.map((obj, index) => {
                                                                            return (<MenuItem key={index} value={obj.name} primaryText={obj.name} onClick={this.changeBusinessId.bind(this, obj)} />)
                                                                        })
                                                                    }
                                                                </SelectField><br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <SelectField
                                                                    hintText="Select User"
                                                                    value={this.state.user_asset_name}
                                                                >
                                                                    {
                                                                        this.state.userList.map((obj, index) => {
                                                                            return (<MenuItem value={obj.firstName} key={index} primaryText={obj.firstName} onClick={this.selectedUser.bind(this, obj)} />
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
                                                                    hintText="Enter Purchase Cost"
                                                                    multiLine={true}
                                                                    rows={1}
                                                                    rowsMax={4}
                                                                    onChange={this.changePurchaseCost}
                                                                    value={this.state.purchase_cost}
                                                                /><br />
                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <TextField
                                                                    hintText="Enter Revenue For Business"
                                                                    multiLine={true}
                                                                    rows={1}
                                                                    rowsMax={4}
                                                                    onChange={this.changeRevenueForBusiness}
                                                                    value={this.state.revenue_for_business}
                                                                /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <div className='col-md-offset-1'>
                                                            <div className='col-md-3'>
                                                                <DatePicker hintText="Origin Date" mode="landscape" onChange={this.changeOriginDate} />

                                                            </div>
                                                            <div className='col-md-3 textboxAlign'>
                                                                <DatePicker hintText="Expire Date" mode="landscape" onChange={this.changeExpireDate} />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div className="row">
                                                        <TextField
                                                            hintText="Enter Revenue For Business"
                                                            multiLine={true}
                                                            rows={1}
                                                            rowsMax={4}
                                                            onChange={this.changeRecurringCost}
                                                            value={this.state.reccuring_cost}
                                                        /><br />
                                                    </div>
                                                </div>
                                                <div className="form-group" >
                                                    <div style={{ marginLeft: "25%" }} className="col-md-6">
                                                        <RaisedButton label="Create" primary={true} onClick={this.saveAssets} />
                                                        <RaisedButton label="Cancel" secondary={true} onClick={browserHistory.goBack} style={{ marginLeft: '10px' }} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </CardText>
                                </center>
                            </Card>
                        </div>
                    </div>
                </MuiThemeProvider>

                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log('this.state', state)
    return {
        createAssets: state.createAssets,
        assetResponse: state.assets.createSuccess,
        errorResponse: state.assets.createRejected,
        getUser: state.student.getUserSuccess,
        getCategory: state.category.getSuccess,
        getBusiness: state.business.getSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createAction: bindActionCreators(createAction, dispatch),
        UserAction: bindActionCreators(UserAction, dispatch),
        category: bindActionCreators(category, dispatch),
        businessAction: bindActionCreators(businessAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assets);