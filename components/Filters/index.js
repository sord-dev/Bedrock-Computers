import Link from "next/link";
import useBreadcrumb from "../../hooks/useBreadcrum";
import { MainFilters } from "./mainFilters";
import styles from "./styles.module.css";

export const Filters = ({ priceRange, ranges, filterControls = {} }) => {
  return (
    <aside className={styles.store_filter}>
      <BreadCrumb />

      <PriceRanges {...{ ranges, priceRange, filterControls }} />

      <MainFilters {...{ filterControls }} />
    </aside>
  );
};

const PriceRanges = ({ ranges, priceRange, filterControls }) => {
  return (
    <div className={styles.rangeGroups}>
      {ranges.map((r) => (
        <button
          className={r.range == priceRange?.range ? styles.active : ""}
          onClick={() => filterControls?.selectPriceRange(r)}
        >
          {r.label}
        </button>
      ))}
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
