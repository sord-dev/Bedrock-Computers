import { useState, useEffect } from "react";
import { useProducts } from "../../contexts/products";
import { Filters, Product, StoreGuarentee } from "../../components";
import styles from "../../styles/Store.module.css";

const RANGES = [
  { label: "Entry Level", range: [0, 400] },
  { label: "Mid Range", range: [400, 675] },
  { label: "High End", range: [675, 2000] },
];

const StorePage = () => {
  const { products } = useProducts();
  const [result, setResult] = useState([]);
  const [priceRange, setPriceRange] = useState(null);

  const selectPriceRange = (range) => {
    if (priceRange == range) setPriceRange(null);
    else setPriceRange(range);
  };

  const clearFilters = () => {
    setPriceRange(null);
  };

  useEffect(() => {
    if (!priceRange) setResult(products);
    else {
      let filtered = products.filter((p) => {
        return (
          Math.round(p.price) >= priceRange.range[0] &&
          Math.round(p.price) <= priceRange.range[1]
        );
      });
      console.log(filtered);
      setResult(filtered);
    }
  }, [priceRange]);

  return (
    <div className={"content-container"}>
      <StoreGuarentee />

      <section className={styles.store_partition}>
        <Filters
          ranges={RANGES}
          priceRange={priceRange}
          filterControls={{ selectPriceRange, clearFilters }}
        />

        <ProductList products={result} />
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
