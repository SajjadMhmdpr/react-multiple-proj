import Page1 from "./Pages/page1.tsx";
import Page2 from "./Pages/page2.tsx";
import Page3 from "./Pages/page3.tsx";
import Chat from "./Pages/Chat/Chat";
import Clock from "./Pages/Clock/Clock";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Producs/Products";
import SingleProduct from "./Pages/Producs/SingleProduct.tsx";
import TodoList from "./Pages/TodoList/TodoList";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import PrivateRoot from "./Components/PrivateRoot/PrivateRoot.tsx";

let routes = [
  { path: "/", element: <Home />, title: "/", showInNavbar: false },
  { path: "/page1", element: <Page1 />, title: "page1", showInNavbar: true },
  {
    path: "/page2/*",
    element: <Page2 />,
    children: [{ path: "page3", element: <Page3 />, title: "page3" }],
    title: "page2",
    showInNavbar: true,
  },
  {
    path: "/TodoList",
    element: <TodoList />,
    title: "Todo List",
    showInNavbar: true,
  },
  {
    element: <PrivateRoot />,
    children: [
      {
        path: "/Clock",
        element: <Clock />,
        title: "Clock",
        showInNavbar: true,
      },
    ],
    showInNavbar: false,
  },
  {
    path: "/Products",
    element: <Products />,
    title: "Products",
    showInNavbar: true,
  },

  { path: "/Login", element: <Login />, title: "Login", showInNavbar: true },
  {
    path: "/Register",
    element: <Register />,
    title: "Register",
    showInNavbar: false,
  },
  { path: "/Chat", element: <Chat />, title: "Chat", showInNavbar: true },

  {
    path: "/product/:productId",
    element: <SingleProduct />,
    title: "SingleProduct",
    showInNavbar: false,
  },

  {
    path: "*",
    element: <NotFound />,
    title: "NotFound",
    showInNavbar: false,
  },
];

export default routes;
