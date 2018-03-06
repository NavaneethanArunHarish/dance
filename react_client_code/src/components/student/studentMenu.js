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

export class StudentMenu extends React.Component {
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
            value8: 1,
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

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });
    handleChange3 = (event, index, value3) => this.setState({ value3 });
    handleChange4 = (event, index, value4) => this.setState({ value4 });
    handleChange5(event, index, value5) {
        console.log('------------------', value5)
        if (value5 == 2) {
            browserHistory.push('/StudentRegister')
        }


    }
    handleChange6 = (event, index, value6) => this.setState({ value6 });
    handleChange7 = (event, index, value7) => this.setState({ value7 });
    handleChange8 = (event, index, value8) => this.setState({ value8 });

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
                        value={this.state.value3}
                        onChange={this.handleChange3}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Events" />
                    </DropDownMenu>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <DropDownMenu
                        value={this.state.value4}
                        onChange={this.handleChange4}
                        style={styless.customWidth}
                        className="testing"
                        autoWidth={false}>
                        <MenuItem value={1} primaryText="Schedules" />
                    </DropDownMenu>
                </MuiThemeProvider>
            </div>
        );
    }
}