import ProductShippingCard from "../../../../components/ProductShippingCard";
import { ProductInterface } from "../../../../stores/cart";

interface PropTypeInterface {
  products: Array<ProductInterface>;
}

function ProductList(props: PropsType<PropTypeInterface>) {
  return (
    <div className="row">
      {props.products.map((productShipping) => (
        <div
          key={`product-shipping-card-${productShipping.id}`}
          className="col-6 mb-2"
        >
          <ProductShippingCard productShipping={productShipping} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
