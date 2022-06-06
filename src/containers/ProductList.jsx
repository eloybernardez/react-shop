import React from "react";
import useGetProducts from "@hooks/useGetProducts";
import ProductItem from "../components/ProductItem";
import "@styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product, index) => {
          return (
            <ProductItem
              product={product}
              indexValue={index}
              index={product.id}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
