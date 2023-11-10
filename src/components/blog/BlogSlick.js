import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blogdetail from "./Blogdetail";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const StyleCarouselBlock = styled.div`
  padding: 3rem;
  background-color: lightgray;
`;

const StyleCarouselTilte = styled.p`
  width: 60rem;
  margin: 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 3rem;
  &.hehe {
    color: red;
  }
`;

const StyleCarouselContent = styled.p`
  width: 37rem;
  margin: 1rem;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 1.4rem;
  font-weight: 300;
  padding-left: 3rem;
`;

const StyleSlickButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100rem;
  border: solid 1px lightgrey;
  background-color: none;
  margin: 0.2rem;
  color: grey;
`;

export default class BlogSlick extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <StyleCarouselBlock>
        <StyleCarouselTilte className="hehe">
          One-of-a-kind stays, only on Airbnb
        </StyleCarouselTilte>
        <StyleCarouselContent>
          Explore the unique, limited-time stays that give guests a rare glimpse
          into some of the most iconic places in pop culture.
        </StyleCarouselContent>
        <div style={{ textAlign: "right", paddingRight: "5%" }}>
          <StyleSlickButton
            style={{ cursor: "pointer" }}
            className="button"
            onClick={this.previous}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </StyleSlickButton>
          <StyleSlickButton
            style={{ cursor: "pointer" }}
            className="button"
            onClick={this.next}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </StyleSlickButton>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
          <Blogdetail />
        </Slider>
      </StyleCarouselBlock>
    );
  }
}
