import React from "react";
import ProductCard from "../../../components/ProductCard";
import useProducts from "../../../hooks/useProducts";

function Products() {
  const { products, loading } = useProducts();

  return (
    <div className="container px-4 px-lg-5 mt-5">
      {loading ? (
        <div>Loading products ...</div>
      ) : (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div key={`product-card-${product.id}`} className="col mb-5">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
