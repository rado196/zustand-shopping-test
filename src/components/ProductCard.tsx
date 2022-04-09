import React, { useCallback } from "react";
import { ProductInterface } from "../fake-api/product";
import { useCartStore } from "../stores/cart";

interface PropsTypeInterface {
  product: ProductInterface;
}

function ProductCard(props: PropsType<PropsTypeInterface>) {
  const state = useCartStore();
  const productInCart = state.products.find(
    (product) => product.id == props.product.id
  );

  const onAddToCardClick = useCallback(() => {
    state.add(props.product.id);
  }, [props.product.id]);

  const onRemoveClick = useCallback(() => {
    state.remove(props.product.id);
  }, [props.product.id]);

  return (
    <div className="card h-100">
      {productInCart && (
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          In cart: {productInCart.quantity}
        </div>
      )}

      <img
        draggable={false}
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt={props.product.name}
      />

      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{props.product.name}</h5>
          <p>$ {props.product.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button
            className="btn btn-sm btn-dark mt-auto"
            onClick={onAddToCardClick}
          >
            <small className="text-uppercase">Add to Card</small>
          </button>

          {productInCart && (
            <button
              className="btn btn-sm btn-outline-danger ms-2 mt-auto"
              onClick={onRemoveClick}
            >
              <small className="text-uppercase">Remove</small>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
