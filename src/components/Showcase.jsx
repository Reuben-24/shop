import styles from "../styles/Showcase.module.css";

import { useOutletContext, Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Showcase() {
  const { products, handleAddToCart } = useOutletContext();

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            <strong className={styles.bold}>Built</strong> for the Game.{" "}
            <strong className={styles.bold}>Styled</strong> for the Streets.
          </h2>
          <div className={styles.heroButtonContainer}>
            <Link to="/browse" className={styles.heroButton}>
              Browse Now
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.featuredHeading}>Featured Products</h2>
        <div className={styles.featuredContainer}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsHeading}>What Our Customers Are Saying</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "This shop just gets it. The site is easy to navigate, the photos are true to life, and the checkout process was seamless. But what really stood out was the little things — a handwritten thank-you note in the box, fast tracked shipping, and the fact that the shoes smelled like fresh leather. It’s that level of detail that earns lifelong customers."
            </p>
            <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>Alex J.</p>
                <p className={styles.authorLocation}>Sydney, AU</p>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "I've never been more impressed with an online store. From the moment I landed on the homepage, everything felt smooth and curated. I ordered a pair of limited-edition sneakers and not only did they arrive in just two days, but the packaging was sleek and premium. You can really tell this brand cares about both the product and the experience. Already eyeing my next pair!"
            </p>
            <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>Samantha K.</p>
                <p className={styles.authorLocation}>Melbourne, AU</p>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "Absolutely blown away by the quality and comfort. I’ve bought shoes online before and it’s always a gamble — but these fit perfectly right out of the box. The materials feel top-notch, and the design turns heads every time I wear them. Even the customer support team was super responsive when I had a sizing question. Easily one of the best purchases I’ve made this year."
            </p>
            <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>Dylan R.</p>
                <p className={styles.authorLocation}>Brisbane, AU</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Showcase;
