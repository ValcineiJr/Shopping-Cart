import React from "react";

import { Container } from "./styles";

const Banner = () => {
  const banner = [
    { title: "Frete Grátis", subTitle: "Grátis para todo o Brasil" },
    { title: "Troca Grátis", subTitle: "Grátis para todo o Brasil" },
    { title: "Parcelamento", subTitle: "Pague em até 12x sem juros" },
  ];
  return (
    <Container>
      <ul>
        {banner.map((item) => (
          <li>
            <div>
              <span className="title">{item.title}</span>
              <span className="subTitle">{item.subTitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Banner;
