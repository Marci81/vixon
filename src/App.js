import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/home/home.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop.component";
import LogInSignUpPage from "./pages/log-in-sign-up/log-in-sign-up.component";
import ItemOverviewPage from "./pages/item-overview/item-overview.component";
import ErrorPage from "./pages/error/error.component";
import BrandPage from "./pages/brand/brand.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          {/*<Route exact path="/login-signup" render={LogInSignUpPage} />*/}

          <Route
            exact
            path="/login-signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LogInSignUpPage />
            }
          />

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
            render={props => <BrandPage {...props} />}
          />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
