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
        width: 200,
    },
};

export class TrainerMenu extends React.Component {
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
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);

    }

    handleChange1(event, index, value1) {
        if (value1 == 1) {
            browserHistory.push('/TrainerDashboard')
        }

    }
    handleChange2(event, index, value2) {
        if (value2 == 2) {
            browserHistory.push('/CreateCategory')
        }
    }
    handleChange3(event, index, value3) {
        if (value3 == 2) {
            browserHistory.push('/CreateBusiness')
        }

    }
    handleChange4(event, index, value4) {
        if (value4 == 2) {
            browserHistory.push('/CreateEvent')
        }
    }
    handleChange5(event, index, value5) {
        console.log('------------------', value5)
        // if(value5==2){
        //     browserHistory.push('/StudentRegister')
        // }


    }
    handleChange6 = (event, index, value6) => this.setState({ value6 });
    handleChange7 (event, index, value7) {
        if(value7==2){
            browserHistory.push('/CreateTrainer')
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
                {/* <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value2}
                        onChange={this.handleChange2}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Categories" />
                        <MenuItem value={2} primaryText="Create Category" />
                        <MenuItem value={3} primaryText="List of Categories" />
                    </DropDownMenu>
                </MuiThemeProvider> */}
                {/* <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value3}
                        onChange={this.handleChange3}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Business" />
                        <MenuItem value={2} primaryText="Create Business" />
                        <MenuItem value={3} primaryText="List of Business" />
                    </DropDownMenu>
                </MuiThemeProvider> */}
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value4}
                        onChange={this.handleChange4}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Events" />
                        {/* <MenuItem value={2} primaryText="Create Event" /> */}
                        <MenuItem value={3} primaryText="List of Events" />

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
                        {/* <MenuItem value={2} primaryText="Create Schedule" /> */}
                        <MenuItem value={3} primaryText="List of Schedules" />

                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value6}
                        onChange={this.handleChange6}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Students" />
                    </DropDownMenu>
                </MuiThemeProvider>
                {/* <MuiThemeProvider>

                    <DropDownMenu
                        value={this.state.value7}
                        onChange={this.handleChange7}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Trainers" />
                        <MenuItem value={2} primaryText="Create Trainer" />
                        <MenuItem value={3} primaryText="List Of Trainers" />
                    </DropDownMenu>
                </MuiThemeProvider> */}
            </div>


        );
    }
}