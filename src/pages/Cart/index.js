import React from "react";
import { useCart } from "../../contexts/cart";

import {
  Container,
  ShowTotal,
  Checkout,
  Message,
  BackButton,
  Back,
} from "./styles";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const { addedItems, FormattedTotal, total } = useCart();

  const NoItems = () => (
    <>
      <Message>Sem nenhum item no carrinho, comece a comprar.</Message>
      <BackButton to="/">Voltar</BackButton>
    </>
  );

  const CartList = () => (
    <>
      {addedItems.map((item) => (
        <CartItem data={item} />
      ))}
      <ShowTotal>
        <>Total R$ {FormattedTotal(total)}</>
      </ShowTotal>
      <Checkout>Continuar Compra</Checkout>
      <Back to="/">Voltar</Back>
    </>
  );
  return (
    <Container>{addedItems.length > 0 ? <CartList /> : <NoItems />}</Container>
  );
};

export default Cart;
