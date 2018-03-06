import React from 'react';
import { browserHistory } from 'react-router';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

const styless = {
    customWidth: {
        width: 160,
    },
};

export class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 1,
            value3: 1,
            value4: 1,
            value5: 1,
            value6: 1,
            value7: 1,
            value8: 1
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        this.handleChange8 = this.handleChange8.bind(this);

    }

    handleChange1(event, index, value1) {
        if (value1 == 1) {
            browserHistory.push('/Dashboard')
        }

    }
    handleChange2(event, index, value2) {
        if (value2 == 2) {
            browserHistory.push('/CreateCategory')
        }
        if (value2 == 3) {
            browserHistory.push('/ListCategory')
        }

    }
    handleChange3(event, index, value3) {
        if (value3 == 2) {
            browserHistory.push('/CreateBusiness')
        }
        if (value3 == 3) {
            browserHistory.push('/ListBusiness')
        }

    }
    handleChange4(event, index, value4) {
        if (value4 == 2) {
            browserHistory.push('/ListOfEvent')
        }
    }
    handleChange5(event, index, value5) {
        console.log('------------------', value5)

        if (value5 == 2) {
            console.log('---2---------------', value5)
            browserHistory.push('/ListOfSchedule')//
        }

        if (value5 == 3) {
            console.log('---3---------------', value5)
            browserHistory.push('/ScheduleSlots')//
        }

        if (value5 == 4) {
            console.log('---4---------------', value5)
            browserHistory.push('/AttendenceSheet')//
        }

        if (value5 == 5) {
            console.log('---5---------------', value5)
            browserHistory.push('/AttendanceMetrics')//
        }



    }
    handleChange6(event, index, value6) {
        if (value6 == 2) {
            browserHistory.push('/CreateAssets')
        }
        if (value6 == 3) {
            browserHistory.push('/ListAssets')
        }
    }
    handleChange7(event, index, value7) {
        if (value7 == 2) {
            browserHistory.push('/StudentRegister')
        }
        if (value7 == 3) {
            browserHistory.push('/ListStudent')
        }


    }
    handleChange8(event, index, value8) {
        if (value8 == 2) {
            browserHistory.push('/CreateTrainer')
        }
        if (value8 == 3) {
            browserHistory.push('/ListTrainer')
        }

    }


    render() {
        return (
            <div>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value1}
                        onChange={this.handleChange1}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Home" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value2}
                        onChange={this.handleChange2}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Categories" />
                        <MenuItem value={2} primaryText="Create Category" />
                        <MenuItem value={3} primaryText="List Categories" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value3}
                        onChange={this.handleChange3}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Business" />
                        <MenuItem value={2} primaryText="Create Business" />
                        <MenuItem value={3} primaryText="List Business" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value4}
                        onChange={this.handleChange4}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Events" />
                        <MenuItem value={2} primaryText="List Events" />

                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value5}
                        onChange={this.handleChange5}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Schedules" />
                        <MenuItem value={2} primaryText="List  Schedules" />
                        <MenuItem value={3} primaryText="Schedule Slots" />
                        <MenuItem value={4} primaryText="Attendance Sheet" />
                        <MenuItem value={5} primaryText="Attendance Metrics" />

                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value6}
                        onChange={this.handleChange6}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Assets" />
                        <MenuItem value={2} primaryText="Create Asset" />
                        <MenuItem value={3} primaryText="List  Assets" />

                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value7}
                        onChange={this.handleChange7}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Students" />
                        <MenuItem value={2} primaryText="Student Register" />
                        <MenuItem value={3} primaryText="List Students" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value8}
                        onChange={this.handleChange8}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Trainers" />
                        <MenuItem value={2} primaryText="Create Trainer" />
                        <MenuItem value={3} primaryText="List Trainers" />
                    </DropDownMenu>
                </MuiThemeProvider>

            </div>


        );
    }
}