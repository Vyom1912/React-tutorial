import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../src/firebase";
import "./Signup.css";
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmission = () => {
    if (!values.name || !values.pass || !values.email) {
      setErrorMsg("Fill all field");
      return;
    } else setErrorMsg("");
    // console.log(values);
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        // console.log(res);
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
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
          <h1 className='heading'>Signup</h1>
          <InputControl
            label='Name'
            placeholder='Enter your Name'
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
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
              SignUp
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to='/Login'>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
