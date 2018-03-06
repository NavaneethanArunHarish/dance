import React from 'react';
import { browserHistory } from 'react-router';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';
import mock from '../asset/img/carousal0.png';

export class PanelBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-6">
                    <h1 className="font-light">“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.” </h1>
                    <p className="lead color-primary"><center>--Almost nobody dances sober, unless they happen to be insane--</center>
                    </p>
                    <div className="panel panel-light panel-flat">

                        <ul className="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-5" role="tablist">
                            <li className="wow fadeInDown animation-delay-4 active" role="presentation"><a href="#macos" aria-controls="macos" role="tab" data-toggle="tab" className="withoutripple"><i className="zmdi zmdi-info"></i> <span className="hidden-xs">Explore</span></a></li>
                        </ul>
                        <div className="panel-body">

                            <div className="tab-content mt-4">
                                <div role="tabpanel" className="tab-pane fade" id="windows">
                                    <div className="row">
                                        <div className="col-md-6 col-md-push-6">
                                            <img src={mock} alt="" className="img-responsive animated zoomIn animation-delay-8" />
                                        </div>
                                        <div className="col-md-6 col-md-pull-6">
                                            <h3 className="text-normal animated fadeInUp animation-delay-4">Bring Dance together your life</h3>
                                            <p className="lead lead-md animated fadeInUp animation-delay-6">Let us read, and let us dance; these two amusements will never do any harm to the world.</p>
                                            <p className="lead lead-md animated fadeInUp animation-delay-7">Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.</p>
                                            <div className="">
                                                <a href="javascript:void(0)" className="btn btn-info btn-raised animated zoomIn animation-delay-10"><i className="zmdi zmdi-info"></i> More info</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-raised mr-1 animated zoomIn animation-delay-12"><i className="zmdi zmdi-chart-donut"></i> Dive In </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane active in fade" id="macos">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={mock} alt="" className="img-responsive wow animated zoomIn animation-delay-8" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="text-normal wow animated fadeInUp animation-delay-4">Bring Dance together your life</h3>
                                            <p className="lead lead-md  wow animated fadeInUp animation-delay-6">Let us read, and let us dance; these two amusements will never do any harm to the world.</p>
                                            <p className="lead lead-md wow animated fadeInUp animation-delay-7">Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.</p>
                                            <div className="">
                                                <a href="javascript:void(0)" className="btn btn-info btn-raised wow animated zoomIn animation-delay-10"><i className="zmdi zmdi-info"></i> More info</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-raised mr-1 wow animated zoomIn animation-delay-12"><i className="zmdi zmdi-chart-donut"></i> Dive In </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="linux">
                                    <div className="row">
                                        <div className="col-md-6 col-md-push-6">
                                            <img src={mock} alt="" className="img-responsive animated zoomIn animation-delay-8" />
                                        </div>
                                        <div className="col-md-6 col-md-pull-6">
                                            <h3 className="text-normal animated fadeInUp animation-delay-4">Bring Dance together your life</h3>
                                            <p className="lead lead-md animated fadeInUp animation-delay-6">Let us read, and let us dance; these two amusements will never do any harm to the world.</p>
                                            <p className="lead lead-md animated fadeInUp animation-delay-7">Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.</p>
                                            <div className="">
                                                <a href="javascript:void(0)" className="btn btn-info btn-raised animated zoomIn animation-delay-10"><i className="zmdi zmdi-info"></i> More info</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-raised mr-1 animated zoomIn animation-delay-12"><i className="zmdi zmdi-chart-donut"></i> Dive In </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="android">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={mock} alt="" className="img-responsive animated zoomIn animation-delay-8" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="text-normal animated fadeInUp animation-delay-4">Bring Dance together your life</h3>
                                            <p className="lead lead-md  animated fadeInUp animation-delay-6">Let us read, and let us dance; these two amusements will never do any harm to the world.</p>
                                            <p className="lead lead-md animated fadeInUp animation-delay-7">Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.</p>
                                            <div className="">
                                                <a href="javascript:void(0)" className="btn btn-info btn-raised animated zoomIn animation-delay-10"><i className="zmdi zmdi-info"></i> More info</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-raised mr-1 animated zoomIn animation-delay-12"><i className="zmdi zmdi-chart-donut"></i> Dive In </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="ios">
                                    <div className="row">
                                        <div className="col-md-6 col-md-push-6">
                                            <img src={mock} alt="" className="img-responsive animated zoomIn animation-delay-8" />
                                        </div>
                                        <div className="col-md-6 col-md-pull-6">
                                            <h3 className="text-normal animated fadeInUp animation-delay-4">Bring Dance together your life</h3>
                                            <p className="lead lead-md animated fadeInUp animation-delay-6">Let us read, and let us dance; these two amusements will never do any harm to the world.</p>
                                            <p className="lead lead-md animated fadeInUp animation-delay-7">Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.</p>
                                            <div className="">
                                                <a href="javascript:void(0)" className="btn btn-info btn-raised animated zoomIn animation-delay-10"><i className="zmdi zmdi-info"></i> More info</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-raised mr-1 animated zoomIn animation-delay-12"><i className="zmdi zmdi-chart-donut"></i> Dive In </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

