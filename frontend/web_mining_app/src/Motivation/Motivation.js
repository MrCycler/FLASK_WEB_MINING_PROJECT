import React, {Component} from 'react';
//import { Button } from 'reactstrap';
//import {Link} from 'react-router-dom';
import Icon1 from '../assets/unicat/images/webscraping.png';
import Icon2 from '../assets/unicat/images/preprocessing.png';
import Icon3 from '../assets/unicat/images/analyssis.png';
import Icon4 from '../assets/unicat/images/colaborative.png';
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
                                    <h5>TPM Analytics (Tendencias de Publicación de Medios) muestra las actuales tasas de publicación de tres medios principales de noticias en el Perú basado en cuatro campos: Policiales/Crimen, Política/Economía, Sociales/Entretenimiento y Deportes.</h5>
                                    <h5>Con estas tasas podemos analizar y/o inferir: Qué campo es la tendencia principal de publicación de cada medio; Cuál es la tendencia de publicación a nivel general; cuales son los campos de mayor interés hacia el público y 
                                    otras más. Dejamos a su elección buscar otros tipos de análisis. </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row features_row">
                    <div className="col-lg-3 feature_col">
                        <div className="feature text-center trans_400"> 
                            <div className="feature_icon"><img src={Icon1} width="30%" alt="" /></div>
                             <h3 className="feature_title">Web Scrapping</h3>
                            <div className="feature_text"><p>Información extraída directamente de los medios analizados.</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 feature_col">
                        <div className="feature text-center trans_400">
                            <div className="feature_icon"><img src={Icon2} alt=""/></div>
                            <h3 className="feature_title">Preprocesamiento</h3>
                            <div className="feature_text"><p>Clasificados por Algortimos de Machine Learning.</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 feature_col">
                        <div className="feature text-center trans_400">
                             <div className="feature_icon"><img src={Icon3} width="42%" alt=""/></div>
                            <h3 className="feature_title">Análisis</h3>
                            <div className="feature_text"><p>Presentación de la información con gráficos estadísticos para análisis.</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 feature_col">
                        <div className="feature text-center trans_400">
                            <div className="feature_icon"><img src={Icon4} width="32%" alt=""/></div>
                            <h3 className="feature_title">Colaborativo</h3>
                            <div className="feature_text"><p>Contamos con sus comentarios para mejorar continuamente.</p></div>
                        </div>
                    </div>

                </div>
            </div>
            
            
        )
    }
}




export default Motivation;