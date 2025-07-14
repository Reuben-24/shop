import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import productsData from "./products.js";
import { formatAsPrice } from "./utils.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const isShowcase = location.pathname === "/";

  const cartTotalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const cartTotalPriceFormatted = formatAsPrice(
    cart.reduce((total, product) => total + product.price, 0)
  );

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(p => p.id === product.id);

      if (existingProduct) {
        return prevCart.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };


  return (
    <>
      <Header
        cartTotalQuantity={cartTotalQuantity}
        cartTotalPriceFormatted={cartTotalPriceFormatted}
        isTransparent={isShowcase}
      />
      <Outlet context={{ products, cart, handleAddToCart }} />
      <Footer />
    </>
  );
}

export default App;
