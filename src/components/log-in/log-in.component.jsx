import React from "react";
import useInputForm from "../../hooks/use-input-form.hook";

const LogIn = props => {
  const [email, updateEmail, resetEmail] = useInputForm("");
  const [password, updatePassword, resetPassword] = useInputForm("");

  return (

      <div className="col">
        <form>
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
