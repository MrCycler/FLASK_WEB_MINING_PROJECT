import React, { Component } from 'react';
import logo from './logo.svg';
import ReactGA from 'react-ga';
import './App.css';

class App extends Component {

  constructor(){
    super();
        this.state = {
          mostrate :[], 
        }  
        this.initializeReactGA = this.initializeReactGA.bind(this);
    }

    componentDidMount() {
      this.initializeReactGA();
    }

    initializeReactGA() {
      ReactGA.initialize('UA-151341720-2');
      ReactGA.pageview('/');
     }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>WEB MINING APP IN REACT - PROYECTO WEB MINING</h2>
            <iframe 
            title="Frame categoria noticias"
            width="800"
             height="600" 
             src="https://app.powerbi.com/view?r=eyJrIjoiOTI3Y2EzOWMtZDZhNS00NmU5LTlhMDktNWRkMjI5ZGNhY2FjIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameborder="0" allowFullScreen="true">
            </iframe>

            <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
