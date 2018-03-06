import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
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
import category from '../../actions/category';
import { Button } from 'semantic-ui-react'
import mock from '../../asset/img/delete.png';

class ListCategory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryDetails: [],
            selected: [],
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        this.props.category.getCategory();
        localStorage.setItem('selectedCategory', '');
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextPROPS', nextProps)
        var category = nextProps.getCategory.result;
        this.setState({
            categoryDetails: category,
        });
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
        localStorage.setItem('selectedCategory', JSON.stringify(data));
        browserHistory.push('/CreateCategory')
    };

    handleDelete = (data) => {
        var userData = this.state.categoryDetails;
        var id = data.original._id;
        for (var key = 0; key < userData.length; key++) {
            if (id === userData[key]._id) {
                this.state.categoryDetails.splice(key,1);
                this.setState({categoryDetails: this.state.categoryDetails});
            }
        }
        var id = data.original._id;
        this.props.category.deleteCategory(id);
    };


    render() {
        return (
            <div>
                <HomeHeader />
                <AdminMenu />
                <MuiThemeProvider>
                    <Card>
                        <div className="container">
                            <center><CardTitle title="List Of Category" /></center>

                            <ReactTable
                                data={this.state.categoryDetails}
                                
                                columns={[{ 
                                    columns: [{
                                        Header: <center>Category Name</center>,
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
                                        Header: <center>Description</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.description}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>BusinessName</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    {row.original.business_id.name}
                                                </div>
                                            </center>
                                        )
                                    }]
                                }, {
                                    columns: [{
                                        Header: <center>Remove</center>,
                                        Cell: row => (
                                            <center>
                                                <div>
                                                    <Button negative onClick={() => this.handleDelete(row)}>
                                                    <img src={mock} alt="" className="img-responsive" />
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
    console.log("state>>>>>>>>>" + state);
    return {
        getCategory: state.category.getSuccess,
        deleteCategory: state.category.deleteSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        category: bindActionCreators(category, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);