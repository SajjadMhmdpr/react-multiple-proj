import React from "react";
import { Navigate, Link, Outlet } from "react-router";

export default function Page2() {
  return (
    <>
      <div>page222222222</div>
      <Link to="/page2/page3">page3</Link>
      <hr />
      <Outlet />
      {/* <Navigate to="/page3" /> */}
    </>
  );
}
