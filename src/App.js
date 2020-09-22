import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/home/home.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop.component";
import LogInSignUpPage from "./pages/log-in-sign-up/log-in-sign-up.component";
import ItemOverviewPage from "./pages/item-overview/item-overview.component";
import ErrorPage from "./pages/error/error.component";
import BrandPage from "./pages/brand/brand.component";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/login-signup" render={LogInSignUpPage} />
        <Route exact path="/error" render={ErrorPage} />
        <Route
          exact
          path="/category/:category"
          render={props => <ShopPage {...props} />}
        />
        <Route
          exact
          path="/item/:id"
          render={props => <ItemOverviewPage {...props} />}
        />
        <Route
          exact
          path="/brands/:name"
          render={props => <BrandPage {...props}  />}
        />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
