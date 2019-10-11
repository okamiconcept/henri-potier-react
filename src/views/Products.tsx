import React from "react";
import BookList from "../BookList";
import { ProductProvider } from "../ProductContext";

const Products: React.FC = () => {
  return (
    <ProductProvider>
      <BookList></BookList>
    </ProductProvider>
  );
};

export default Products;
