import Link from "next/link";
import {useState} from 'react'
import { Product, StoreGuarentee } from "../../components";
import { useProducts } from "../../contexts/products";
import useBreadcrumb from "../../hooks/useBreadcrum";

import styles from "../../styles/Store.module.css";

const Gaming = () => {
  const { products } = useProducts();

  
  const [priceRange, setPriceRange] = useState(null)

  return (
    <div className={"content-container"}>
      <StoreGuarentee />

      <section className={styles.store_partition}>
        <aside className={styles.store_filter}>
          <BreadCrumb />

          <div className={styles.rangeGroups}>
            <button className={styles.active}>Entry Level</button>
            <button>Mid Range</button>
            <button>High End</button>
          </div>

          <div className={styles.filters}>main item filters</div>
        </aside>

        <ProductList products={products} />
      </section>
    </div>
  );
};

const ProductList = ({products = [] }) => {
  return (
    <div className={styles.results}>
          {products.length
            ? products.map((p) => <Product {...p} />)
            : "Error no products provided."}
        </div>
  )
}

const BreadCrumb = () => {
  const breadcrumb = useBreadcrumb();
  return (
    <div className={styles.breadcrumb}>
            <ul>
              {breadcrumb.map((item, index) => (
                <>
                  <li key={index}>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                  {index !== breadcrumb.length - 1 ? ">" : null}
                </>
              ))}
            </ul>
          </div>
  )
}

export default Gaming;
