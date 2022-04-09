import React, { useCallback, ChangeEvent } from "react";
import useProducts from "../hooks/useProducts";
import {
  useCartStore,
  ProductInterface as ProductShippingInterface,
} from "../stores/cart";

interface PropsTypeInterface {
  productShipping: ProductShippingInterface;
}

function ProductShippingCard(props: PropsType<PropsTypeInterface>) {
  const { products, loading } = useProducts();

  const state = useCartStore();

  const onQuantityChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const quantity = parseInt(event.target.value);
      state.update(props.productShipping.id, quantity);
    },
    [props.productShipping.id]
  );

  const onRemoveClick = useCallback(() => {
    state.remove(props.productShipping.id);
  }, [props.productShipping.id]);

  const onIncrementClick = useCallback(() => {
    state.increment(props.productShipping.id);
  }, [props.productShipping.id]);

  const onDecrementClick = useCallback(() => {
    state.decrement(props.productShipping.id);
  }, [props.productShipping.id]);

  if (loading) {
    return null;
  }

  const productInstance = products.find(
    (product) => product.id == props.productShipping.id
  );

  if (!productInstance) {
    return null;
  }

  return (
    <div className="card h-100">
      {productInstance && (
        <div
          className="btn btn-sm btn-danger text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
          onClick={onRemoveClick}
        >
          Remove
        </div>
      )}

      <div className="row">
        <div className="col-5">
          <img
            draggable={false}
            src="https://dummyimage.com/450x665/dee2e6/6c757d.jpg"
            alt={productInstance.name}
            className="w-100"
          />
        </div>

        <div className="col-7 pt-4 pb-4">
          <div className="pe-2">
            <h6 className="fw-bolder">{productInstance.name}</h6>
            <small>Price: $ {productInstance.price.toFixed(2)}</small>
            <br />
            <small>
              Total: ${" "}
              {(productInstance.price * props.productShipping.quantity).toFixed(
                2
              )}
            </small>
          </div>

          <div className="pe-2">
            <hr />
          </div>

          <div className="pe-2">
            <div className="row">
              <div className="col-3">
                <button
                  className="w-100 btn btn-sm btn-danger"
                  onClick={onDecrementClick}
                >
                  -
                </button>
              </div>

              <div className="col-6">
                <input
                  className="w-100 form-control form-control-sm text-center"
                  type="number"
                  value={props.productShipping.quantity}
                  onChange={onQuantityChange}
                />
              </div>

              <div className="col-3">
                <button
                  className="w-100 btn btn-sm btn-success"
                  onClick={onIncrementClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShippingCard;
