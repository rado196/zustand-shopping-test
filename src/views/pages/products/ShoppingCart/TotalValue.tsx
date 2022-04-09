import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import { useUserStore } from "../../../../stores/user";
import { ProductInterface } from "../../../../stores/cart";

interface PropTypeInterface {
  products: Array<ProductInterface>;
}

function TotalValue(props: PropsType<PropTypeInterface>) {
  const storeUser = useUserStore();

  const { products, loading } = useProducts();
  if (loading) {
    return null;
  }

  const total = props.products.reduce((acc, productShipping) => {
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
    <div className="row">
      <h6>Total: $ {total.toFixed(2)}</h6>

      {!storeUser.userId ? (
        <Link className="btn btn-sm btn-dark" to="/auth/login">
          Login to checkout
        </Link>
      ) : (
        <Link className="btn btn-sm btn-dark" to="/products/checkout">
          Checkout
        </Link>
      )}
    </div>
  );
}

export default TotalValue;
