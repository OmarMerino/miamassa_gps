import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import promoBebidas from "../image/promoBebidas.jpg"
import promos from "../image/promos.jpg"
import promoMedianas from "../image/promoMedianas.jpg"
import promoGrandes from "../image/promoGrandes.jpg"
import palitosajo from "../image/palitosajo.jpg"
import promonuevaspiezas from "../image/promonuevaspiezas.jpeg"



export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.sliderRef.current.slickNext();
    }, 3500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sliderDiv">
        <Slider {...settings} ref={this.sliderRef}>
          <div className="slide">
          <img src={promonuevaspiezas} alt="Promocion pizzas nuevas" />
          </div>
          <div className="slide">
            <img src={promoBebidas} alt="Promociones con bebida" />
          </div>
          <div className="slide">
            <img src={promos} alt="Promociones 2 por" />
          </div>
          <div className="slide">
            <img src={promoGrandes} alt="Promociones 2 por" />
          </div>
          <div className="slide">
            <img src={promoMedianas} alt="Promociones 2 por" />
          </div>
          <div className="slide">
          <img src={palitosajo} alt="Palitos de ajo" />
          </div>
        </Slider>
      </div>
    );
  }
}