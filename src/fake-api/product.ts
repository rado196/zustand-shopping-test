export interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

export const loadProducts = (): Promise<Array<ProductInterface>> => {
  return new Promise<Array<ProductInterface>>((resolve) => {
    const productsData: Array<ProductInterface> = [
      { id: 100001, name: "Cheese", price: 2.5 },
      { id: 100002, name: "Crisps", price: 3 },
      { id: 100003, name: "Pizza", price: 4 },
      { id: 100004, name: "Chocolate", price: 1.5 },
      { id: 100005, name: "Self-raising flour", price: 1.5 },
      { id: 100006, name: "Ground almonds", price: 3 },
    ];

    setTimeout(() => {
      resolve(productsData);
    }, 1200);
  });
};
