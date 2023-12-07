import React from "react";

function ProductCard({ id = "", bodyHtml = null, imageUrl = "" }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}

export default ProductCard;
