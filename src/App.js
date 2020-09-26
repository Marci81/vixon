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
import {
  addCollectionAndDocuments,
  auth,
  convertItemsSnapshotToMap,
  createUserProfileDocument,
  firestore
} from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";
import { selectShopItemsToArray } from "./redux/shop/shop.selector";
import { updateShopItems } from "./redux/shop/shop.action";
import WithSpinner from "./components/with-spinner/with-spinner.component";

const NavWithSpinner = WithSpinner(Nav);
const ItemOverviewPageWithSpinner = WithSpinner(ItemOverviewPage);
const BrandPageWithSpinner = WithSpinner(BrandPage);
const ShopPageWithSpinner = WithSpinner(ShopPage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser, shopItems } = this.props;

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
      // addCollectionAndDocuments(
      //   "items",
      //   shopItems.map(({ name, items }) => ({ name, items }))
      // );
    });

    const { updateShopItems } = this.props;
    const collectionRef = firestore.collection("items");

    collectionRef.get().then(snapshot => {
      const itemsMap = convertItemsSnapshotToMap(snapshot);
      updateShopItems(itemsMap);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <NavWithSpinner isLoading={isLoading} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
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
            render={props => (
              <ShopPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            exact
            path="/item/:id"
            render={props => (
              <ItemOverviewPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            exact
            path="/brands/:name"
            render={props => (
              <BrandPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shopItems: selectShopItemsToArray
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateShopItems: items => dispatch(updateShopItems(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
