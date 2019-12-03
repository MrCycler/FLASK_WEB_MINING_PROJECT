import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import MaterialIcon from 'material-icons-react';
//import FontAwesome from 'react-fontawesome';
//import './Footers.css';

import Background from '../../assets/unicat/images/counter_background.jpg';
//import Mobile1 from '../../assets/unicat/images/mobile_1.png';
//import Mobile2 from '../../assets/unicat/images/mobile_2.png';


class Counter extends Component {
  constructor(){
    super();
    this.state = {
        numerotamaño:[],
        numerotamaño2:[],
    }}

    componentDidMount() {
     
    }

  
    render() {

      return (
        <div className="counter">
          <div className="counter_background" style={{backgroundImage: "url(" + Background + ")"}}></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="counter_content">
                  <h2 className="counter_title">Register Now</h2>
                  <div className="counter_text"><p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>

               

                  <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
                    
                  
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="15">0</div>
                      <div className="milestone_text">years</div>
                    </div>

                  
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="120" data-sign-after="k">0</div>
                      <div className="milestone_text">years</div>
                    </div>

                    
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="670" data-sign-after="+">0</div>
                      <div className="milestone_text">years</div>
                    </div>

                    
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="320">0</div>
                      <div className="milestone_text">years</div>
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
  
  export default Counter;