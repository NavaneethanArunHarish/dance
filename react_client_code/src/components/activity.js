import React from 'react';
import { browserHistory } from 'react-router';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';



import  bokeo  from '../asset/img/dance/bokeh.jpg';
import  dance1  from '../asset/img/dance/dance.jpg';
import  dance2  from '../asset/img/dance/dancing-woman.jpg';
import  dance3  from '../asset/img/dance/dance-class-for-women.jpg';

export class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
          <div>
          <div className="container mt-6">
    <h2 className="text-center color-primary mb-4">Our Latest Works</h2>
    <div className="owl-dots"></div>
    <div className="owl-carousel owl-theme">
             <div className="card card-dark-inverse animation-delay-8" >
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src={dance1} style={{width:'100%', height:'1%'}} alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-info btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-10">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src={dance2} style={{width:'100%', height:'1%'}} alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-6">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src={dance3} style={{width:'100%', height:'1%'}} alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
       
</div>


</div>
</div>
        
        );
    }
}
