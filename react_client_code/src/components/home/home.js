import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ScrollToTop from 'react-scroll-up'
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { Navigation } from '../navigation';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';

import axios from 'axios';



class Home extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
        localStorage.setItem('token', '');
        localStorage.setItem('userType', '');
    }

    trainerModule() {
        browserHistory.push('/login')
    }

    studentModule() {
        browserHistory.push('/student')
    }

    render() {
        return (
            <div>
                <HomeHeader />
                {/* <Navigation /> */}
                <Carousals />
                <CardBlock />
                <PanelBlock />
                <FeedBack />
                <Activity />
                {/* <Paperr /> */}
                <ScrollToTop showUnder={160}>
                <div >
                    <span  className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i className="zmdi zmdi-long-arrow-up"></i> </span>
                  </div>
                </ScrollToTop>
                <Footer />


            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);