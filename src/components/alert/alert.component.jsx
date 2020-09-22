import React from "react";
import { AlertContainer, AlertText } from "./alert.style";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsHidden,
  selectMessage
} from "../../redux/alert/alert.selector";

const Alert = ({ isHidden, message }) => (
  <>
    {!isHidden && (
      <AlertContainer className="row p-5 bg-dark rounded shadow-sm mb-5">
        <AlertText className="white">{message}</AlertText>
      </AlertContainer>
    )}
  </>
);
const mapStateToProps = createStructuredSelector({
  isHidden: selectIsHidden,
  message: selectMessage
});

export default connect(mapStateToProps)(Alert);
