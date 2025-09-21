import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, athentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (athentication && authStatus !== athentication) {
      navigate("/login");
    } else if (!athentication && authStatus !== athentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, athentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
