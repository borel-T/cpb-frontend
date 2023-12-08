import React from "react";
import ImageWCanvas from "../imgCanvas";

function ProductCard({ id = "", bodyHtml = null, imageUrl = "" }) {
  console.log("imageUrl", imageUrl);
  return (
    <div style={{ border: "1px solid red" }}>
      <ImageWCanvas src={imageUrl} />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}

export default ProductCard;
