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
        <footer>
          <footer class="footer">
            <div class="footer_background"></div>
            <div class="container">
            <div class="row footer_row">
            <div class="col">
            <div class="footer_content">
            <div class="row">
            <div class="col-lg-3 footer_col">

            <div class="footer_section footer_about">
            <div class="footer_logo_container">
            <a href="#">
            <div class="footer_logo_text">Unic<span>at</span></div>
            </a>
            </div>
            <div class="footer_about_text">
            <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
            </div>
            <div class="footer_social">
            <ul>
            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
            </div>
            </div>
            </div>
            <div class="col-lg-3 footer_col">

            <div class="footer_section footer_contact">
            <div class="footer_title">Contact Us</div>
            <div class="footer_contact_info">
            <ul>
            <li>Email: Info.deercreative@gmail.com</li>
            <li>Phone: +(88) 111 555 666</li>
            <li>40 Baria Sreet 133/2 New York City, United States</li>
            </ul>
            </div>
            </div>
            </div>
            <div class="col-lg-3 footer_col">

            <div class="footer_section footer_links">
            <div class="footer_title">Contact Us</div>
            <div class="footer_links_container">
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
            <div class="col-lg-3 footer_col clearfix">

            <div class="footer_section footer_mobile">
            <div class="footer_title">Mobile</div>
            <div class="footer_mobile_content">
            <div class="footer_image"><a href="#"><img src="images/mobile_1.png" alt=""/></a></div>
            <div class="footer_image"><a href="#"><img src="images/mobile_2.png" alt=""/></a></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="row copyright_row">
            <div class="col">
            <div class="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
            <div class="cr_text">
            Copyright ©2019 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </div>
            <div class="ml-lg-auto cr_links">
            <ul class="cr_list">
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
        </footer>
      );
    }
  }
  
  export default Footers;