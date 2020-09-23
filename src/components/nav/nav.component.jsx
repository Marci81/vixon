import React from "react";
import { NavBarContainer, NavItemLink } from "./nav.style";
import { Link } from "react-router-dom";
import Search from "../search/search.component";
import { toggleSearch } from "../../redux/search/search.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItemsToTheSearch } from "../../redux/search/search.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { auth } from "../../firebase/firebase.utils";
import { resetAlert, toggleAlert } from "../../redux/alert/alert.action";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  render() {
    const { searchText } = this.state;
    const { dispatch, items, currentUser } = this.props;

    let itemsMatchTheSearch = items.filter(i =>
      i.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div>
        <NavBarContainer className="navbar navbar-light navbar-expand-md ">
          <div className="container-fluid">
            <NavItemLink className="navbar-brand NavBarBrand" to="/">
              Vixon
            </NavItemLink>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav NavBarNavContainer">
                <li className="nav-item " role="presentation">
                  <NavItemLink className="nav-link " to="/">
                    Home
                  </NavItemLink>
                </li>
                <li className="nav-item " role="presentation">
                  <NavItemLink className="nav-link  " to="/#about">
                    About
                  </NavItemLink>
                </li>
                <li className="nav-item" role="presentation">
                  <NavItemLink className="nav-link  " to="/checkout">
                    Cart
                  </NavItemLink>
                </li>
                <li className="nav-item  dropdown">
                  <NavItemLink
                    className="dropdown-toggle nav-link "
                    data-toggle="dropdown"
                    aria-expanded="false"
                    to=""
                  >
                    Categories
                  </NavItemLink>
                  <div className="dropdown-menu DropdownContainer" role="menu">
                    <Link
                      className="dropdown-item DropdownItem N"
                      role="presentation"
                      to="/category/phones"
                    >
                      Phones
                    </Link>
                    <Link
                      className="dropdown-item DropdownItem"
                      role="presentation"
                      to="/category/tvs"
                    >
                      Tvs
                    </Link>
                    <Link
                      className="dropdown-item DropdownItem"
                      role="presentation"
                      to="/category/laptops"
                    >
                      Laptops
                    </Link>
                    <Link
                      className="dropdown-item DropdownItem"
                      role="presentation"
                      to="/category/monitors"
                    >
                      Monitors
                    </Link>
                    <Link
                      className="dropdown-item DropdownItem"
                      role="presentation"
                      to="/category/keyboards"
                    >
                      Keyboards
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="input-group ">
                    <input
                      value={searchText}
                      onChange={evt => {
                        this.setState({ searchText: evt.target.value });
                      }}
                      type="text"
                      placeholder="Search"
                      aria-describedby="button-addon3"
                      className="form-control "
                      onFocus={() => {
                        dispatch(toggleSearch());
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          dispatch(toggleSearch());
                        }, 100);
                      }}
                    />
                    <div className="input-group-append ">
                      <button
                        id="button-addon3"
                        type="button"
                        className="btn btn-primary px-4 "
                        onClick={() => dispatch(toggleSearch())}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              {!currentUser ? (
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item " role="presentation">
                    <NavItemLink className="nav-link  " to="/login-signup">
                      Sign Up
                    </NavItemLink>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to="/login-signup"
                      className="btn btn-primary"
                      type="button"
                    >
                      Log In
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav ml-auto">
                  <li role="presentation">
                    <NavItemLink to="/" className="nav-link">
                      Hi {currentUser.displayName}
                    </NavItemLink>
                  </li>
                  <li
                    className="nav-item"
                    role="presentation"
                    onClick={() => {
                      auth.signOut();
                      dispatch(toggleAlert("Successfully Signed Out!"));
                      setTimeout(() => {
                        dispatch(resetAlert());
                      }, 1000);
                    }}
                  >
                    <Link to="/" className="btn btn-primary" type="button">
                      Log out
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </NavBarContainer>

        <Search items={itemsMatchTheSearch} />
      </div>
    );
  }
}

//TODO Remove this and move it to Redux set
const mapStateToProps = createStructuredSelector({
  items: selectItemsToTheSearch,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Nav);
