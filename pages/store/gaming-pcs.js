import Link from "next/link";
import { Product, StoreGuarentee } from "../../components";
import { useProducts } from "../../contexts/products";
import useBreadcrumb from "../../hooks/useBreadcrum";

import styles from "../../styles/Store.module.css";

const Gaming = () => {
  const { products } = useProducts();
  const breadcrumb = useBreadcrumb();

  return (
    <div className={"content-container"}>
      <StoreGuarentee />

      <section className={styles.store_partition}>
        <aside className={styles.store_filter}>
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

          <div>price range filters</div>

          <div>main item filters</div>
        </aside>

        <div className={styles.results}>
          {products.length
            ? products.map((p) => <Product {...p} />)
            : "Error no products provided."}
        </div>
      </section>
    </div>
  );
};

export default Gaming;
