import React, { Component } from 'react';
import './PageSrc.css';
import Slider from '../Layouts/Slider/Slider';
import Motivation from '../Layouts/Motivation/Motivation'
import Footers from '../Layouts/Footers/Footers';
import Counter from '../Layouts/Counter/Counter';
class PageSource extends Component {



componentDidMount() {}


render() {
    return (
      <div className="Content">
        <Slider/>
        <Motivation/>
        
        <div class="team">
          <div class="team_background parallax-window" data-parallax="scroll" data-image-src="images/team_background.jpg" data-speed="0.8"></div>
          <div class="container">
          <div class="row">
          <div class="col">
          <div class="section_title_container text-center">
          <h2 class="section_title">Fuentes de Noticias</h2>
          <div class="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
          </div>
          </div>
          </div>
          <div class="row team_row">
          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image"><img src="https://3.bp.blogspot.com/-oE-U3nVT5T4/Ve9yqAaT9ZI/AAAAAAAApqI/Kxmb67Dh6wI/s1600/rpp-noticias.jpg" alt=""/></div>
          <div class="team_body">
          <div class="team_title"><a href="#">RPP</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image"><img src="https://peru21.pe/pf/resources/dist/peru21/images/logo_fb.jpg?d=470" alt=""/></div>
          <div class="team_body">
          <div class="team_title"><a href="#">Perú21</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image"><img src="https://elcomercio.pe/pf/resources/dist/elcomercio/images/logo_fb.jpg?d=470" alt=""/></div>
          <div class="team_body">
          <div class="team_title"><a href="#">El Comercio</a></div>
          </div>
          </div>
          </div>

          <div class="col-lg-3 col-md-6 team_col">
          <div class="team_item">
          <div class="team_image"><img src="https://files.merca20.com/uploads/2017/01/bigstock-Stack-Of-Old-Newspapers-Pile-120921242-e1515773521154.jpg" alt=""/></div>
          <div class="team_body">
          <div class="team_title"><a href="#">Consolidado</a></div>
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