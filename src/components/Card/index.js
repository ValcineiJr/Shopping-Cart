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

  const handleAddtoCart = (item) => {
    return ADD_TO_CART(item);
  };

  return (
    <Container>
      <Title>{data.title}</Title>

      <Image src={data.img} />

      <Desc>{data.desc}</Desc>
      <Buy>
        <Price>R$: {FormattedTotal(data.price)}</Price>
        <AddButton onClick={() => handleAddtoCart(data)}>
          <TextLink to="/cart">Adicionar ao carrinho</TextLink>
        </AddButton>
      </Buy>
    </Container>
  );
};

export default Card;
