import React from "react";
import useInputForm from "../../hooks/use-input-form.hook";
import SignUpGoogle from "../sign-up-google/sign-up-google.component";

const SignUpEmail = () => {
  const [email, updateEmail, resetEmail] = useInputForm("");
  const [name, updateName, resetName] = useInputForm("");
  const [password, updatePassword, resetPassword] = useInputForm("");
  return (
    <div className="col">
      <form>
        <div className="form-group">
          <h1>Sign Up With Email</h1>
          <hr />
          <label>Email</label>
          <input
            value={email}
            onChange={updateEmail}
            className="form-control"
            type="email"
          />
          <label>Name</label>
          <input
            value={name}
            onChange={updateName}
            className="form-control"
            type="text"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={updatePassword}
            className="form-control"
            type="password"
          />
          <button className="btn btn-primary mt-3" type="submit">
            Sign Up
          </button>
        </div>
      </form>

      <SignUpGoogle />
    </div>
  );
};

export default SignUpEmail;





















