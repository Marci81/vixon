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
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Route
        render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key}  className="fade" timeout={50}>
              <Switch location={location} >
                <Route
                  exact
                  path="/"
                  render={props => (
                    <div className="page">
                      <HomePage />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/checkout"
                  render={props => (
                    <div className="page">
                      <CheckoutPage />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/login-signup"
                  render={props => (
                    <div className="page">
                      <LogInSignUpPage />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/error"
                  render={props => (
                    <div className="page">
                      <ErrorPage />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/category/:category"
                  render={props => (
                    <div className="page">
                      <ShopPage {...props} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/category/:category/item/:id"
                  render={props => (
                    <div className="page">
                      <ItemOverviewPage {...props} />
                    </div>
                  )}
                />
                <Route component={ErrorPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Footer />
    </div>
  );
};

export default App;
