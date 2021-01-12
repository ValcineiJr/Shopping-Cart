import React from "react";
import { useCart } from "../../contexts/cart";
import QuantityComponent from "../../components/QuantityComponent";
import {
  Container,
  Info,
  Image,
  QuantityBox,
  Title,
  PriceBox,
  RemoveButton,
  Price,
  Quantity,
} from "./styles";

const CartItem = ({ data }) => {
  const { REMOVE_ITEM, FormattedTotal } = useCart();
  return (
    <Container>
      <Image src={data.img} />
      <Info>
        <Title>{data.title}</Title>
        <div>
          <RemoveButton onClick={() => REMOVE_ITEM(data)}>Excluir</RemoveButton>
        </div>
      </Info>
      <QuantityBox>
        <QuantityComponent data={data} />
      </QuantityBox>
      <PriceBox>
        <Price>R$: {FormattedTotal(data.price)}</Price>
      </PriceBox>
    </Container>
  );
};

export default CartItem;
