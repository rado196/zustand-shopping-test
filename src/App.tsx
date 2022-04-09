import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProductLayout from "./views/layouts/ProductLayout";
import AuthLayout from "./views/layouts/AuthLayout";

import Products from "./views/pages/products/Products";
import ShoppingCart from "./views/pages/products/ShoppingCart";
import Checkout from "./views/pages/products/Checkout";
import Login from "./views/pages/auth/Login";
import Logout from "./views/pages/auth/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace={true} />} />

        <Route path="/products" element={<ProductLayout />}>
          <Route index={true} element={<Navigate to="/products/list" />} />
          <Route path="list" element={<Products />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
