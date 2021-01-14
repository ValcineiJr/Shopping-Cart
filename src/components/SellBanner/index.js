import React, { useRef, useEffect } from "react";
import { useItens } from "../../contexts/itens";
import { useCart } from "../../contexts/cart";
import { Container, Title, Itens } from "./styles";
import Card from "../../components/Card";

const SellBanner = ({ title, data }) => {
  const itensRef = useRef(null);
  const { items } = useCart();
  const { mostSellersItens } = useItens();
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  useEffect(() => {
    itensRef.current.style.cursor = "grab";
    // Attach the handler
    itensRef.current.addEventListener("mousedown", mouseDownHandler);
  }, []);

  const mouseDownHandler = function (e) {
    itensRef.current.style.cursor = "grabbing";
    itensRef.current.style.userSelect = "none";

    pos = {
      left: itensRef.current.scrollLeft,
      top: itensRef.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    itensRef.current.scrollTop = pos.top - dy;
    itensRef.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    itensRef.current.style.cursor = "grab";
    itensRef.current.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Itens ref={itensRef}>
        <ul>
          {mostSellersItens.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </ul>
      </Itens>
    </Container>
  );
};

export default SellBanner;
