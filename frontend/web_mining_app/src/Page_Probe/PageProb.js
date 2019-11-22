import React, { Component } from 'react';
import './PageProb.css';

class PageProbe extends Component {



componentDidMount() {}


render() {
    return (
      <div className="content">
      <div class="page-header card">
        <div class="row align-items-end">
            <div class="col-lg-8">
                <div class="page-header-title">
                    <i class="feather icon-box bg-c-blue"></i>
                    <div class="d-inline">
                        <h5>Prueba</h5>
                        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="row">
              <div className="col-md-12 col-xl-8">
                <div className="card sale-card">
                  <div className="card-header">
                    <h5>Data prueba</h5>
                  </div>
                  <div className="card-block">
                    <iframe 
                      className="frame-source"
                      title="Frame categoria noticias"
                      width="100%"
                      height="600" 
                      src="https://app.powerbi.com/view?r=eyJrIjoiOTI3Y2EzOWMtZDZhNS00NmU5LTlhMDktNWRkMjI5ZGNhY2FjIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}">
                      </iframe>
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

export default PageProbe;