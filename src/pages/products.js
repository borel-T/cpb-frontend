import React from "react";
import ProductList from "../components/products/productList";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/slices/productSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.value);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  console.log("data::", allProducts);
  console.log("loading::", error);

  return (
    <>
      <ProductList />
      <button
        onClick={() => {
          dispatch(getProducts());
        }}
      >
        get products
      </button>
      {loading && <div style={{ padding: 15 }}>loading...</div>}
      {!loading && allProducts?.length > 0 && (
        <ProductList list={allProducts} />
      )}
      {error && <div>{`error: ${error}`}</div>}
    </>
  );
}

export default ProductsPage;
