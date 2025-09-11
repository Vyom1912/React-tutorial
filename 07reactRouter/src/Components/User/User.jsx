import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className='text-center text-4xl py-10 bg-sky-300'>User: {userid}</div>
  );
};

export default User;
