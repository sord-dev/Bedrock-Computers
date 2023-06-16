import styles from "./styles.module.css";

export const MainFilters = ({ filterControls }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <div className={styles.filterHead}>
          <h3>Filters</h3>

          <button onClick={filterControls?.clearFilters}>Reset</button>
        </div>
        <div className={styles.filterBoxList}>
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

        <div className={styles.filterBoxList}>
          <FilterCheckbox label="On Sale Items" />
          <FilterCheckbox label="In Stock" />
          <FilterCheckbox label="On Backorder" />
        </div>
      </div>
    </div>
  );
};

const FilterCheckbox = ({ label = "No label provided", checked = false }) => {
  return (
    <div className={styles.filterBox}>
      <input type="checkbox" checked={checked} /> <p>{label}</p>
    </div>
  );
};
