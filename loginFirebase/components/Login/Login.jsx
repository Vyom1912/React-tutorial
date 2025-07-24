import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmission = () => {
    if (!values.pass || !values.email) {
      setErrorMsg("Fill all field");
      return;
    } else setErrorMsg("");
    // console.log(values);
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        // console.log(res);
        setSubmitButtonDisable(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
        // console.log("Error-", err);
      });
  };
  return (
    <>
      <div className='container'>
        <div className='innerBox'>
          <h1 className='heading'>Login</h1>
          <InputControl
            label='Email'
            type='email'
            placeholder='Enter Email address'
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label='Password'
            type='password'
            placeholder='Enter Password'
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <div className='footer'>
            <b className='error'>{errorMsg}</b>

            <button onClick={handleSubmission} disabled={submitButtonDisable}>
              Login
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to='/Signup'>Signup</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
