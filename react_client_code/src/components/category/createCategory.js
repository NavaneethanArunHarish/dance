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
import createAction from '../../actions/category';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
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
import BusinessAction from '../../actions/business'

const style = {
    margin: 12,
};


class Category extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: '',
            business_id: '',
            business_name: '',
            sub_category: '',
            business: []

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleBusinessSelect = this.handleBusinessSelect.bind(this);
        this.subCategory = this.subCategory.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }

    componentWillMount() {
        console.log('this.props', this.props)
        this.props.BusinessAction.getBusiness();
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextprops value  ', nextProps)

        if (nextProps.getBusiness !== undefined) {
            this.setState({ business: nextProps.getBusiness })
        }



    }
    subCategory(event) {
        console.log('the value', event)
        this.setState({ sub_category: event.target.textContent })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    handleImageUpload(e) {
        const image = e.target.files[0];
        this.setState({ image: image });
    }

    handleBusinessSelect(obj) {
        console.log('busie=ness', obj._id)
        this.setState({ business_id: obj._id, business_name: obj.name })

    }
    handleCallback(data) {
        console.log('the data', data)
        if (data.data !== undefined) {
            if (data.data.code == '200') {
                toast.success("Category created Successfully");
                setTimeout(function name() {browserHistory.push("/ListCategory")}.bind(this), 4000)

            }
        } else {
            toast.error("Category created failed");
            setTimeout(function name() {browserHistory.push("/CreateCategory")}.bind(this), 4000)

        }


    }

    saveCategory() {
        var result = {
            "name": this.state.name,
            "description": this.state.description,
            "business_id": this.state.business_id
        }
        this.props.createAction.createCategory(result, this.handleCallback);

    }


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <MuiThemeProvider>
                    <Card>
                        <center>
                            <CardTitle title="Create Category" />
                            <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Name Of Category"
                                                            floatingLabelText="Category"
                                                            onChange={this.handleNameChange}
                                                            value={this.state.name}
                                                        />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Description"
                                                            floatingLabelText="Description"
                                                            onChange={this.handleDescriptionChange}
                                                            value={this.state.description}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <div className='col-md-offset-4'>


                                                    {/* <div className='col-md-3' style={{}}>
                                                        <SelectField
                                                            value={this.state.sub_category}
                                                            hintText="Select Sub Category"
                                                        >
                                                            <MenuItem value="BEGINNER" primaryText="BEGINNER" onClick={this.subCategory} />
                                                            <MenuItem value="INTERMEDIATE" primaryText="INTERMEDIATE" onClick={this.subCategory} />
                                                            <MenuItem value="ADVANCED" primaryText="ADVANCED" onClick={this.subCategory} />

                                                        </SelectField>
                                                    </div> */}
                                                    <div className='col-md-3'>
                                                        <SelectField
                                                            value={this.state.business_name}
                                                            hintText="Select Business ID"
                                                        >
                                                            {this.state.business.map((obj, i) => {
                                                                return (<MenuItem value={obj.name} key={i} primaryText={obj.name} onClick={this.handleBusinessSelect.bind(this, obj)} />)
                                                            })}


                                                        </SelectField>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div style={{ marginLeft: "23%" }} className="col-md-6">
                                                <RaisedButton label="Create" onClick={this.saveCategory} primary={true} style={style} />
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
    console.log('state', state)
    return {
        createCategory: state.createCategory,
        errorCategory: state.category.createRejected,
        getResponse: state.category.createSuccess,
        getBusiness: state.business.getSuccess

    };
}

function mapDispatchToProps(dispatch) {
    return {
        createAction: bindActionCreators(createAction, dispatch),
        BusinessAction: bindActionCreators(BusinessAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);