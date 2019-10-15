import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { OrderProvider } from "../order/OrderContext";
import { State } from "../order/OrderModel";
import Book from "./Book";
import { Product } from "./ProductModel";

const mockProduct: Product = {
  isbn: "isbn",
  cover: "cover",
  price: 10,
  synopsis: ["synopsis"],
  title: "title"
};

const mockState: State = {
  total: 0,
  reduction: null,
  count: 0,
  items: [],
  offers: []
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <OrderProvider stateInit={mockState}>
      <Book product={mockProduct} />
    </OrderProvider>
  );
});

it("should dispatch action to add item to order on button clicked", () => {
  const { getByText } = render(
    <OrderProvider stateInit={mockState}>
      <Book product={mockProduct} />
    </OrderProvider>
  );

  fireEvent.click(getByText("Add to cart"));

  expect(mockState.count).toEqual(1);
});
