import { Link } from "react-router-dom";
import { useState } from "react";

import { formatAsPrice } from "../utils.js";

export default function ProductCard({ product, handleAddToCart }) {
  const [justAdded, setJustAdded] = useState(false);
  const { id, name, price } = product;

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(product);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  return (
    <Link className="productCard" to={`/product/${id}`}>
      <div className="productImageWrapper">
        <img
          className="productImage"
          src={`/product-images/${id}.jpg`}
          alt={name}
        ></img>
      </div>
      <div className="productDetails">
        <h3 className="productName">{name}</h3>
        <div className="cardDetailsBottomContainer">
          <p className="productPrice">{formatAsPrice(price)}</p>
          <button className="addToCartButton" onClick={handleAddToCartClick}>
            {justAdded ? (
              <svg
                className="addedIcon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                className="addIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
