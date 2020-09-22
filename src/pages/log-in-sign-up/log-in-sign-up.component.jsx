import React from "react";
import SignUpEmail from "../../components/sign-up-email/sign-up-email.component";
import LogIn from "../../components/log-in/log-in.component";
import {Fade} from "react-reveal";

const LogInSignUpPage = props => (
  <div className="container mt-5">
    <Fade bottom>
      <div className="row">
        <SignUpEmail/>
        <LogIn/>
      </div>
    </Fade>
  </div>
);

export default LogInSignUpPage;
