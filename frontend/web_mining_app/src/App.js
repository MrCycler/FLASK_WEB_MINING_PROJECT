import React, { Component } from 'react';

//Importación de las páginas como componentes
import PageCat from './Page_Categories/PageCat';
import PageGraphics from './Page_Graphics/PageGraphics';
import PageSrc from './Page_Sources/PageSrc';
import PageHist from './Page_Historical/PageHist';
import PageProb from './Page_Probe/PageProb';

//Importación de los layouts
import Navbar from './Layouts/Navbar/Navbar';
import Sidebar from './Layouts/Sidebar/Sidebar';
import Footers from './Layouts/Footers/Footers';

import Page404 from './Layouts/Page404/Page404';
//import Footers from './Layouts/Footers/Footers';

//Componentes adicionales
import ReactGA from 'react-ga';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import './assets/unicat/styles/bootstrap4/bootstrap.min.css';
import './assets/unicat/plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/unicat/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './assets/unicat/plugins/OwlCarousel2-2.2.1/animate.css';
import './assets/unicat/styles/main_styles.css';
import './assets/unicat/styles/responsive.css';
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
      
      <Router>
        <div className="super_container">
          <Navbar/>
         
          <div className="wrapper-content">
            <Switch>
                <Route exact path="/" component={PageSrc}/>  
                <Route path="/historical" component={PageHist}/>   
                <Route path="/prove" component={PageProb}/>  
                <Route path="/sources" component={PageSrc}/>   
                <Route path="/categories" component={PageCat}/> 
                <Route path="/graficos" component={PageGraphics}/> 
                <Route  component={Page404}/>   
            </Switch>
          </div>
          <Footers></Footers>
        </div>
      </Router>
    
    );
  }
}

export default App;
