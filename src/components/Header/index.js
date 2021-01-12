import React from "react";
import { Link } from "react-router-dom";
import { Container, Input, CartButton } from "./styles";

const Header = () => {
  return (
    <Container>
      <Input placeholder="Procure um item em nossa lista." />
      <Link to="/cart">
        <CartButton size={30} />
      </Link>
    </Container>
  );
};

export default Header;
