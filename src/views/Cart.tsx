import React from "react";
import { Action, useOrder } from "../order/OrderContext";

const Cart: React.FC = () => {
  const [stateOrder, dispatchOrder] = useOrder();

  return (
    <section className="section">
      <h1 className="title is-2">Your cart</h1>

      {stateOrder.count ? (
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Product">Product</abbr>
              </th>
              <th className="has-text-centered">
                <abbr title="Quantity">Quantity</abbr>
              </th>
              <th className="has-text-right">
                <abbr title="Price">Unit Price</abbr>
              </th>
              <th className="has-text-right">
                <abbr title="Total Price">Total Price</abbr>
              </th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th className="has-text-right">Total before reduction</th>
              <th className="has-text-right">
                {stateOrder.total.toFixed(2)} €
              </th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th className="has-text-right">
                Reduction
                {stateOrder.reduction
                  ? ` (${stateOrder.reduction.offer.type})`
                  : ""}
              </th>
              <th className="has-text-right">
                {(stateOrder.reduction
                  ? stateOrder.reduction.amount
                  : 0
                ).toFixed(2)}{" "}
                €
              </th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th className="has-text-right">Total</th>
              <th className="has-text-right">
                {(
                  stateOrder.total -
                  (stateOrder.reduction ? stateOrder.reduction.amount : 0)
                ).toFixed(2)}{" "}
                €
              </th>
              <th></th>
            </tr>
          </tfoot>
          <tbody>
            {stateOrder.items.map(item => (
              <tr key={item.id}>
                <th>{item.product.title}</th>
                <td>
                  <div className="buttons has-addons is-centered">
                    <button
                      className="button"
                      onClick={() => {
                        dispatchOrder({
                          type: Action.CHANGE_QUANTITY_ORDER_ITEM,
                          payload: { item, quantity: -1 }
                        });
                      }}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-minus-square"></i>
                      </span>
                    </button>
                    <span className="button">{item.quantity}</span>
                    <button
                      className="button"
                      onClick={() => {
                        dispatchOrder({
                          type: Action.CHANGE_QUANTITY_ORDER_ITEM,
                          payload: { item, quantity: 1 }
                        });
                      }}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-plus-square"></i>
                      </span>
                    </button>
                  </div>
                </td>
                <td className="has-text-right">
                  {item.product.price.toFixed(2)} €
                </td>
                <td className="has-text-right">
                  {(item.product.price * item.quantity).toFixed(2)} €
                </td>
                <td className="has-text-right">
                  <button
                    className="button is-danger"
                    onClick={() => {
                      dispatchOrder({
                        type: Action.DELETE_ORDER_ITEM,
                        payload: item
                      });
                    }}
                  >
                    <span className="icon is-small">
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </section>
  );
};

export default Cart;
