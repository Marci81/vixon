import React from "react";
import useInputForm from "../../hooks/use-input-form.hook";
import { auth } from "../../firebase/firebase.utils";

const LogIn = () => {
  const [email, updateEmail, resetEmail] = useInputForm("");
  const [password, updatePassword, resetPassword] = useInputForm("");

  const handleSubmit = async event => {
    const resetState = () => {
      resetPassword();
      resetEmail();
    };

    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Log In</h1>
          <hr />
          <label>Email</label>
          <input
            value={email}
            onChange={updateEmail}
            className="form-control"
            type="email"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={updatePassword}
            className="form-control"
            type="password"
          />
          <button className="btn btn-primary mt-3" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
