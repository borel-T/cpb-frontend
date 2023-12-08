import React from "react";
import ProductCard from "./productCard";

function ProductList({ list = [] }) {
  if (list.length > 0) {
    return (
      <>
        {list.length > 0 &&
          list.map((item, key) => (
            <ProductCard
              key={key}
              id={item.id}
              imageUrl={item.images[0]?.src}
              bodyHtml={item.bodyHtml}
            />
          ))}
      </>
    );
  }
  return <>NO PRODUCT FOUND</>;
}

export default ProductList;
