import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/products";

const StorePage = () => {
  const { getProduct } = useProducts();
  const router = useRouter();
  const { product_id } = router.query;

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const product = getProduct(product_id);

    if (product) setCurrentProduct(product);
  }, []);

  return (
    <>
      {currentProduct ? (
        <div className={"content-container"}>
          {JSON.stringify(currentProduct)}
        </div>
      ) : (
        "No Product Found."
      )}
    </>
  );
};

export default StorePage;
