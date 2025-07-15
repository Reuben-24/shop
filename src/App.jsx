import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";

import productsData from "./products.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const isShowcase = location.pathname === "/";

  const cartTotalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const cartTotalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      return prevCart
        .map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity - quantity }
            : p
        )
        .filter((p) => p.quantity > 0);
    });
  };

  const handleClearCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items from your cart? This action cannot be undone."
    );
    if (confirmed) {
      setCart([]);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header
        cart={cart}
        isTransparent={isShowcase}
        cartTotalQuantity={cartTotalQuantity}
        cartTotalPrice={cartTotalPrice}
      />
      <Outlet
        context={{
          products,
          cart,
          handleAddToCart,
          handleRemoveFromCart,
          handleClearCart,
          cartTotalQuantity,
          cartTotalPrice,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
