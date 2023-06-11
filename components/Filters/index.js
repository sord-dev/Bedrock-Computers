import Link from "next/link";
import useBreadcrumb from "../../hooks/useBreadcrum";
import styles from "./styles.module.css";

export const Filters = ({
  priceRange,
  ranges,
  setRange = (range) => {
    console.log(range);
  },
}) => {
  return (
    <aside className={styles.store_filter}>
      <BreadCrumb />

      <div className={styles.rangeGroups}>
        {ranges.map((r) => (
          <button
            className={r.range == priceRange ? styles.active : ""}
            onClick={() => setRange(r.range)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className={styles.filters}>main item filters</div>
    </aside>
  );
};

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
  );
};
