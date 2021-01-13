import React from "react";
import { useCart } from "../../contexts/cart";
import { Container } from "./styles";
import Card from "../../components/Card";

const Home = () => {
  const { items } = useCart();

  const ListItems = () => items.map((item) => <Card data={item} />);

  return <Container>{/* <ListItems /> */}</Container>;
};

export default Home;
