import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/login/Register"
import Account from "./pages/account/Account";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux"


const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/register" Component={ Register} />
          <Route exact path="/login" Component={ Login} />

          <Route exact path="/account" Component={ Account } />
        </Routes>
        <Footer />
      </Router>
        )}
        {!isLoggIn && <Login />}

    </>
  );
}

export default App;
