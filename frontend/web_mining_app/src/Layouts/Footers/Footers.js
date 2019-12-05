import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import MaterialIcon from 'material-icons-react';
//import FontAwesome from 'react-fontawesome';
//import './Footers.css';

//import Background from '../../assets/unicat/images/footer_background.png';
//import Mobile1 from '../../assets/unicat/images/mobile_1.png';
//import Mobile2 from '../../assets/unicat/images/mobile_2.png';


class Footers extends Component {
  constructor(){
    super();
    this.state = {
      
    }
    this.click_handler = this.click_handler.bind(this);
    }
    click_handler(){
      document.getElementById("REGISTER").click();
    }
  
    render() {
      let li1 = "";
      if(window.sessionStorage.getItem("auth")==='active')
      {
          li1 = <li ><a href='./prove' >Nuestro trabajo</a></li>;       
      }
      else{
          li1 = <li ><a href='\\' onClick={this.click_handler} >Nuestro trabajo</a></li>;
      }

      return (
        <footer>
          <footer class="footer">
            <div class="footer_background"></div>
            <div class="container">
            <div class="row footer_row">
            <div class="col">
            <div class="footer_content">
            <div class="row">
            <div class="col-lg-4 footer_col">

            <div class="footer_section footer_about">
            <div class="footer_logo_container">
            <a href="./">
            <div class="footer_logo_text">TPM <span>Analytics</span></div>
            </a>
            </div>
            <div class="footer_about_text">
            <p>TPM Analytics (Tendencias de Publicación de Medios) es un proyecto académico realizado por estudiantes de la maestría de Informática y ciencias de la computación de la Pontificia Universidad Cátolica del Perú.</p>
            </div>
            
            </div>
            </div>
            <div class="col-lg-4 footer_col">

            <div class="footer_section footer_contact">
            <div class="footer_title">Contactanos:</div>
            <div class="footer_contact_info">
            <ul>
              <li>Email: mendoza.jm@pucp.pe</li>
              <li>Telefono: +(51) 978635693</li>
              <li>Av. Universitaria 1801, San Miguel, Lima – Perú</li>
            </ul>
            </div>
            </div>
            </div>
            <div class="col-lg-4 footer_col">

            <div class="footer_section footer_links">
            <div class="footer_title">Le puede interesar:</div>
            <div class="footer_links_container">
            <ul>
              <li><a href="./">Inicio</a></li>
              <li><a href="./graficos">Gráficos</a></li>
              <li><a href="https://www.pucp.edu.pe/">PUCP</a></li>
              <li><a href="https://posgrado.pucp.edu.pe/maestria/informatica/">PUCP - Informática</a></li>
              <li><a href="./aboutus">Acerca de nosotros</a></li>
              {li1}
            </ul>
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
            Copyright ©2019 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="blank">Colorlib</a>
            </div>
            <div class="ml-lg-auto cr_links">
            <ul class="cr_list">
            
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