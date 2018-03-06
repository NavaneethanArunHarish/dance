import React from 'react';
import ReactTable from "react-table";
import Moment from 'react-moment';
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
import { Button } from 'semantic-ui-react';
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
import AssetAction from '../../actions/assets';
import mock from '../../asset/img/delete.png';


class ListAssets extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      assetsDetails: [],
      selected: [],
    }
    this.isSelected = this.isSelected.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.AssetAction.getAssets();
    localStorage.setItem('selectedAssets', '');
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    var assets = nextProps.getAssets.result;

    this.setState({ assetsDetails: assets })
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
    localStorage.setItem('selectedBusiness', JSON.stringify(data));
    browserHistory.push('/CreateAssets')
  };

  handleDelete = (data) => {
    var userData = this.state.assetsDetails;
    var id = data.original._id;
    for (var key = 0; key < userData.length; key++) {
        if (id === userData[key]._id) {
            this.state.assetsDetails.splice(key,1);
            this.setState({assetsDetails: this.state.assetsDetails});
        }
    }
    var id = data.original._id;
    this.props.AssetAction.deleteAssets(id);
  };


  render() {
    return (
      <div>
        <HomeHeader />
        <AdminMenu />
        <MuiThemeProvider>
          <Card>
            <div className="container">
              <center><CardTitle title="List of Assets" /></center>

              <ReactTable
                data={this.state.assetsDetails}
                columns={[{
                  columns: [{
                    Header: <center>Assets Name</center>,
                    Cell: row => (
                      <center>
                          <div>
                              {row.original.asset_name}
                          </div>
                      </center>
                  )
                  }]
                }, {
                  columns: [{
                    Header: <center>Assets Cost</center>,
                    Cell: row => (
                      <center>
                          <div>
                              {row.original.asset_cost}
                          </div>
                      </center>
                  )
                  }]
                }, {
                  columns: [{
                    Header: <center>Purchase Cost</center>,
                    Cell: row => (
                      <center>
                          <div>
                              {row.original.purchase_cost}
                          </div>
                      </center>
                  )
                  }]
                },
                {
                  columns: [{
                    Header: 'Revenue for Business',
                    Cell: row => (
                      <center>
                          <div>
                              {row.original.revenue_for_business}
                          </div>
                      </center>
                  )
                  }]
                },
                {
                  columns: [{
                    Header: <center>Orgin Date</center>,
                    Cell: row => (
                      <center>
                          <div>
                              <Moment format="YYYY/MM/DD">{row.original.origin_date}</Moment>
                          </div>
                      </center>
                  )
                  }]
                },
                {
                  columns: [{
                    Header: <center>Expire Date</center>,
                    Cell: row => (
                      <center>
                          <div>
                          <Moment format="YYYY/MM/DD">{row.original.expire_date}</Moment>
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
  return {
    getAssets: state.assets.getAssetSuccess,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    AssetAction: bindActionCreators(AssetAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAssets);