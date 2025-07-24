import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
function Signout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
function Home(props) {
  // console.log(props.name);

  return (
    <div>
      <h1>
        <Link to='/Login'>login</Link>
      </h1>
      <br />
      <h1>
        <Link to='/Signup'>Signup</Link>
      </h1>
      <br />
      <br />
      <br />

      {props.name ? (
        <>
          <h2>Welcome - {props.name}</h2>
          <br />
          {/* <Link to='/Signout'>Signout</Link> */}
          <button onClick={Signout}>SignOut</button>
        </>
      ) : (
        "Login please"
      )}

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
