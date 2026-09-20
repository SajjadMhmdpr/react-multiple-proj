import React from "react";
import { Navigate, Outlet } from "react-router";
import { authentication } from "./../../Utils";

export default function PrivateRoot() {
  const isLogin = authentication("");
  return isLogin ? <Outlet /> : <Navigate to="/Login" />;
}
