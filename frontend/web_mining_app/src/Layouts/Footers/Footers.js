import React, { Component } from 'react';
import ReactGA from 'react-ga';


class Footers extends Component {
  constructor(){
    super();
    this.state = {
      
    }
    this.click_handler = this.click_handler.bind(this);
    this.initializeReactGA = this.initializeReactGA.bind(this); 
    }

    initializeReactGA() {
      ReactGA.initialize('UA-151341720-2');
     };

    click_handler(){
      ReactGA.event({
        category: 'Click',
        action: 'Subscripcion_desde_footer',
      }); 
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
            <a href="./">
            <div className="footer_logo_text">TPM <span>Analytics</span></div>
            </a>
            </div>
            <div className="footer_about_text">
            <p>TPM Analytics (Tendencias de Publicación de Medios) es un proyecto académico realizado por estudiantes de la maestría de Informática y ciencias de la computación de la Pontificia Universidad Cátolica del Perú.</p>
            </div>
            
            </div>
            </div>
            <div className="col-lg-4 footer_col">

            <div className="footer_section footer_contact">
            <div className="footer_title">Contactanos:</div>
            <div className="footer_contact_info">
            <ul>
              <li>Email: mendoza.jm@pucp.pe</li>
              <li>Telefono: +(51) 978635693</li>
              <li>Av. Universitaria 1801, San Miguel, Lima – Perú</li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-lg-4 footer_col">

            <div className="footer_section footer_links">
            <div className="footer_title">Le puede interesar:</div>
            <div className="footer_links_container">
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
            <div className="row copyright_row">
            <div className="col">
            <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
            <div className="cr_text">
            Copyright ©2019 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="blank">Colorlib</a>
            </div>
            <div className="ml-lg-auto cr_links">
            <ul className="cr_list">
            
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