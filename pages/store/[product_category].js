import { useState } from "react";
import { useProducts } from "../../contexts/products";
import { Filters, Product, StoreGuarentee } from "../../components";
import styles from "../../styles/Store.module.css";

const RANGES = [
  { label: "Entry Level", range: [100, 400] },
  { label: "Mid Range", range: [400, 600] },
  { label: "High End", range: [600, 800] },
];

const StorePage = () => {
  const { products } = useProducts();
  const [priceRange, setPriceRange] = useState(null);

  return (
    <div className={"content-container"}>
      <StoreGuarentee />

      <section className={styles.store_partition}>
        <Filters
          ranges={RANGES}
          priceRange={priceRange}
          setRange={setPriceRange}
        />

        <ProductList products={products} />
      </section>
    </div>
  );
};

const ProductList = ({ products = [] }) => {
  return (
    <div className={styles.results}>
      {products.length
        ? products.map((p) => <Product {...p} />)
        : "Error no products provided."}
    </div>
  );
};

export default StorePage;
