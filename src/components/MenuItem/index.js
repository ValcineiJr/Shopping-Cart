import React from "react";

import { Container, Body, Title, SubTitle } from "./styles";

const MenuItem = ({ children, firstLine, secondLine }) => {
  return (
    <Container>
      {children}
      <Body>
        <Title>{firstLine}</Title>
        <SubTitle>{secondLine}</SubTitle>
      </Body>
    </Container>
  );
};

export default MenuItem;
