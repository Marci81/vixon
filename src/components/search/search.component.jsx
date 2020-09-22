import React from "react";
import { SearchContainer } from "./search.style";
import SearchItem from "../search-item/search-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsHidden } from "../../redux/search/search.selector";

const Search = ({ isHidden, items }) => {
  return (
    <>
      {!isHidden && (
        <SearchContainer className="row p-5 bg-white rounded shadow-sm mb-5">
          <table>
            <tbody>
              {items.map(({ id, ...otherProps }) => (
                <>
                  <SearchItem key={id} id={id} {...otherProps} />
                  <hr />
                </>
              ))}
            </tbody>
          </table>
        </SearchContainer>
      )}
    </>
  );
};
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    isHidden: selectIsHidden
  });

export default connect(mapStateToProps)(Search);
