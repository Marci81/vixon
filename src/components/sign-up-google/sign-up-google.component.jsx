import React from "react";
import {signInWithGoogle} from "../../firebase/firebase.utils";

const SignUpGoogle = props => (
  <div>
    <div className="google mt-5">
      <h1>Or Sign Up With Google</h1>
      <button className="btn btn-outline-info btn-lg mt-2" type="button" onClick={signInWithGoogle}>
        Sign Up With Google
      </button>
    </div>
  </div>
);

export default SignUpGoogle;
