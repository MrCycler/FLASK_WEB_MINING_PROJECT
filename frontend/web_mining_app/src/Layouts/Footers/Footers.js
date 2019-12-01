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
                          <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
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
                            <li>Email: <a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b7fed9d1d899d3d2d2c5d4c5d2d6c3dec1d2f7d0dad6dedb99d4d8da">[email&#160;protected]</a></li>
                            <li>Phone:  +(88) 111 555 666</li>
                            <li>40 Baria Sreet 133/2 New York City, United States</li>
                          </ul>
                        </div>
                      </div>
                      
                    </div>

                    <div className="col-lg-4 footer_col">
                
             
                      <div className="footer_section footer_links">
                        <div className="footer_title">Contact Us</div>
                        <div className="footer_links_container">
                          <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">FAQs</a></li>
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
                      Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
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