export interface ProductsDataInterface {
  product: Product;
  count: number;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface AvailableProducts extends Product {
  count: number;
}

export const mapToAvailableProducts = (
  productsData: ProductsDataInterface[]
): AvailableProducts[] => {
  return productsData.map(({ product, count }) => ({
    ...product,
    count: count,
  }));
};
