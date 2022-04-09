import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import { useCartStore } from "../../stores/cart";

function ProductLayout(props: PropsType) {
  const userStore = useUserStore();
  const cartStore = useCartStore();

  return (
    <div className="ProductLayout">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/products/list">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {!userStore.userId ? (
                  <Link className="nav-link" to="/auth/login">
                    Login
                  </Link>
                ) : (
                  <Link className="nav-link" to="/auth/logout">
                    Logout
                  </Link>
                )}
              </li>
            </ul>

            <div className="d-flex">
              <Link
                to="/products/shopping-cart"
                className="btn btn-outline-dark"
                type="submit"
              >
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartStore.count}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shopping</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              This is a Zustand state management test.
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <Outlet />
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">© Ultras 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductLayout;
