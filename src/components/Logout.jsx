import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /Jobs
    navigate("/Login");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "RESET_STATE" });
    navigateToLogin();
  }, []);
  return <></>;
};

export default Logout;
