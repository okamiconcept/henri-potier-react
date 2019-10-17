import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { OrderProvider } from "./order/OrderContext";
import Header from "./shared/Header";
import "./styles/App.scss";
import Cart from "./views/Cart";
import Home from "./views/Home";
import Products from "./views/Products";

const App: React.FC = () => {
  return (
    <OrderProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header></Header>

          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </OrderProvider>
  );
};

export default App;
