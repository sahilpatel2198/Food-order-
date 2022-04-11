import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";

// function App() {
//   const [user, setUser] = useState(null);
//   const logout = () => {
//     setUser(false);
//   }

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [user, setUser] = useState(null);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const logout = () => {
    setUser(false);
  };

  return (
    <>
      <CartProvider>
        <Header onShowCart={showCartHandler} user={user} logout={logout} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          {!user && (
            <>
              <Route
                exact
                path="/login"
                element={<Login data={() => setUser(true)} />}
              />
            </>
          )}

          {user && (
            <>
              {/* <Route path="/login" element={<Login/>}/> */}
              <Route path="/meals" element={<Meals />} />
          
            </>
          )}
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
