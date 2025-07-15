import styles from "../styles/Product.module.css";

function ProductGeneralInfo() {
  return (
    <section className={styles.generalInfo}>
      <h2>General Information</h2>
      <h3>Shipping Information</h3>
      <p>
        All orders are processed within 1–2 business days. Standard shipping
        typically takes 3–7 business days, while express options are available
        at checkout. We currently ship Australia-wide with tracking included on
        all deliveries.
      </p>

      <h3>Returns & Exchanges</h3>
      <p>
        Not happy with your order? No worries — we offer a 30-day return policy
        on all unused items in their original packaging. To start a return or
        exchange, simply contact our support team with your order number. Please
        note: return shipping costs are the responsibility of the customer
        unless the item is faulty.
      </p>

      <h3>Satisfaction Guarantee & Customer Support</h3>
      <p>
        We stand by the quality of every product we sell. If something isn’t
        right, let us know — we’ll make it right. For any questions, email us at{" "}
        <a href="mailto:support@example.com">support@example.com</a> or reach
        out via our <a href="/contact">contact form</a>. We're here to help!
      </p>

      <h3>International Orders</h3>
      <p>
        Currently, we only ship within Australia. If you're located outside
        Australia and are interested in our products, feel free to{" "}
        <a href="/contact">get in touch</a> for special requests or shipping
        quotes.
      </p>

      <h3>Environmental Commitment</h3>
      <p>
        We care about the environment. All our packaging is recyclable or
        compostable where possible, and we work with suppliers who prioritize
        sustainable practices.
      </p>

      <h3>Payment Security</h3>
      <p>
        All transactions are securely processed with industry-standard
        encryption. We accept all major credit cards, PayPal, and Afterpay for
        your convenience and peace of mind.
      </p>

      <h3>Disclaimer</h3>
      <p>
        Product images are for illustrative purposes only and may vary slightly
        from the final product. Availability and specifications are subject to
        change without notice.
      </p>
    </section>
  );
}

export default ProductGeneralInfo;
