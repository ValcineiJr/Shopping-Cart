import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  Indicator,
  Arrow,
  Item,
  Selectors,
  PreviousArrow,
  NextArrow,
} from "./styles";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Carousel = () => {
  const [images] = useState([banner1, banner2, banner3]);
  const [position, setPosition] = useState(0);
  const [hovering, setHovering] = useState(false);
  const scrollRef = useRef(null);
  const maxPosition = images.length - 1;
  const width = window.innerWidth;

  useEffect(() => {
    const isHover = (e) => e.parentElement.querySelector(":hover") === e;
    const carousel = document.getElementById("carousel");

    document.addEventListener("mousemove", function checkHover() {
      const hovered = isHover(carousel);
      if (hovered !== checkHover.hovered) {
        hovered ? setHovering(true) : setHovering(false);
        checkHover.hovered = hovered;
      }
    });
  }, []);

  useEffect(() => {
    if (!hovering) {
      autoScroll(3);
    }
  }, [position, hovering]);

  const scrollFoward = () => {
    if (position === maxPosition) {
      setPosition(0);
      scrollRef.current.scrollBy({
        top: 0,
        left: -(width + width),
        behavior: "smooth",
      });
    } else {
      setPosition(position + 1);

      scrollRef.current.scrollBy({
        top: 0,
        left: width,
        behavior: "smooth",
      });
    }
  };
  const scrollBackward = () => {
    if (position === 0) {
      setPosition(maxPosition);
      scrollRef.current.scrollBy({
        top: 0,
        left: +(width + width),
        behavior: "smooth",
      });
    } else {
      setPosition(position - 1);

      scrollRef.current.scrollBy({
        top: 0,
        left: -width,
        behavior: "smooth",
      });
    }
  };

  const autoScroll = (time) => {
    const slideTime = time;

    setTimeout(() => {
      scrollFoward();
    }, slideTime * 1000);
  };

  const scrollTo = (to) => {
    setPosition(to);

    //2
    if (position === maxPosition && to === 0) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -(width + width),
        behavior: "smooth",
      });
    }
    if (position === maxPosition && to === 1) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -width,
        behavior: "smooth",
      });
    }

    //1
    if (position === maxPosition - 1 && to === 0) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -width,
        behavior: "smooth",
      });
    }
    if (position === maxPosition - 1 && to === maxPosition) {
      scrollRef.current.scrollBy({
        top: 0,
        left: +width,
        behavior: "smooth",
      });
    }

    //0
    if (position === maxPosition - 2 && to === maxPosition) {
      scrollRef.current.scrollBy({
        top: 0,
        left: width + width,
        behavior: "smooth",
      });
    }
    if (position === maxPosition - 2 && to === 1) {
      scrollRef.current.scrollBy({
        top: 0,
        left: +width,
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    scrollFoward();
  };
  const scrollPrevious = () => {
    scrollBackward();
  };

  return (
    <Container id="carousel">
      <Arrow onClick={scrollPrevious}>
        <PreviousArrow />
      </Arrow>
      <ul ref={scrollRef}>
        {images.map((item) => (
          <Item src={item} className="carousel" />
        ))}
      </ul>
      <Arrow onClick={scrollNext}>
        <NextArrow />
      </Arrow>
      <Selectors>
        {images.map((v, i) => (
          <Indicator
            onClick={() => scrollTo(i)}
            color={position === i ? "#fff" : "transparent"}
          />
        ))}
      </Selectors>
    </Container>
  );
};

export default Carousel;
