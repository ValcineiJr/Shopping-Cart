import React, { useState } from "react";

import {
  Container,
  Header,
  MenuBox,
  MenuIcon,
  UserIcon,
  CartIcon,
  Li,
} from "./styles";

const HeaderMobile = () => {
  const [display, setDisplay] = useState("none");

  const toggleMenu = () => {
    if (display === "none") setDisplay("flex");
    if (display === "flex") setDisplay("none");
  };
  return (
    <Container>
      <Header>
        <MenuIcon onClick={toggleMenu} />
        <div>
          <UserIcon />
          <CartIcon />
        </div>
      </Header>
      <MenuBox display={display}>
        <ul>
          <Li>Roupas</Li>
          <Li>Lingeries</Li>
          <Li>Moletons</Li>
          <Li>Calçados</Li>
          <Li>Casacos</Li>
        </ul>
      </MenuBox>
    </Container>
  );
};

export default HeaderMobile;
