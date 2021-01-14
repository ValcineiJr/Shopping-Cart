import React, { createContext, useState, useContext, useEffect } from "react";
import produto from "../assets/images/produto1.webp";
const ItensContext = createContext({
  allItens: Array,
  mostSellersItens: Array,
  offerItens: Array,
});

const MSI = [
  { id: "1", title: "Camiseta infantil freefire", img: produto, price: 35.99 },
  { id: "2", title: "Camiseta infantil freefire", img: produto, price: 49.99 },
  { id: "3", title: "Camiseta infantil freefire", img: produto, price: 39.99 },
  { id: "4", title: "Camiseta infantil freefire", img: produto, price: 29.99 },
  { id: "5", title: "Camiseta infantil freefire", img: produto, price: 29.99 },
  { id: "6", title: "Camiseta infantil freefire", img: produto, price: 29.99 },
];

export const ItensProvider = ({ children }) => {
  const [allItens] = useState([]);
  const [mostSellersItens] = useState(MSI);
  const [offerItens] = useState([]);

  return (
    <ItensContext.Provider
      value={{
        allItens,
        offerItens,
        mostSellersItens,
      }}
    >
      {children}
    </ItensContext.Provider>
  );
};

export function useItens() {
  return useContext(ItensContext);
}
