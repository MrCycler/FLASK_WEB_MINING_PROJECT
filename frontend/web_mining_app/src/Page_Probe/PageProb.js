import React, { Component } from 'react';
import './PageProb.css';

class PageProbe extends Component {

  constructor(){
    super();
        this.state = {
          url :"", 
          categoria:"",
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
    let api_url = "http://ec2-3-15-153-91.us-east-2.compute.amazonaws.com/category_predictor";
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
        this.setState({categoria: data.data.tipo_noticia});
      })


  }

componentDidMount() {}


render() {
    return (
      <div className="content">
      <div className="page-header card">
        <div className="row align-items-end">
            <div className="col-lg-8">
                <div className="page-header-title">
                    <i className="feather icon-box bg-c-blue"></i>
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
                <input className="pageprob_input" value={this.state.categoria} disabled></input>
                <div className="card sale-card">
                  <div className="card-header">
                    <h5>Data prueba</h5>
                  </div>
                  <div className="card-block">
                    <iframe 
                      className="frame-source"
                      title="Frame categoria noticias"
                      width="100%"
                      height="600" 
                      src="https://app.powerbi.com/view?r=eyJrIjoiOTI3Y2EzOWMtZDZhNS00NmU5LTlhMDktNWRkMjI5ZGNhY2FjIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}">
                      </iframe>
                  </div>
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