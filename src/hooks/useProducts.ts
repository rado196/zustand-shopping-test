import { useEffect, useState } from "react";
import { loadProducts, ProductInterface } from "../fake-api/product";

let cachedProducts: Nullable<Array<ProductInterface>> = null;

function useProducts(force = false) {
  const [products, setProducts] = useState<Array<ProductInterface>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!force && cachedProducts) {
      setProducts(cachedProducts);
      setLoading(false);

      return;
    }

    loadProducts().then((list) => {
      cachedProducts = list;
      
      setProducts(list);
      setLoading(false);
    });
  }, []);

  return { loading, products };
}

export default useProducts;
