import React, { Component } from 'react';
import ReactGA from 'react-ga';
//import { Col,Row} from 'reactstrap';
import Pablo from '../assets/images/team/pablo.jpeg';
import Carlos from '../assets/images/team/carlos.jpeg';
import Hilda from '../assets/images/team/Hilda.jpeg';
import Jose from '../assets/images/team/jose.jpeg';
import Juan from '../assets/images/team/juan.jpeg';

//import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import './AboutUs.css';

class AboutUs extends Component {

    constructor(){
      super();
          this.state = {
            url :"", 
            categoria:"",
            categoria_original:"",
            contenido:"",
            fuente_noticia:"",
          }         
          this.initializeReactGA = this.initializeReactGA.bind(this); 
      }

      componentDidMount() {
        this.initializeReactGA();
      }
      
      initializeReactGA() {
        ReactGA.initialize('UA-151341720-2');
        ReactGA.pageview('/aboutus');
       };
  
  
  render() {
  
      return (
        <div className="content">
        <div className="aboutus-header" ></div>
          <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className=" text-center">
                                <h2 className="section_title">Nuestro equipo</h2>
                                <div className="section_subtitle">
                                    <p>Nuestro equipo de desarrollo esta formado por los siguientes miembros, todos parte de la maestría de informática con mención en ciencias de la computación de la (PUCP) Pontificia Universidad Católica del Perú.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="margin">
          <div className="Members">
            <div className="Members__item">
              <div class="card-profile card">
                <div className="card-picture" style={{backgroundImage: "url("+Pablo+")"}}></div>
                <div class="card-body">
                  <div class="title-card card-title">Pablo Antunez de Mayolo</div>
                  <p class="card-text">Ingeniero Electrónico (UNI). Ingeniero Supervisor de Mantenimiento en UCP Backus y Johnston SAA.</p>
                </div>
              </div>
            </div>
            <div className="Members__item">
              <div class="card-profile card">
              <div className="card-picture" style={{backgroundImage: "url("+Jose+")"}}></div>
                <div class="card-body">
                  <div class="title-card card-title">Jose Balbuena Galván</div>
                  <p class="card-text">Ingeniero Mecatrónico (PUCP). Asistente de investigación en la Pontificia Universidad Católica del Perú.</p>
                </div>
              </div>
            </div>
            <div className="Members__item">
              <div class="card-profile card">
              <div className="card-picture" style={{backgroundImage: "url("+Juan+")"}}></div>
                <div class="card-body">
                  <div class="title-card card-title">Juan Mendoza Jacinto</div>
                  <p class="card-text">Ingeniero Mecatrónico (PUCP). Full-stack Developer en PaperCube Solutions SAC. Predocente en la Pontificia Universidad Católica del Perú.</p>
                </div>
              </div>
            </div>
            <div className="Members__item">
              <div class="card-profile card">
              <div className="card-picture" style={{backgroundImage: "url("+Carlos+")"}}></div>
                <div class="card-body">
                  <div class="title-card card-title">Carlos Roca Bejar</div>
                  <p class="card-text">Ingeniero de Software (UNMSM). Software Developer en Belatrix Software.</p>
                </div>
              </div>
            </div>
            <div className="Members__item">
              <div class="card-profile card">
              <div className="card-picture" style={{backgroundImage: "url("+Hilda+")"}}></div>
                <div class="card-body">
                  <div class="title-card card-title">Hilda Samame Jimenez</div>
                  <p class="card-text">Licenciada en computación cientifica (UNMSM). Software and Back-end Developer en Radical Solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      );
    }
  }
  
  export default AboutUs;