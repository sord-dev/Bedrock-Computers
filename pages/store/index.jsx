import Link from "next/link";
import { Product, StoreGuarentee } from "../../components";
import styles from "../../styles/StoreHome.module.css";

const IndexPage = () => {
  return (
    <>
      <StoreGuarentee />
      <div className={"content-container"}>
        <section className={styles.heroSection}>
          <h1>Welcome to Computer Store</h1>
          <p className={styles.heroDescription}>
            Discover the latest and greatest computers and PC components.
          </p>
        </section>
        <CategoriesGroup />
        <FeaturedSection />
        <InfoSection />
      </div>
    </>
  );
};

const CategoriesGroup = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/store/gaming-pcs">Gaming PCs</Link>
        </li>
        <li>
          <Link href="/store/office-pcs">Office PCs</Link>
        </li>
        <li>
          <Link href="/store/parts">PC Parts</Link>
        </li>
      </ul>
    </nav>
  );
};

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContent}>
        <h3>Why Choose Us?</h3>
        <p>
          We pride ourselves on offering top-notch customer service and a wide
          selection of high-quality computers and components. Our team of
          experts is dedicated to helping you find the perfect solution that
          fits your needs and budget.
        </p>
      </div>
      <div className={styles.infoContent}>
        <h3>Fast and Secure Shipping</h3>
        <p>
          We understand the importance of receiving your order quickly and
          securely. That's why we offer fast shipping options and ensure that
          your products are packed with care to protect them during transit.
        </p>
      </div>
      <div className={styles.infoContent}>
        <h3>Easy Returns and Exchanges</h3>
        <p>
          Your satisfaction is our priority. If you're not completely satisfied
          with your purchase, we offer hassle-free returns and exchanges within
          30 days. Customer satisfaction guaranteed!
        </p>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <h2>Featured Products</h2>
      <div className={styles.productGrid}>
        <Product
          {...{
            image:
              "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
            name: "Some Random PC",
            price: 0,
          }}
        />
        <Product
          {...{
            image:
              "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
            name: "Some Random PC That's Better Than The Others",
            price: 1337,
          }}
        />
        <Product
          {...{
            image:
              "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
            name: "Some Random PC",
            price: 0,
          }}
        />
        <Product
          {...{
            image:
              "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
            name: "Some Random PC",
            price: 0,
          }}
        />
      </div>
    </section>
  );
};

export default IndexPage;
