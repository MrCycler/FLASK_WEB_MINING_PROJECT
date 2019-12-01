import React, { Component } from 'react';
import './PageSrc.css';
import Slider from '../Layouts/Slider/Slider';
import Motivation from '../Layouts/Motivation/Motivation'
import Footers from '../Layouts/Footers/Footers';
class PageSource extends Component {



componentDidMount() {}


render() {
    return (
      <div className="content">
        <div className="page-header card">
          <div className="row align-items-end">
              <div className="col-lg-8">
                  <div className="page-header-title">
                      <i className="feather icon-box bg-c-blue"></i>
                      <div className="d-inline">
                          <h5>Dashboard</h5>
                          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <Slider/>
        <Motivation/>
        <Footers/>
      </div>
    );
  }
}

export default PageSource;