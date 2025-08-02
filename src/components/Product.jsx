import styles from "../styles/Product.module.css";

import { useState } from "react";
import {
  useParams,
  useOutletContext,
  Link,
  useNavigate,
} from "react-router-dom";

import ProductGeneralInfo from "./ProductGeneralInfo";

import { formatAsPrice } from "../utils";

function Product() {
  const { products, cart, handleAddToCart } = useOutletContext();
  const { id } = useParams();
  const [addedMessageVisible, setAddedMessageVisible] = useState(false);
  const navigate = useNavigate();

  if (!products) return <p>Loading product info...</p>;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Sorry, this product doesn't exist.</p>
        <button type="button" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    );
  }

  const handleAddToCartSubmit = (e) => {
    e.preventDefault();
    const quantity = Number(e.target.elements["product-quantity-input"].value);
    handleAddToCart(product, quantity);
    setAddedMessageVisible(true);
    e.target.reset();
  };

  return (
    <div className={styles.productDisplayContainer}>
      <section className={styles.productDisplay}>
        <div className={styles.imageWrapper}>
          <button
            className={styles.goBackButton}
            type="button"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          <img
            className={styles.productImage}
            src={`/product-images/${product.id}.jpg`}
            alt={product.name}
          ></img>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.productInfo}>
            <h2>{product.name}</h2>
            <p className={styles.productPrice}>
              {formatAsPrice(product.price)}
            </p>
            <p className={styles.productDescription}>{product.description}</p>
          </div>

          <div className={styles.orderDetails}>
            <form
              className={styles.addToCartForm}
              onSubmit={handleAddToCartSubmit}
            >
              <label htmlFor="product-quantity-input">Quantity</label>
              <input
                placeholder="e.g. 1"
                required
                min="1"
                step="1"
                type="number"
                name="product-quantity-input"
                id="product-quantity-input"
              />
              <button type="submit">Add To Cart</button>
            </form>
            {addedMessageVisible && (
              <p className={styles.successMessage}>&#10003; Added to cart!</p>
            )}
            {cart.length > 0 && <Link to="/cart">Checkout</Link>}
          </div>
        </div>
      </section>

      <ProductGeneralInfo />
    </div>
  );
}

export default Product;
