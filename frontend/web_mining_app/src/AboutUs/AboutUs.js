import React, { Component } from 'react';
import { Col,Row} from 'reactstrap';
import Pablo from '../assets/images/team/pablo.jpg';
import Carlos from '../assets/images/team/carlos.jpeg';
import Hilda from '../assets/images/team/Hilda.jpeg';
import Jose from '../assets/images/team/jose.jpeg';
import Juan from '../assets/images/team/juan.jpeg';

import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
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
      }

  componentDidMount() {}
  
  
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
        
        <Row>
        <Col xs="1">
        </Col>

        <Col xs="2">
        <Card className="card-profile">
        <CardImg top width="100%" src={Pablo} alt="Card image cap" height="180px" />
            <CardBody>
            <CardTitle className="title-card">Pablo Antunez de Mayolo</CardTitle>
            <CardText>Ingeniero Electrónico (UNI). Ingeniero Supervisor de Mantenimiento en UCP Backus y Johnston SAA.</CardText>
            </CardBody>
         </Card>
         </Col>

        <Col xs="2">
        <Card className="card-profile">
        <CardImg top width="100%" src={Jose} alt="Card image cap" height="180px" />
            <CardBody>
            <CardTitle className="title-card">Jose Balbuena Galván</CardTitle>
            <CardText>Ingeniero Mecatrónico (PUCP). Asistente de investigación en la Pontificia Universidad Católica del Perú.</CardText>
            </CardBody>
         </Card>
         </Col>

         <Col xs="2">
         <Card className="card-profile">
        <CardImg top width="100%" src={Juan} alt="Card image cap" height="180px" />
            <CardBody>
            <CardTitle className="title-card">Juan Mendoza Jacinto</CardTitle>
            <CardText>Ingeniero Mecatrónico (PUCP). Full-stack Developer en PaperCube Solutions SAC.</CardText>
            </CardBody>
         </Card>
         </Col>

         <Col xs="2">
         <Card className="card-profile">
        <CardImg top width="100%" src={Carlos} alt="Card image cap" height="180px" />
            <CardBody>
            <CardTitle className="title-card">Carlos Roca Bejar</CardTitle>
            <CardText>Ingeniero de Software (UNMSM). Software Developer en Belatrix Software.</CardText>
            </CardBody>
         </Card>
         </Col>

         <Col xs="2">
         <Card className="card-profile">
        <CardImg top width="100%" src={Hilda} alt="Card image cap" height="180px" />
            <CardBody>
            <CardTitle className="title-card">Hilda Samame Jimenez</CardTitle>
            <CardText>Licenciada en computación cientifica (UNMSM). Software and Back-end Developer en Radical Solutions.</CardText>
            </CardBody>
         </Card>
         </Col>

         <Col xs="1">
        </Col>
        </Row>

      </div>
      );
    }
  }
  
  export default AboutUs;