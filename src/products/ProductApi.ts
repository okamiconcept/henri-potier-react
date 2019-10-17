import { CommercialOffersResponse, Product } from "./ProductModel";

const apiURL = "https://henri-potier-proxy.herokuapp.com";

const fetchProducts = async () => {
  const route = "/books";
  const response = await fetch(apiURL + route);
  const books: Product[] = await response.json();

  return books;
};

const fetchCommercialOffers = async (productsIds: string[]) => {
  const route = `/books/${productsIds.join(",")}/commercialOffers`;
  const response = await fetch(apiURL + route);
  const offerResponse: CommercialOffersResponse = await response.json();

  return offerResponse.offers;
};

export { fetchProducts, fetchCommercialOffers };
