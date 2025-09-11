// import { useState } from "react";
// import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vyom1912")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>
      Github folloers: {data.followers}
      <img src={data.avatar_url} alt='git picture' width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vyom1912");
  return response.json();
};
