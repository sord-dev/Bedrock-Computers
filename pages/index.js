import { BenefitGrid, Hero, Product } from "../components";
import styles from "../styles/Home.module.css";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <BenefitGrid />

      <div className={"content-container"}>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <h2>Our best selling computers</h2>
          <p>
            You’ll get silky smooth performance on Warzone, GTA V and flight
            simulators for example. These PCs look and feel new, except they
            don’t harm the environment with manufacturing new electronics
          </p>
        </div>
        <HottestProducts />
      </div>
    </>
  );
}

const HottestProducts = () => {
  return (
    <div className={styles.product_row}>
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
  );
};
