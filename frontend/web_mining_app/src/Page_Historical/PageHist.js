import React, { Component } from 'react';
import './PageHist.css';

class PageHistorical extends Component {



componentDidMount() {}


render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <h1 className="Page_title">PAGINA HISTORICO</h1>
            <iframe className="frame-historical"
            title="Frame categoria noticias"
            width="800"
             height="600" 
             src="https://app.powerbi.com/view?r=eyJrIjoiOTI3Y2EzOWMtZDZhNS00NmU5LTlhMDktNWRkMjI5ZGNhY2FjIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameborder="0" allowFullScreen="true">
            </iframe>
        </header>
     
      </div>
    );
  }
}

export default PageHistorical;