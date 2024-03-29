import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import FontAwesome from 'react-fontawesome';
import './Footers.css';

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
        <div> 
        <div  className="footersup">
        <Container className="footercontainer">
          <Row >

            <Col xs="4">
            <p className="footertitletext">PAPERCUBE CONSULTING S.A.C</p>
            <img alt="" className="footermark" src="https://papercubehome.files.wordpress.com/2019/02/modo-alternativo.png" width="200px"></img>
           </Col>

           <Col xs="5">
            <p className="footertitletext">CONTACTE CON NOSOTROS:</p>
            <p className="verticalalign"> <MaterialIcon icon="room" color='white'/>&nbsp; Av. Universitaria 1801, San Miguel, Lima - Perú</p>
            <p className="verticalalign"> <MaterialIcon icon="local_phone" color='white'/>&nbsp; Telefóno: &nbsp; <a className="linkinfo" href="tel:991471604">991471604</a></p>
            <p className="verticalalign"><MaterialIcon icon="mail" color='white'/>&nbsp; Correo electrónico:&nbsp; <a className="linkinfo" href="mailto:soluciones@papercube.pe"> soluciones@papercube.pe</a></p>
           </Col>

           <Col xs="3">
            <p className="footertitletext">SIGANOS EN REDES:</p>
              <Row >
                <Col xs="2">
                <a href="https://www.facebook.com/papercube/" className="footercenter">
                <FontAwesome className="materialicon" size="3x" name="facebook" /></a>
                </Col>
                <Col xs="2">
                <a href="https://pe.linkedin.com/" className="footercenter">
                <FontAwesome  className="materialicon" size="3x" name="linkedin" /></a>
                </Col>
                <Col xs="2">
                <a href="https://medium.com/" className="footercenter">
                <FontAwesome className="materialicon" size="3x" name="medium" /></a>
                </Col>
                <Col xs="2">
                <a href="https://twitter.com/?lang=es" className="footercenter">
                <FontAwesome className="materialicon" size="3x" name="twitter" /></a>
                </Col>
                <Col xs="2">
                <a href="https://www.instagram.com/_jm.mj_/" className="footercenter">
                <FontAwesome  className="materialicon" size="3x" name="instagram" /></a>
                </Col>
                <Col xs="2">
                <a href="tel:991471604" className="footercenter">
                <FontAwesome  className="materialicon" size="3x" name="whatsapp" /></a>
                </Col>
              </Row>
            </Col>

            </Row>
           
        </Container>
        

      
          <Container >
            <Row>
              <Col>
                 <p className="footertextcenter">Copyright © 2019 Papercube Consulting S.A.C</p>
              </Col>
            </Row>
          </Container>
          </div>
        </div>

      );
    }
  }
  
  export default Footers;