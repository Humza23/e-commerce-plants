import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img" aria-label="plants">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink to="/e-commerce-plants">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/e-commerce-plants/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact path="/e-commerce-plants"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/e-commerce-plants/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/e-commerce-plants/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
