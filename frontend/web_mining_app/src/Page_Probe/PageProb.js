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
        this.click_handler = this.click_handler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({url: event.target.value});
    }

  click_handler(){
    console.log(this.state.url)
    let cors_url = "https://cors-anywhere.herokuapp.com/";
    let api_url = "ec2-3-15-153-91.us-east-2.compute.amazonaws.com/category_predictor";
    let obj_query = {  
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },

      body:JSON.stringify({
          url:this.state.url,        
       }),
      }

      fetch(cors_url+api_url, obj_query).then((res) => {return res.json();})
      .then((data) => {
        this.setState({
          categoria_original: data.data.categoria_periodico,
          categoria: data.data.tipo_noticia,
          contenido: data.data.contenido,
          fuente_noticia: data.data.fuente_noticia,  
        });
      })


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
      <div className="page-header card">
        <div className="row align-items-end">
            <div className="col-lg-8">
                <div className="page-header-title">
                    <i className="feather icon-arrow-down bg-c-blue"></i>
                    <div className="d-inline">
                        <h5>Prueba</h5>
                        <span>En esta sección usted puede probar nuestro algoritmo</span>
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