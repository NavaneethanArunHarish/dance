import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import ReactTable from "react-table";
import { Button } from 'semantic-ui-react';
import "react-table/react-table.css";
import createSchedulerAction from '../../actions/scheduler';
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
import businessAction from '../../actions/business';
import ToggleButton from 'react-toggle-button';



class ListBusiness extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            businessDetails: [],
            selected: [],
            selectable: false
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectedItems = this.selectedItems.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentWillMount() {
        this.props.businessAction.getBusiness();
        localStorage.setItem('selectedBusiness', '');
    }

    componentWillReceiveProps(nextProps) {
        var business = nextProps.getBusiness
        this.setState({ businessDetails: business })
    };

    isSelected = (index) => {

        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    handleChange = (e, data) => {


        console.log("business details", this.state.businessDetails)
        var businessData = this.state.businessDetails;
        for (var i = 0; i < businessData.length; i++) {

            if (data._id == businessData[i]._id) {
                this.setState({ selectable: true })

                localStorage.setItem('ActiveBusinessID', data._id);
                console.log('the id ', data._id, businessData[i]._id)


            }
            else {
                this.setState({ selectable: false })
            }
        }

      
    };
    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };
    selectedItems(e, row) {
        var businessData = this.state.businessDetails;
        var key = e.target.value;
        var tempData = {}
        for (var i = 0; i < businessData.length; i++) {
            if (row.index === i) {
                businessData[i].business_status = !businessData[i].business_status;
                tempData.business_status = businessData[i].business_status;
                tempData._id = businessData[i]._id;
                this.props.businessAction.updateBusiness(tempData)

            }

        }

        this.setState({
            businessDetails: businessData
        })

    }

    handleEvent = (data) => {
        browserHistory.push({
            pathname: '/CreateEvent',
            state: {
                message: data
            }
        });
      };


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Business" /></center>
                            <ReactTable
                                data={this.state.businessDetails}
                                columns={[{
                                    columns: [{
                                        Header: <center>Business Name</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.name}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Open hours</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.openhours}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>City</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.city}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>State</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.state}
                                                </div>
                                            </center>
                                        )
                                    }]
                                },
                                {
                                    columns: [{
                                        Header: <center>Country</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.country}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Status</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    <ToggleButton value={row.original.business_status || false}
                                                        onClick={(e) => this.selectedItems(e, row)}
                                                    />
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Event</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                <Button negative onClick={() => this.handleEvent(row.original)}>
                                                    Create Event
                                                </Button>
                                                </div>
                                            </center>
                                        )
                                    }]
                                },

                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </div>
                    </Card>
                </MuiThemeProvider>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    console.log("state>>>>>>>>>", state);
    return {
        getBusiness: state.business.getSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        businessAction: bindActionCreators(businessAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBusiness);