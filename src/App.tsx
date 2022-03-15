import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </OrderProvider>
  );
};

export default App;
