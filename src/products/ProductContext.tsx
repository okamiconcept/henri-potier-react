import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fetchProducts } from "./ProductApi";
import { Action, ActionDispatch, Dispatch, State } from "./ProductModel";

const initialState: State = {
  count: 0,
  loading: false,
  products: []
};

type ProductProviderProps = { children: React.ReactNode };
const ProductStateContext = createContext<State | undefined>(undefined);
const ProductDispatchContext = createContext<Dispatch | undefined>(undefined);

function productReducer(state: State, action: ActionDispatch): State {
  switch (action.type) {
    case Action.GET_PRODUCTS: {
      return { ...state, loading: true };
    }

    case Action.PRODUCTS_RESPONSE: {
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    }
  }
}

function ProductProvider({ children }: ProductProviderProps) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();

      dispatch({
        type: Action.PRODUCTS_RESPONSE,
        payload: products
      });
    };

    dispatch({
      type: Action.GET_PRODUCTS
    });

    fetchData();
  }, []);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

function useProductState() {
  const context = useContext(ProductStateContext);
  if (context === undefined) {
    throw new Error("useProductState must be used within a ProductProvider");
  }
  return context;
}

function useProductDispatch() {
  const context = useContext(ProductDispatchContext);
  if (context === undefined) {
    throw new Error("useProductDispatch must be used within a ProductProvider");
  }
  return context;
}

function useProduct(): [State, Dispatch] {
  return [useProductState(), useProductDispatch()];
}

export { Action, ProductProvider, useProduct };
