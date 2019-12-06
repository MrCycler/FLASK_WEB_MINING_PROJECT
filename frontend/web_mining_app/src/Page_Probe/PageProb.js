import ReactGA from 'react-ga';
import React, { Component } from 'react';
import RPP from '../assets/images/rpp_logo.png';
import ElComercio from '../assets/images/comercio_logo.jpg';
import Peru21 from '../assets/images/logo_peru21.svg';
import './PageProb.css';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        this.click_handler = this.click_handler.bind(this);
        this.initializeReactGA = this.initializeReactGA.bind(this);
    }

    handleChange(event) {
      this.setState({url: event.target.value});
    }

    click_handler(){
      ReactGA.event({
        category: 'Conversion',
        action: 'Prueba_Algoritmo',
        label:'prueba',
        value:300,
      });
      
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
  

componentDidMount() {
  this.initializeReactGA();
}

initializeReactGA() {
  ReactGA.initialize('UA-151341720-2');
  ReactGA.pageview('/prove');
 };

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
      <div className="Probe__content">
        <div className="margin">
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
          <div className="Probe__card pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="row">
                  <div className="col-md-12 col-xl-8">
                    <div className="Input__item Input__item--head">
                      <TextField
                        label="Ingresar URL"
                        multiline
                        value={this.state.url}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                      />
                      <Button variant="contained" color="primary" onClick={this.click_handler}>Probar</Button>
                    </div>
                    <br/>
                    <div className="Input__item">
                      <TextField
                        label="Categoría Original"
                        multiline
                        value={this.state.categoria_original}
                        disabled
                        margin="normal"
                        variant="outlined"
                      />
                    </div>
                    <div className="Input__item">
                      <TextField
                        label="Categoría Predecida"
                        multiline
                        value={this.state.categoria}
                        disabled
                        margin="normal"
                        variant="outlined"
                      />
                    </div>
                    <div className="Input__item">
                      <TextField
                        label="Contenido de la noticia"
                        multiline
                        value={this.state.contenido}
                        disabled
                        rows="10"
                        margin="normal"
                        variant="outlined"
                      />
                    </div>
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
      </div>
    );
  }
}

export default PageProbe;