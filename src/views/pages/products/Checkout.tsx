import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../../../stores/user";
import { useCartStore } from "../../../stores/cart";
import useProducts from "../../../hooks/useProducts";

function Checkout() {
  const { products, loading } = useProducts();

  const storeUser = useUserStore();
  const storeCart = useCartStore();

  if (loading) {
    return null;
  }

  if (!storeUser.userId) {
    return <Navigate to="/" replace={true} />;
  }

  const total = storeCart.products.reduce((acc, productShipping) => {
    let productPrice = 0;
    const product = products.find(
      (product) => product.id == productShipping.id
    );
    if (product) {
      productPrice = product.price;
    }

    return acc + productShipping.quantity * productPrice;
  }, 0);

  return (
    <div className="container">
      <h4>Welcome {storeUser.fullName}</h4>

      <p>Your cart total is $ {total.toFixed(2)}.</p>

      <a
        href="https://paypal.com"
        target="_blank"
        className="btn btn-sm btn-success mt-5"
      >
        Process checkout
      </a>
    </div>
  );
}

export default Checkout;
