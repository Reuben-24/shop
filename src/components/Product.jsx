import styles from "../styles/Browse.module.css";

function Product() {


  return(
    <>
      <section className={styles.productDisplay}>
        <div className={styles.productDetails}>
          <div className={styles.imageWrapper}>
            <img></img>
          </div>
          <div className={styles.productInfo}>

          </div>
          <div className={styles.orderDetails}>

          </div>
        </div>
      </section>
      
      <section className={styles.generalInfo}>

      </section>
    </>
  );
}

export default Product;