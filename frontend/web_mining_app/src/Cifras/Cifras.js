import React, {Component} from 'react';
import {Button, Modal,  ModalBody } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { Row, Col } from 'reactstrap';
import './Cifras.css';

class Cifras extends Component{
    constructor(){
        super();
        this.state = {
            cifra1:'+5000',
            cifra2:'3',
            cifra3: '1',
            cifra4: '4',
            change: false,
            modal_suscripcion: false,
            date: new Date(), timepast:'',/*Cuanto tiempo a pasado en ms*/
        }
        this.toggle_suscripcion = this.toggle_suscripcion.bind(this);
    }

    toggle_suscripcion() {
        this.setState(prevState => ({
            modal_suscripcion: !prevState.modal_suscripcion}));
      }

      componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
      }
  
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        let date_past = new Date();
        let timepast = date_past-this.state.date;
        if (this.state.change===false){
            this.setState({
                timepast: timepast,                  
              });
        }
        else{
            let cifra1 = '+'+parseInt(((timepast)*2).toString());
            if (timepast>2500){
                cifra1 = '+5000';
            }
            let cifra2 = parseInt(((timepast)/500).toString());
            if (timepast>1500){
                cifra2 = '3';
            }
            let cifra3= parseInt((timepast/500).toString());
            if (timepast>500){
                cifra3 = '1';
            }
            let cifra4= parseInt((timepast/500).toString());
            if (timepast>2000){
                cifra4 = '4';
            }
            this.setState({
                timepast: timepast, 
                cifra1: cifra1,   
                cifra2: cifra2,  
                cifra3: cifra3,  
                cifra4: cifra4,                
              });
        }       
  
      }

    handleMouseLeave = () => {
        this.setState({
            cifra1:'+5000',
            cifra2:'3',
            cifra3: '1',
            cifra4: '4',
            change: false,
        })
    }    

    handleMouseEnter = () => {
        this.setState({date: new Date(),
        change: true,
        });
    }    

    render() {
        return (
                <div className="cifras-div" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h2 className="section_title title-cifras">Nuestro análisis esta basado en cifras</h2>
                                <Row>
                                    <Col xs="3">
                                    <p className="cifra">{this.state.cifra1}</p>
                                    <p className="cifra-text">Noticias analizadas</p>
                                    </Col>
                                    <Col xs="3">
                                    <p className="cifra">{this.state.cifra2}</p>
                                    <p className="cifra-text">Periódicos analizados</p>
                                    </Col>
                                    <Col xs="3">
                                    <p className="cifra">{this.state.cifra3}</p>
                                    <p className="cifra-text">Año de publicaciones</p>
                                    </Col>
                                    <Col xs="3">
                                    <p className="cifra">{this.state.cifra4}</p>
                                    <p className="cifra-text">Categorías establecidas</p>
                                    </Col>
                                </Row>
                                
                                <div className="section_subtitle">
                                   
                                    <Button   onClick={this.toggle_suscripcion} className="know-button" size="md"  color="info">Conoce Nuestra metodología</Button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modal_suscripcion} toggle={this.toggle_suscripcion}>

                    <ModalBody className="form_modal_body">
                        <div className="ModalContainer">
                            <div className="ModalContainer__title">
                                <h2>Suscripción</h2>
                                <p>Si deseas acceder a mayor información dejanos tu correo electrónico.</p>
                            </div>
                            <div className="ModalContainer__form">
                                <div className="Form__input">
                                    <TextField label="Nombre y apellidos" variant="outlined" />
                                </div>
                                <div className="Form__input">
                                    <TextField label="Correo electrónico" variant="outlined" />
                                </div>
                            </div>
                            <a href="/prove">
                            <Button variant="contained" color="primary">Ingresar</Button>
                            </a>
                        </div>
                    </ModalBody>
                </Modal>
       </div>
            
            
        )
    }
}




export default Cifras;