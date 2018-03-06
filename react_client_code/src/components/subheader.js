import React from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../asset/css/plugins.min.css';
import back from '../asset/img/back.svg';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
const iconStyles = {
  marginRight: 24,
};

export class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 3,
        };
        this.goBack=this.goBack.bind(this);
      }
    
      handleChange = (event, index, value) => this.setState({value});
      goBack(){
        browserHistory.goBack();
        
      }

    render() {
        return (
  <MuiThemeProvider>         

<Toolbar>
<ToolbarGroup firstChild={true}>
<span onClick={this.goBack}><i className="material-icons md-68"  style={{paddingLeft:'40%', fontSize:'350%'}}>keyboard_arrow_left</i></span>
</ToolbarGroup>
<ToolbarGroup>
  {/* <ToolbarTitle text="Options" /> */}
  <FontIcon className="muidocs-icon-custom-sort" />
  <ToolbarSeparator />
  {/* <RaisedButton label="REFRESH" primary={true} /> */}
  
</ToolbarGroup>
</Toolbar>
</MuiThemeProvider>

        );
    }
}

