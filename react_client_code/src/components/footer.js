import React from 'react';
import { browserHistory } from 'react-router';
import ScrollToTop from 'react-scroll-up'

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
style={{ paddingTop: '0px' }}
      <div>
        <aside className="ms-footbar">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ms-footer-col">
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Sitemap</h3>
                  <ul className="list-unstyled ms-icon-list three_cols">
                    <li>
                      <a href="index.html">
                        <i className="zmdi zmdi-home"></i> Home</a>
                    </li>
                    <li>
                      <a href="page-blog.html">
                        <i className="zmdi zmdi-edit"></i> Students</a>
                    </li>
                    <li>
                      <a href="page-blog.html">
                        <i className="zmdi zmdi-image-o"></i> Trainers</a>
                    </li>
                    <li>
                      <a href="portfolio-filters_sidebar.html">
                        <i className="zmdi zmdi-case"></i> Events</a>
                    </li>
                    <li>
                      <a href="page-timeline_left2.html">
                        <i className="zmdi zmdi-time"></i> Schedules</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">
                        <i className="zmdi zmdi-money"></i> Categories</a>
                    </li>
                    <li>
                      <a href="page-about.html">
                        <i className="zmdi zmdi-favorite-outline"></i> About Us</a>
                    </li>
                    <li>
                      <a href="page-team2.html">
                        <i className="zmdi zmdi-accounts"></i> Our Team</a>
                    </li>
                    <li>
                      <a href="page-services.html">
                        <i className="zmdi zmdi-face"></i> Services</a>
                    </li>
                    <li>
                      <a href="page-faq2.html">
                        <i className="zmdi zmdi-help"></i> FAQ</a>
                    </li>
                    <li>
                      <a href="page-login2.html">
                        <i className="zmdi zmdi-lock"></i> Login</a>
                    </li>
                    <li>
                      <a href="page-contact.html">
                        <i className="zmdi zmdi-email"></i> Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Subscribe</h3>
                  <p className="">You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth</p>
                  <form>
                    <div className="form-group label-floating mt-2 mb-1">
                      <div className="input-group ms-input-subscribe">
                        <label className="control-label" >
                          <i className="zmdi zmdi-email"></i> Email Adress</label>
                        <input type="email" id="ms-subscribe" className="form-control" /> </div>
                    </div>
                    <button className="ms-subscribre-btn" type="button">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-md-5 col-sm-7 ms-footer-col ms-footer-alt-color">
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title text-center mb-2">Last Events</h3>
                  <div className="ms-footer-media">
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img className="media-object media-object-circle" src="../assets/img/demo/p75.jpg" alt="..." /> </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth</a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                            <a href="javascript:void(0)">Design</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img className="media-object media-object-circle" src="../assets/img/demo/p75.jpg" alt="..." /> </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">Labore ut esse Duis consectetur expedita cumque ullamco ad dolor veniam velit</a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                            <a href="javascript:void(0)">News</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img className="media-object media-object-circle" src="../assets/img/demo/p75.jpg" alt="..." /> </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">voluptates deserunt ducimus expedita cumque quaerat molestiae labore</a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light"></i> August 18, 2016</span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light"></i>
                            <a href="javascript:void(0)">Productivity</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 ms-footer-col ms-footer-text-right">
                <div className="ms-footbar-block">
                  <div className="ms-footbar-title">
                    <span className="ms-logo ms-logo-white ms-logo-sm mr-1">KK</span>
                    <h3 className="no-m ms-site-title">Dance
                    <span>School</span>
                    </h3>
                  </div>
                  <address className="no-mb">
                    <p>
                      <i className="color-danger-light zmdi zmdi-pin mr-1"></i> 795 Folsom Ave, Suite 600</p>
                    <p>
                      <i className="color-warning-light zmdi zmdi-map mr-1"></i> Florida, FL 94107</p>
                    <p>
                      <i className="color-info-light zmdi zmdi-email mr-1"></i>
                      <a href="mailto:joe@example.com">example@domain.com</a>
                    </p>
                    <p>
                      <i className="color-royal-light zmdi zmdi-phone mr-1"></i>+34 123 456 7890 </p>
                    <p>
                      <i className="color-success-light fa fa-fax mr-1"></i>+34 123 456 7890 </p>
                  </address>
                </div>
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Social Media</h3>
                  <div className="ms-footbar-social">
                    <a href="javascript:void(0)" className="btn-circle btn-facebook">
                      <i className="zmdi zmdi-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-twitter">
                      <i className="zmdi zmdi-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-youtube">
                      <i className="zmdi zmdi-youtube"></i>
                    </a>

                    <a href="javascript:void(0)" className="btn-circle btn-google">
                      <i className="zmdi zmdi-google"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-instagram">
                      <i className="zmdi zmdi-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn-circle btn-github">
                      <i className="zmdi zmdi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <footer className="ms-footer">
          <div className="container">
            <h3>Copyright &copy; KK Dance School 2017</h3>
          </div>
        </footer>
        <ScrollToTop showUnder={160}>
                <div >
                    <span  className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i className="zmdi zmdi-long-arrow-up"></i> </span>
                  </div>
                </ScrollToTop>

      </div>
    );
  }
}

