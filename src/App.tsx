import { useState } from "react";
import { useRoutes, Route, Routes, Link } from "react-router";
import routes from "./router.tsx";
import "./App.css";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);
  let router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
