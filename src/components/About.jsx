import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutPageWrapper}>
      <main className={styles.aboutPage}>
        <section className={styles.introSection}>
          <h1>About This Store</h1>
          <p>
            This is a fictional e-commerce project built as a learning exercise. It simulates a basic online
            storefront and shopping cart experience.
          </p>
          <p>
            Please note: This is not a real store — no products are for sale,
            and no orders will be processed. It's strictly for learning and
            demonstration purposes.
          </p>
        </section>
        <section className={styles.acknowledgementsSection}>
          <h2>Acknowledgements</h2>
          <p>
            Hero background image sourced from
            <a
              href="https://www.pexels.com/@catiamatos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://www.pexels.com/@catiamatos/
            </a>
            . Testimonials background image sourced from
            <a
              href="https://www.pexels.com/@rdne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://www.pexels.com/@rdne/
            </a>
            . Various sneaker images and icons sourced from
            <a
              href="https://www.vecteezy.com/free-vector/sneakers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Sneakers Vectors by Vecteezy
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
