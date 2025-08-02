import styles from "../styles/Cart.module.css";

import { formatAsPrice } from "../utils";

function CartLine({ product, handleAddToCart, handleRemoveFromCart }) {
  const lineTotal = product.price * product.quantity;

  return (
    <li className={styles.cartLine}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`/product-images/${product.id}.jpg`}
          alt={product.name}
        />
      </div>

      <div className={styles.productDetails}>
        <div className={styles.productNamePriceContainer}>
          <span className={styles.productName}>{product.name}</span>
          <span className={styles.productPrice}>
            {formatAsPrice(product.price)}
          </span>
        </div>

        <div className={styles.productInfo}>
          <span className={styles.lineTotal}>{formatAsPrice(lineTotal)}</span>

          <div className={styles.quantityContainer}>
            <button
              className={styles.addButton}
              onClick={() => handleAddToCart(product)}
              aria-label={`Add one more ${product.name} to cart`}
            >
              <svg
                className={styles.minusIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            <span className={styles.quantity}>{product.quantity}</span>

            <button
              className={styles.minusButton}
              onClick={() => handleRemoveFromCart(product)}
              aria-label={`Remove one ${product.name} from cart`}
            >
              <svg
                className={styles.plusIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartLine;
