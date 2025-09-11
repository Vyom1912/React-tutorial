import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  else
    return (
      <div className='text-center bg-purple-900 text-white flex flex-col gap-3 justify-center items-center py-4'>
        <h1>Welcome {user.username}</h1>
        {user.password}
      </div>
    );
}

export default Profile;
