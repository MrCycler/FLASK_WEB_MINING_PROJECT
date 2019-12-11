import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import ReactGA from 'react-ga';

import { Row} from 'reactstrap';
import image1 from '../../assets/unicat/sliders/slide_01.png';
import image2 from '../../assets/unicat/sliders/slide_02.png';
import image3 from '../../assets/unicat/sliders/slide_03.png';


const items = [
    {
      src: image1,
      altText: '',
      caption: ''
    },
    {
      src: image2,
      altText: '',
      caption: ''
    },
    {
      src: image3,
      altText: '',
      caption: ''
    }
  ];

//import './Sliders.css';

class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, 
     sliderimages : [],
     altText: '',
     nslides: 3,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
   
   let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/titulares?_embed"
   fetch(dataUrl)
   .then(res => res.json())
   .then(res => {
       this.setState({
           sliderimages: res
       })
   })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.nslides - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    ReactGA.event({
      category: 'UI_INTERACTION',
      action: 'SLIDER'
    });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.nslides - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    ReactGA.event({
      category: 'UI_INTERACTION',
      action: 'SLIDER'
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    ReactGA.event({
      category: 'UI_INTERACTION',
      action: 'SLIDER'
    });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} width="100%" height="100%"/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });


    return (
    <div  class="divslider">
      <div class="inside">
        <style>
          {
            `
            .divslider{
              padding-left:150px;
              padding-right:150px;
              text-align:center;
              max-width: 100%;
            }
            .custom-tag {
                max-width: 100%;
                height: 480px;
                background: black;
              }

              .home-slider {
                max-width: 90%;
                height: 480px;
                padding-top:5px;
                margin: auto;
              }`
          }
        </style>
        <Row><p></p></Row>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          className="home-slider"
        >
          <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    </div>
    );
  }
}

export default Sliders;