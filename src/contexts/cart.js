import React, { createContext, useState, useContext, useEffect } from "react";
import img1 from "../assets/images/celular1.webp";
import img2 from "../assets/images/celular2.webp";
import img3 from "../assets/images/celular3.webp";
import img4 from "../assets/images/celular4.webp";
import img5 from "../assets/images/fone.webp";
import img6 from "../assets/images/pes.webp";
import img7 from "../assets/images/sofa.webp";
const CartContext = createContext({
  items: Array,
  addedItems: Array,
  total: Number,
  ADD_TO_CART: Function,
  REMOVE_ITEM: Function,
  ADD_QUANTITY: Function,
  SUB_QUANTITY: Function,
  ADD_SHIPPING: Function,
  SUB_SHIPPING: Function,
  FormattedTotal: Function,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Fone De Ouvido Sem Fio Jbl Tune 500bt Preto",
      desc:
        "O formato perfeito para você. Sendo on-ear, eles descansam confortavelmente nos seus ouvidos e oferecem uma ótima qualidade de som. Prepare suas listas de reprodução favoritas e use-as em viagens longas ou atividades ao ar livre.",
      price: 214,
      img: img5,
    },
    {
      id: 2,
      title: "Pes 2021",
      desc: "Jogo com Narração em Português do Brasil.",
      price: 160,
      img: img6,
    },
    {
      id: 3,
      title: "Sofá 3 Lugares Retrátil",
      desc:
        "Que tal o Sofá Lubeck?É na sala de estar onde a maior parte dos momentos de lazer da família acontece, seja curtindo um filminho, jogando aquele lançamento dos games ou recebendo os amigos para um café",
      price: 499,
      img: img7,
    },
    {
      id: 4,
      title: "Smartphone Samsung Galaxy A21s",
      desc:
        'Câmera Quádrupla 48MP(Principal)+8MP(Ultra Wide)+2MP(Profundidade)+2MP(Macro), Frontal de 13MP, Tela Infinita de 6.5", Leitor de Digital, Octa Core, 64GB, 4GB RAM, 5000mAh com carregamento rápido de 15W, Dual Chip',
      price: 1379,
      img: img1,
    },
    {
      id: 5,
      title: "iPhone 12 Pro Max Grafite",
      desc:
        'Sistema Operacional iOS 14 TelaTamanho: 6,7 "Material: Super Retina XDR - OLED sem bordas Resolução: 2778 x 1284 pixels a 458 ppp Conectividade 4G/5G Wi-Fi EDGE Bluetooth',
      price: 9199,
      img: img2,
    },
    {
      id: 6,
      title: "Samsung Galaxy A01",
      desc: "Core Dual SIM 32 GB preto 2 GB RAM",
      price: 699,
      img: img3,
    },
    {
      id: 7,
      title: "Smartphone Samsung Galaxy A51",
      desc:
        "Tenha uma visão completa com o Display Infinito - Projetado para oferecer mais estilo e conforto, a câmera quádrupla permite que você fotografe com mais perspectiva.",
      price: 1599,
      img: img4,
    },
  ]);
  const [addedItems, setAddedItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadLocalData();
  }, []);

  useEffect(() => {
    saveLocalData(addedItems);
  }, [addedItems]);

  const loadLocalData = () => {
    const dataCart = localStorage.getItem("cart");
    const dataTotal = localStorage.getItem("cartTotal");

    if (dataCart) {
      const dataJson = JSON.parse(dataCart);
      const totalJson = JSON.parse(dataTotal);
      setAddedItems(dataJson);
      setTotal(totalJson);
    }
  };

  const saveLocalData = (value) => {
    const dataCart = JSON.stringify(value);
    const totalCart = JSON.stringify(total);
    localStorage.setItem("cart", dataCart);
    localStorage.setItem("cartTotal", totalCart);
  };

  const FormattedTotal = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(value);
  };

  const ADD_TO_CART = (value) => {
    const addedItem = items.find((item) => item.id === value.id);
    const existed_item = addedItems.find((item) => value.id === item.id);

    if (existed_item) {
      const new_items = addedItems.filter((item) => {
        if (item.id === value.id) {
          return (item.quantity += 1);
        } else {
          return item;
        }
      });
      const newTotal = total + addedItem.price;

      setAddedItems(new_items);
      setTotal(newTotal);
    } else {
      addedItem.quantity = 1;
      //calculating the total
      const newTotal = total + addedItem.price;

      setAddedItems([...addedItems, addedItem]);

      setTotal(newTotal);
    }
  };

  const REMOVE_ITEM = (value) => {
    const itemToRemove = addedItems.find((item) => value.id === item.id);
    const new_items = addedItems.filter((item) => value.id !== item.id);

    const newTotal = total - itemToRemove.price * itemToRemove.quantity;

    setAddedItems(new_items);
    setTotal(newTotal);
  };

  const ADD_QUANTITY = (value) => {
    const addedItem = items.find((item) => item.id === value.id);
    const new_items = addedItems.filter((item) => {
      if (item.id === value.id) {
        return (item.quantity += 1);
      } else {
        return item;
      }
    });
    const newTotal = total + addedItem.price;

    setAddedItems(new_items);
    setTotal(newTotal);
  };

  const SUB_QUANTITY = (value) => {
    const addedItem = items.find((item) => item.id === value.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      REMOVE_ITEM(value);
    } else {
      const new_items = addedItems.filter((item) => {
        if (item.id === value.id) {
          return (item.quantity -= 1);
        } else {
          return item;
        }
      });
      const newTotal = total - addedItem.price;

      setAddedItems(new_items);
      setTotal(newTotal);
    }
  };

  const ADD_SHIPPING = (value) => {
    return setTotal(total + value);
  };
  const SUB_SHIPPING = (value) => {
    return setTotal(total - value);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addedItems,
        total,
        ADD_TO_CART,
        REMOVE_ITEM,
        ADD_QUANTITY,
        SUB_QUANTITY,
        ADD_SHIPPING,
        SUB_SHIPPING,
        FormattedTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
