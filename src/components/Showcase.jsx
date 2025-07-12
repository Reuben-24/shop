import styles from "../styles/Showcase.module.css";

import { useOutletContext, Link } from "react-router-dom";

function Showcase() {
  const { products } = useOutletContext();

  const featuredProducts = products.slice(0,4);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}><strong className={styles.bold}>Built</strong> for the Game. <strong className={styles.bold}>Styled</strong> for the Streets.</h2>
          <div className={styles.heroButtonContainer}>
            <Link to="browse"className={styles.heroButton}>Browse Now</Link>
          </div>
        </div>
      </section>
      <section>




      </section>
      <section>
        
      </section>
    </>
  );
}

export default Showcase;