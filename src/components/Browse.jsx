import styles from "../styles/Browse.module.css";

import ProductCard from "./ProductCard";

import { isSearchMatch, sortProducts } from "../utils";

import { useState, useEffect } from "react";
import { Form, useOutletContext } from "react-router-dom";

function Browse() {
  const { products, handleAddToCart } = useOutletContext();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [sortInputValue, setSortInputValue] = useState("default");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortInputValue(e.target.value);
  };

  useEffect(() => {
    if (!products) return;

    let filtered = products;

    if (searchInputValue.trim()) {
      filtered = products.filter((product) =>
        isSearchMatch(searchInputValue, product.name)
      );
    }

    const sorted = sortProducts(filtered, sortInputValue)
    setDisplayedProducts(sorted);
  }, [searchInputValue, sortInputValue, products]);

  return (
    <>
      <section className={styles.productControls}>
        <div className={styles.searchBox}>
          <svg
            aria-hidden="true"
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
          </svg>

          <input
            onChange={handleSearchChange}
            value={searchInputValue}
            type="search"
            name="q"
            className={styles.searchInput}
            placeholder="Search products..."
            aria-label="Search products"
            autoFocus
          />
        </div>

        <select
          className={styles.select}
          aria-label="Sort products"
          onChange={handleSortChange}
          value={sortInputValue}
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>

      <section className={styles.productDisplay}>
        <h2 className={styles.productsDisplayHeading}>
          {searchInputValue
            ? `Found ${displayedProducts.length} result${displayedProducts.length === 1 ? '' : 's'} for: "${searchInputValue}"`
            : `All Products (${displayedProducts.length})`}
        </h2>
        <div className={styles.productsContainer}>
          {displayedProducts.length === 0 ? (
            <p className={styles.noProductsFoundMessage}>No products found for this search.</p>
          ) : (
            displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Browse;