import zustand from "zustand";

export interface ProductInterface {
  id: number;
  quantity: number;
}

interface StateInterface {
  products: Array<ProductInterface>;
  count: number;
}

interface AccessorInterface {
  add: (productId: number, quantity?: number) => void;
  increment: (productId: number, quantity?: number) => void;
  decrement: (productId: number, quantity?: number) => void;
  remove: (productId: number) => void;
  update: (productId: number, quantity: number) => void;
  clear: () => void;
}

type ZustandType = StateInterface & AccessorInterface;

export const useCartStore = zustand<ZustandType>((set) => ({
  // state
  products: [],
  count: 0,

  // accessor - add product
  add: (productId: number, quantity: number = 1) =>
    set((state: StateInterface) => {
      const { products } = state;
      const productIndex = products.findIndex(
        (product) => product.id == productId
      );

      const product = {
        id: productId,
        quantity: quantity,
      };

      if (productIndex == -1) {
        products.push(product);
      } else {
        products[productIndex].quantity += quantity;
      }

      return {
        products: [...products],
        count: products.length,
      };
    }),

  // accessor - increment quantity
  increment: (productId: number, quantity: number = 1) =>
    set((state: StateInterface) => {
      const { products } = state;
      const productIndex = products.findIndex(
        (product) => product.id == productId
      );

      if (productIndex != -1) {
        products[productIndex].quantity += quantity;
      }

      return {
        products: [...products],
        count: products.length,
      };
    }),

  // accessor - increment quantity
  decrement: (productId: number, quantity: number = 1) =>
    set((state: StateInterface) => {
      const { products } = state;
      const productIndex = products.findIndex(
        (product) => product.id == productId
      );

      if (productIndex != -1) {
        products[productIndex].quantity -= quantity;

        if (products[productIndex].quantity <= 0) {
          products.splice(productIndex);
        }
      }

      return {
        products: [...products],
        count: products.length,
      };
    }),

  // accessor - remove product
  remove: (productId: number) =>
    set((state: StateInterface) => {
      const { products } = state;
      const productIndex = products.findIndex(
        (product) => product.id == productId
      );

      if (productIndex != -1) {
        products.splice(productIndex, 1);
      }

      return {
        products: [...products],
        count: products.length,
      };
    }),

  // accessor - update
  update: (productId: number, quantity: number) =>
    set((state: StateInterface) => {
      const { products } = state;
      const productIndex = products.findIndex(
        (product) => product.id == productId
      );

      if (productIndex != -1) {
        if (quantity < 1) {
          quantity = 1;
        }

        products[productIndex].quantity = quantity;
      }

      return {
        products: [...products],
        count: products.length,
      };
    }),

  // accessor - clear cart
  clear: () =>
    set({
      products: [],
      count: 0,
    }),
}));
