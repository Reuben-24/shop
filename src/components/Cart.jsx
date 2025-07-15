import styles from "../styles/Cart.module.css";

import CartLine from "./CartLine.jsx";

import { shippingFee } from "../constants.js";
import { formatAsPrice } from "../utils.js";

import { useOutletContext, Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    cartTotalQuantity,
    cartTotalPrice,
  } = useOutletContext();

  const orderTotal = cartTotalPrice + shippingFee;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartPageWrapper}>
        {cart.length === 0 ? (
          <p className={styles.emptyCartMessage}>
            Your cart is empty. Click{" "}
            <Link className={styles.emptyCartLink} to="/browse">
              here
            </Link>{" "}
            to browse products.
          </p>
        ) : (
          <>
            <section className={styles.cartSummary}>
              <h2 className={styles.cartSummaryHeading}>Cart</h2>
              <ul className={styles.cartLines}>
                {cart.map((product) => (
                  <CartLine
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </ul>
              <button
                className={styles.clearCartButton}
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </section>

            <section className={styles.orderSummary}>
              <h2 className={styles.orderSummaryHeading}>Summary</h2>
              <div className={styles.flexSection}>
                <div className={styles.flexContainer}>
                  <span className={styles.orderLabel}>Total Items</span>
                  <span className={styles.orderValue}>{cartTotalQuantity}</span>
                </div>
                <div className={styles.flexContainer}>
                  <span className={styles.orderLabel}>Subtotal</span>
                  <span className={styles.orderValue}>
                    {formatAsPrice(cartTotalPrice)}
                  </span>
                </div>
                <div className={styles.flexContainer}>
                  <span className={styles.orderLabel}>Shipping</span>
                  <span className={styles.orderValue}>
                    {formatAsPrice(shippingFee)}
                  </span>
                </div>
              </div>
              <div className={styles.flexSection}>
                <div className={styles.flexContainer}>
                  <span className={styles.orderTotalLabel}>Total</span>
                  <span className={styles.orderTotalValue}>
                    {formatAsPrice(orderTotal)}
                  </span>
                </div>
                <span className={styles.orderSubtext}>
                  Inclusive of 10% GST
                </span>
              </div>
              <Link className={styles.checkoutButton} to="/about">
                Checkout
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
