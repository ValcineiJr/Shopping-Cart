import React from "react";

import { Container } from "./styles";
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
