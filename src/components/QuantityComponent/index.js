import React from "react";
import { useCart } from "../../contexts/cart";
import { Container, RemoveButton, Value, AddButton } from "./styles";

const QuantityComponent = ({ data }) => {
  const { SUB_QUANTITY, ADD_QUANTITY } = useCart();

  return (
    <Container>
      <RemoveButton onClick={() => SUB_QUANTITY(data)} />
      <Value>{data.quantity}</Value>
      <AddButton onClick={() => ADD_QUANTITY(data)} />
    </Container>
  );
};

export default QuantityComponent;
