import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="section">
      <h1 className="title is-2">Welcome to Henri Potier E-shop!</h1>

      <Link className="button is-primary" to="/products">
        View our products
      </Link>
    </section>
  );
};

export default Home;
