import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import productsData from "./products.js";
import { formatAsPrice } from "./utils.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const cartTotalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const cartTotalPriceFormatted = formatAsPrice(
    cart.reduce((total, product) => total + product.price, 0)
  );

  return (
    <>
      <Header
        cartTotalQuantity={cartTotalQuantity}
        cartTotalPriceFormatted={cartTotalPriceFormatted}
      />
      <Outlet context={{ products }} />
      <Footer />
    </>
  );
}

export default App;
