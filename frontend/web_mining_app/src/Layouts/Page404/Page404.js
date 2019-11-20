import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Page404.css';
//BACKEND: 404 IMAGE SOURCE 
class Page404 extends Component{
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            video:[],
            numerotamaño2:[],
            numerotamaño3:[],

        }
        }

        componentDidMount() {
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();
         
        }
    
        resize() {
            if(window.innerWidth<1025){
              this.setState({numerotamaño: 8,numerotamaño2:2});
              if(window.innerWidth<800){
                this.setState({numerotamaño: 12,numerotamaño2:0});
                if(window.innerWidth<600){
                    this.setState({numerotamaño: 12,numerotamaño2:0});
                }
              }
           
            }
            else
            {
                this.setState({numerotamaño: 8,numerotamaño2:2});
                
            }
          }

    render(){
        
        
        return (
            <div className="App-header">
            <Container>   
                    
            <Row>
                <Col xs="2"></Col>
                <Col xs="8" >
             
                <img className="page404image"
                alt=""
                src="https://2static1.fjcdn.com/comments/Pistol+shrimp+vs+pistol+penguin+fight+_e637ce3a2b649254623485a22f97a73d.jpg" >
                </img>
                <p className="page404text">HTTP 404 Not Found Error</p>
                <p className="page404text">Lo sentimos, la ruta que quiere consultar no es válida</p>
                               
                </Col>
                <Col xs="2"></Col>
            </Row>
                        
   
            </Container></div>
            
        );
    }
}

export default Page404;