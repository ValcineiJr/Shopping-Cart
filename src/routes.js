import React from "react";
import { CartProvider } from "./contexts/cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function Routes() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <HeaderMobile />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default Routes;
