import React, { useState, useContext, createContext, useEffect } from "react";

import DATA from "../public/products.js";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cases, setCases] = useState([]);

  const getProduct = (id) => {
    const product = products.find((p) => p.id == id);
    if (!product) return;

    const productCases = product.cases.map((pc) =>
      cases.find((c) => c.id == pc)
    );

    if (product && cases.length) {
      return { ...product, cases: productCases };
    }
  };

  useEffect(() => {
    setProducts(DATA.TEMP_PRODUCTS);
    setCases(DATA.TEMP_CASES);
  }, []);

  return (
    <ProductContext.Provider value={{ products, cases, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
