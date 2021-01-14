import React from "react";
import { useCart } from "../../contexts/cart";
import {
  Container,
  Title,
  Image,
  Price,
  Desc,
  Buy,
  AddButton,
  TextLink,
} from "./styles";
const Card = ({ data }) => {
  const { ADD_TO_CART, FormattedTotal } = useCart();

  return (
    <Container onClick={() => {}}>
      <Image src={data.img} />

      <Buy>
        <Title>{data.title}</Title>
        <Price>R$: {FormattedTotal(data.price)}</Price>
      </Buy>
    </Container>
  );
};

export default Card;
