import { createBrowserRouter } from "react-router-dom";
import Home from "./App/Home";
import About from "./App/About";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
