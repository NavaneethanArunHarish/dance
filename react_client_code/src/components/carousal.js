import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';
import carousal1 from '../asset/img/carousal1.jpg';
import carousal2 from '../asset/img/carousal2.jpg';
import carousal3 from '../asset/img/carousal3.jpg';
import carousal4 from '../asset/img/carousal4.jpg';
import carousal5 from '../asset/img/carousal5.jpg';
import carousal0 from '../asset/img/carousal0.png';
import carousal6 from '../asset/img/carousal6.jpg';
import carousal7 from '../asset/img/carousal7.jpg';
import carousal8 from '../asset/img/carousal8.jpg';
import carousal9 from '../asset/img/carousal9.jpg';
import carousal10 from '../asset/img/carousal10.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;

const styless = {
    customWidth: {
        width: 200,
    },
};



export class Carousals extends React.Component {


    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <Carousel >
                    <div>
                        <img src={carousal6} />
                    </div>
                    <div>
                        <img src={carousal1} />
                    </div>
                    <div>
                        <img src={carousal5} />
                    </div>
                    <div>
                        <img src={carousal3} />
                    </div>
                    <div>
                        <img src={carousal4} />
                    </div>
                    <div>
                        <img src={carousal10} />
                    </div>
                    <div>
                        <img src={carousal0} />
                    </div>
                    <div>
                        <img src={carousal7} />
                    </div>
                    <div>
                        <img src={carousal8} />
                    </div>
                    <div>
                        <img src={carousal3} />
                    </div>
                    <div>
                        <img src={carousal10} />
                    </div>

                </Carousel>
            </div>

        );
    }
}

