import React, { Component } from 'react';
import RPP from '../assets/images/rpp_logo.png';
import ElComercio from '../assets/images/comercio_logo.jpg';
import Peru21 from '../assets/images/logo_peru21.svg';
import './PageProb.css';

class PageProbe extends Component {

  constructor(){
    super();
        this.state = {
          url :"", 
          categoria:"",
          categoria_original:"",
          contenido:"",
          fuente_noticia:"",

        }  
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({url: event.target.value});
    }

  

componentDidMount() {}


render() {

  let imagen_periodico =<p></p>;
  if(this.state.fuente_noticia==="Fuente: El Comercio"){
    imagen_periodico=<img src={ElComercio} className="pageprob_origin_image" alt=""></img>
  }
  if(this.state.fuente_noticia==="Fuente: RPP Noticias"){
    imagen_periodico=<img src={RPP} className="pageprob_origin_image" alt=""></img>
  }
  if(this.state.fuente_noticia==="Fuente: Peru 21"){
    imagen_periodico=<img src={Peru21} className="pageprob_origin_image" alt=""></img>
  }
    return (
      <div className="content">
        <div className="prove-header" >

        </div>
      <div className="page-header card">
        <div className="row align-items-end">
            <div className="col-lg-8">
                <div className="page-header-title">
                    <i className="feather icon-arrow-down bg-c-blue"></i>
                    <div className="d-inline">
                        <h4 className="title-prove">En esta sección usted podrá probar nuestro algoritmo</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="row">
              <div className="col-md-12 col-xl-8">
                <input className="pageprob_input" type="text" value={this.state.url} onChange={this.handleChange}></input>
                <button className="pageprob_button" onClick={this.click_handler}>Probar</button>
                <h6>Categoría original</h6>
                <input className="pageprob_input" value={this.state.categoria_original} disabled></input>
                <h6>Categoría predecida</h6>
                <input className="pageprob_input" value={this.state.categoria} disabled></input>
                <h6>Contenido de la noticia</h6>
                <textarea className="pageprob_text_area" value={this.state.contenido} disabled></textarea>

              </div>
              <div className="col-md-12 col-xl-2">
              <h6>Diario de origen</h6>
              {imagen_periodico}
                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default PageProbe;