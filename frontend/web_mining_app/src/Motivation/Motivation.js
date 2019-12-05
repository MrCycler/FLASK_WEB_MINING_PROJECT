import React, {Component} from 'react';
import { Button } from 'reactstrap';
//import {Link} from 'react-router-dom';
//import Icon1 from '../../assets/unicat/images/webscraping.png';
//import Icon2 from '../../assets/unicat/images/preprocessing.png';
//import Icon3 from '../../assets/unicat/images/analyssis.png';
//import Icon4 from '../../assets/unicat/images/colaborative.png';
import './Motivation.css';


class Motivation extends Component{
    constructor(){
        super();
        this.state = {
            logos : []
        }
    }

    componentDidMount(){
        //window.addEventListener('scroll',this.handleScroll);

    }

    componentWillUnmount(){
        //window.addEventListener('scroll',this.handleScroll);
    }

    /*Para hacer sticky el navbar */
    handleScroll = () => {
        // var navbar = document.getElementById("navbar");
        // var sticky = navbar.offsetTop;
        // if (window.pageYOffset >= sticky){
        //     navbar.classNameList.add("navbar--sticky");
        // } else {
        //     navbar.classNameList.remove("navbar--sticky");
        // }
    }    

    render() {
        return (
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h2 className="section_title">Bienvenido a TPM Analytics</h2>
                                <div className="section_subtitle">
                                    <p>TPM Analytics (Tendencias de Publicación de Medios) muestra las actuales tasas de publicación de tres medios principales de noticias en el Perú basado en cuatro campos: Policiales/Crimen, Política/Economía, Sociales/Entretenimiento y Deportes.</p>
                                    <p>Con estas tasas podemos analizar y/o inferir: Qué campo es la tendencia principal de publicación de cada medio; Cuál es la tendencia de publicación a nivel general; cuales son los campos de mayor interés hacia el público y 
                                    otras más. Dejamos a su elección buscar otros tipos de análisis. </p>
                                   <a href="./aboutus">
                                    <Button className="aboutus-button" size="md"  color="primary">Conoce al equipo</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}




export default Motivation;