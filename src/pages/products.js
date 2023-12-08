import React, { useEffect } from "react";
import ProductList from "../components/products/productList";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/slices/productSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.value);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  let noImageList = allProducts.map((x) => {
    let newB = x.bodyHtml.replace(
      /<span data-mce-fragment="1">(.+?)<\/span>/g,
      ""
    );
    return { ...x, bodyHtml: newB };
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <ProductList />

      {loading && (
        <div style={{ textAlign: "center" }}>Products loading...</div>
      )}
      {!loading && allProducts?.length > 0 && (
        <ProductList list={noImageList} />
      )}
      {error && <div>{`error: ${error}`}</div>}
    </>
  );
}

export default ProductsPage;
