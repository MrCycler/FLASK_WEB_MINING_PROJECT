import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import FontAwesome from 'react-fontawesome';
//import './Footers.css';

import Background from '../../assets/unicat/images/footer_background.png';
import Mobile1 from '../../assets/unicat/images/mobile_1.png';
import Mobile2 from '../../assets/unicat/images/mobile_2.png';


class Footers extends Component {
  constructor(){
    super();
    this.state = {
        numerotamaño:[],
        numerotamaño2:[],
    }}

    componentDidMount() {
     
    }

  
    render() {

      return (
        <footer className="footer">
          <div className="footer_background"></div>
          <div className="container">
            <div className="row footer_row">
              <div className="col">
                <div className="footer_content">
                  <div className="row">

                    <div className="col-lg-4 footer_col">                
            
                      <div className="footer_section footer_about">
                        <div className="footer_logo_container">
                          <a href="#">
                            <div className="footer_logo_text">TPM<span> Analytics</span></div>
                          </a>
                        </div>
                        <div className="footer_about_text">
                          <p>Análisis de las tendencias de publicaciones de los medios peruanos.</p>
                        </div>
                        <div className="footer_social">
                          <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-lg-4 footer_col">
                
                      <div className="footer_section footer_contact">
                        <div className="footer_title">Contact Us</div>
                        <div className="footer_contact_info">
                          <ul>
                            <li>Email: mendoza.jm@pucp.pe</li>
                            <li>Teléfono:  (01) 6262000</li>
                            <li>Dirección: Av. Universitaria 1801</li>
                          </ul>
                        </div>
                      </div>
                      
                    </div>

                   

                  </div>
                </div>
              </div>
            </div>

            <div className="row copyright_row">
              <div className="col">
                <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
                  <div className="cr_text">
                      Copyright &copy; All rights reserved | TPM Analytics
                  </div>
                  <div className="ml-lg-auto cr_links">
                    <ul className="cr_list">
                      <li><a href="#">Copyright notification</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        

      );
    }
  }
  
  export default Footers;