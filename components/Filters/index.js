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
            className={r.range == priceRange?.range ? styles.active : ""}
            onClick={() => setRange(r)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className={styles.filters}>
        <div className={styles.filter}>
          <div className={styles.filterHead}>
            <h3>Filters</h3>

            <button>Reset</button>
          </div>
          <div>
            <FilterCheckbox label="On Sale Items" />
            <FilterCheckbox label="In Stock" />
            <FilterCheckbox label="On Backorder" />
          </div>
        </div>

        <div className={styles.filter}>
          <div className={styles.filterHead}>
            <h3>Category</h3>

            <p>Hide</p>
          </div>

          <div>
            <FilterCheckbox label="On Sale Items" />
            <FilterCheckbox label="In Stock" />
            <FilterCheckbox label="On Backorder" />
          </div>
        </div>
      </div>
    </aside>
  );
};

const FilterCheckbox = ({ label = "No label provided", checked = false }) => {
  return (
    <div className={styles.filterBox}>
      <input type="checkbox" checked={checked} /> <p>{label}</p>
    </div>
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
