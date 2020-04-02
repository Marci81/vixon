import React from "react";
import SignUpEmail from "../../components/sign-up-email/sign-up-email.component";
import SignUpGoogle from "../../components/sign-up-google/sign-up-google.component";
import LogIn from "../../components/log-in/log-in.component";

const LogInSignUpPage = props => (
  <div className="container mt-5">
    <div className="row">
      <SignUpEmail />
      <LogIn />
    </div>
  </div>
);

export default LogInSignUpPage;
