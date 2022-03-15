import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Book from "./Book";
import { useProduct } from "./ProductContext";

const BookList: React.FC = () => {
  const [stateProducts] = useProduct();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    stateProducts.products
  );

  useEffect(() => {
    setFilteredProducts(
      stateProducts.products.filter(product => product.title.includes(search))
    );
  }, [search, stateProducts.products]);

  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          <h1 className="title is-2">Products</h1>
        </div>

        <form className="column">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={e => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
        </form>
      </div>

      {stateProducts.loading === false ? (
        <TransitionGroup
          className="columns is-multiline"
        >
          {filteredProducts.map(product => (
            <CSSTransition
              key={product.isbn}
              timeout={500}
              classNames="fade"
            >
              <div className="column is-one-quarter">
                <Book product={product}></Book>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div>Chargement en cours...</div>
      )}
    </section>
  );
};

export default BookList;
