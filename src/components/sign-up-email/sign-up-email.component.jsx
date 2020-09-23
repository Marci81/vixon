import React from "react";
import useInputForm from "../../hooks/use-input-form.hook";
import SignUpGoogle from "../sign-up-google/sign-up-google.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { resetAlert, toggleAlert } from "../../redux/alert/alert.action";
import { connect } from "react-redux";

const SignUpEmail = ({ dispatch }) => {
  const [email, updateEmail, resetEmail] = useInputForm("");
  const [name, updateName, resetName] = useInputForm("");
  const [password, updatePassword, resetPassword] = useInputForm("");

  const resetState = () => {
    resetEmail();
    resetName();
    resetPassword();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName: name });
      resetState();
    } catch (error) {
      dispatch(toggleAlert(error.message));
      setTimeout(() => {
        dispatch(resetAlert());
      }, 5000);
    }
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
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

export default connect(null)(SignUpEmail);
