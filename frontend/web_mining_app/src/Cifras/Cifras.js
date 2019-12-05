import React, {Component} from 'react';
import {Button } from 'reactstrap';
//import TextField from '@material-ui/core/TextField';
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
            date: new Date(), timepast:'',/*Cuanto tiempo a pasado en ms*/
        }
        this.click_handler = this.click_handler.bind(this);
    }

    click_handler(){
        document.getElementById("REGISTER").click();
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

        let button = "";
        if(window.sessionStorage.getItem("auth")==='active')
        {
            button = <a href="./prove"><Button className="know-button" size="md"  color="info">Conoce Nuestra metodología</Button></a>;
        }
        else{
            button = <Button   onClick={this.click_handler} className="know-button" size="md"  color="info">Conoce Nuestra metodología</Button>;
        }

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
                                   {button}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
       </div>
            
            
        )
    }
}




export default Cifras;