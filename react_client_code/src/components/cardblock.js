import React from 'react';
import { browserHistory } from 'react-router';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';

export class CardBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <h2 className="text-center color-primary mb-2 wow fadeInDown animation-delay-4">Our Classes</h2>
                    <p className="lead text-center aco wow fadeInDown animation-delay-5 mw-800 center-block mb-4"> Choose Your Style</p>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-4">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-info"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-info">JAZZ</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-info ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-8">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-warning"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-warning">FOLK</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-warning ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-10">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-success"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-success">CLASSIC</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-success ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-6">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg  color-danger"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-danger">POP</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-danger ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-6">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg  color-danger"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-danger">WESTERN</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-danger ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-10">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-success"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-success">ROCK</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-success ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-8">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-warning"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-warning">MUSICAL</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-warning ">Dive In</a>
                        </div>
                    </div>
                    <div className="ms-feature col-lg-3 col-md-6 col-sm-6 card wow flipInX animation-delay-4">
                        <div className="text-center card-block">
                            <span className="ms-icon ms-icon-circle ms-icon-xxlg color-info"><i className="zmdi zmdi-play"></i></span>
                            <h4 className="color-info">INDIAN</h4>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                            <a href="javascript:void(0)" className="btn btn-info ">Dive In</a>
                        </div>
                    </div>


                </div>

                <div className="wrap wrap-achu mt-6">
                    <div className="container">
                        <h2 className="text-center text-light mb-6 wow fadeInDown animation-delay-5" style={{ color: "#ffa117" }} >Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.</h2>
                        <div className="row">
                            <div className="col-md-6 col-md-push-6 mb-4  center-block">
                            </div>
                            <div className="col-md-6 col-md-pull-6 pr-6">
                                <p className="wow fadeInLeft animation-delay-6" style={{ color: "#ffa117" }} >There is a vitality, a life force, an energy, a quickening that is translated through you into action, and because there is only one of you in all time, this expression is unique. And if you block it, it will never exist through any other medium and will be lost.</p>
                                <p className="wow fadeInLeft animation-delay-7" style={{ color: "#ffa117" }} >A fit, healthy body—that is the best fashion statement</p>
                                <p className="wow fadeInLeft animation-delay-8" style={{ color: "#ffa117" }} >Faeries, come take me out of this dull world,
For I would ride with you upon the wind,
Run on the top of the dishevelled tide,
And dance upon the mountains like a flame.</p>
                                <div className="text-center">
                                    <a href="javascript:void(0)" className="btn btn-warning btn-raised mr-1 wow flipInX animation-delay-14"><i className="zmdi zmdi-chart-donut"></i> Dive In Now </a>
                                    <a href="javascript:void(0)" className="btn btn-info btn-raised wow flipInX animation-delay-16"><i className="zmdi zmdi-case"></i> Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

