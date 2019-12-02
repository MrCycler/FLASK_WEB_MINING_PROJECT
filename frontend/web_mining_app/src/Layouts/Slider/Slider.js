import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import image1 from '../../assets/unicat/sliders/slider01.png';
import image2 from '../../assets/unicat/sliders/slides_02.png';


const items = [
    {
      src: image1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: image1,
      altText: 'Slide 3',
      caption: 'Slide 3'
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
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.nslides - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    /*
    let noticias = this.state.noticias.map((noticia,index) => {    
      return (
      );})*/

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
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 450px;
                background: black;
              }`
          }
        </style>
        <Row><p></p></Row>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}

           

          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Sliders;