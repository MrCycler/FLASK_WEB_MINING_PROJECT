import ReactGA from 'react-ga';
import React, { Component } from 'react';
import './PageSrc.css';
import Slider from '../Layouts/Slider/Slider';
import Motivation from '../Motivation/Motivation';
import Cifras from '../Cifras/Cifras';
import elcomercio_logo from '../assets/images/comercio_logo.jpg';
//import Footers from '../Layouts/Footers/Footers';
//import Counter from '../Layouts/Counter/Counter';
class PageSource extends Component {
  constructor(){
    super();
        this.state = {
      
        }         
        this.initializeReactGA = this.initializeReactGA.bind(this); 
    }


componentDidMount() {
  this.initializeReactGA();
}

initializeReactGA() {
  ReactGA.initialize('UA-151341720-2');
  ReactGA.pageview('/');
 };

/*TODO: Direccionar a los graficos respectivos*/
render() {
    return (
      <div className="Content">
        <Slider/>
        <Motivation/>
        <Cifras/>
        <div class="team">
          <div class="team_background parallax-window" data-parallax="scroll" data-image-src="images/team_background.jpg" data-speed="0.8"></div>
          <div class="container">
          <div class="row">
          <div class="col">
          <div class="section_title_container text-center">
          <h2 class="section_title">Fuentes de Noticias</h2>
          <div class="section_subtitle"><p>Para el análisis de tendencias extraimos un conjunto de noticias de las siguientes fuentes.</p></div>
          </div>
          </div>
          </div>
          <div class="row team_row">
          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image">
          <a href="./graficos"> 
            <img className="logo-fuente" src="https://3.bp.blogspot.com/-oE-U3nVT5T4/Ve9yqAaT9ZI/AAAAAAAApqI/Kxmb67Dh6wI/s1600/rpp-noticias.jpg" alt=""/>
            </a>   
          </div>
          <div class="team_body">
          <div class="team_title"><a href="./graficos">RPP</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image">
          <a href="./graficos">
            <img className="logo-fuente" src="https://peru21.pe/pf/resources/dist/peru21/images/logo_fb.jpg?d=470" alt=""/>
            </a> 
          </div>
          <div class="team_body">
          <div class="team_title"><a href="./graficos">Perú21</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image">
          <a href="./graficos">
            <img  className="logo-fuente" src={elcomercio_logo} alt=""/>
            </a>   
            </div>
          <div class="team_body">
          <div class="team_title"><a href="./graficos">El Comercio</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image">
          <a href="./graficos">
            <img className="logo-fuente" src="https://files.merca20.com/uploads/2017/01/bigstock-Stack-Of-Old-Newspapers-Pile-120921242-e1515773521154.jpg" alt=""/>
            </a>  
          </div>
          <div class="team_body">
          <div class="team_title"><a href="./graficos">Consolidado</a></div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

      </div>
    );
  }
}

export default PageSource;