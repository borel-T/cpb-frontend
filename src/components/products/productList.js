import React from "react";
import ProductCard from "./productCard";

function ProductList({ list = [] }) {
  if (list.length > 0) {
    return (
      <div className="card-container">
        {list.length > 0 &&
          list.map((item, key) => (
            <ProductCard
              key={key}
              id={item.id}
              imageUrl={item.images[0]?.src}
              bodyHtml={item.bodyHtml}
            />
          ))}
      </div>
    );
  }
  return null;
}

export default ProductList;
