import React, { Component } from 'react';
import './PageSrc.css';

class PageSource extends Component {



componentDidMount() {}


render() {
    return (
      <div className="App-header">
        <h1 className="Page_title">PAGINA FUENTE</h1>
            <iframe 
            className="frame-source"
            title="Frame categoria noticias"
            width="800"
             height="600" 
             src="https://app.powerbi.com/view?r=eyJrIjoiOTI3Y2EzOWMtZDZhNS00NmU5LTlhMDktNWRkMjI5ZGNhY2FjIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameborder="0" allowFullScreen="true">
            </iframe>
      </div>
    );
  }
}

export default PageSource;