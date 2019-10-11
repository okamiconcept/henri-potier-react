import React from "react";
import BookList from "../products/BookList";
import { ProductProvider } from "../products/ProductContext";

const Products: React.FC = () => {
  return (
    <ProductProvider>
      <BookList></BookList>
    </ProductProvider>
  );
};

export default Products;
