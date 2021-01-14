import React, { useState, useEffect, useRef } from "react";

import { Container, Selectors, Indicator } from "./styles";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Banner from "../../components/Banner";
import SellBanner from "../../components/SellBanner";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Banner />
      <SellBanner title="Mais vendidos" />
    </Container>
  );
};

export default Home;
