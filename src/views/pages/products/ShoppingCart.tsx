import React from "react";
import { useCartStore } from "../../../stores/cart";
import ProductList from "./ShoppingCart/ProductList";
import TotalValue from "./ShoppingCart/TotalValue";

function ShoppingCart() {
  const storedProducts = useCartStore((store) => store.products);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      {storedProducts.length == 0 ? (
        <h4>There is no products in shipping cart.</h4>
      ) : (
        <div className="row justify-content-center">
          <div className="col-7">
            <h4 className="pb-3">Products</h4>
            <ProductList products={storedProducts} />
          </div>

          <div className="col-4 offset-1">
            <h4 className="pb-3">Checkout</h4>
            <TotalValue products={storedProducts} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
