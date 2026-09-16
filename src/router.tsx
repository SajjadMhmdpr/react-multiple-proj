import Page1 from "./Pages/page1.tsx";
import Page2 from "./Pages/page2.tsx";
import Page3 from "./Pages/page3.tsx";
import Chat from "./Pages/Chat/Chat";
import Clock from "./Pages/Clock/Clock";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Producs/Products";
import TodoList from "./Pages/TodoList/TodoList";
import Home from "./Pages/Home/Home";

let routes = [
  { path: "/", element: <Home />, title: "/" },
  { path: "/page1", element: <Page1 />, title: "page1" },
  {
    path: "/page2/*",
    element: <Page2 />,
    children: [{ path: "page3", element: <Page3 />, title: "page3" }],
    title: "page2",
  },
  { path: "/TodoList", element: <TodoList />, title: "Todo List" },
  { path: "/Clock", element: <Clock />, title: "Clock" },
  { path: "/Products", element: <Products />, title: "Products" },
  { path: "/Login", element: <Login />, title: "Login" },
  { path: "/Chat", element: <Chat />, title: "Chat" },
];

export default routes;
