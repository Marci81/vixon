import React from "react";
import WhiteRoundedContainer from "../../components/white-rounded-container/white-rounded-container.component";
import { ErrorHeading, ErrorPageContainer } from "./error.style";
import { Zoom } from "react-reveal";

const ErrorPage = props => (
  <div className="container mt-5">
    <Zoom left={window.innerWidth > 700}>
      <WhiteRoundedContainer>
        <ErrorPageContainer>
          <ErrorHeading>404</ErrorHeading>
          <h1 className="text-center">Sorry! We couldn't find that page!</h1>
          <ErrorHeading>:(</ErrorHeading>
        </ErrorPageContainer>
      </WhiteRoundedContainer>
    </Zoom>
  </div>
);

export default ErrorPage;
