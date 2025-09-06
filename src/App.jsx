import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./pages/Home";
import MyApplication from "./pages/MyApplication";
import ContactUs from "./pages/ContactUs";
import Companies from "./pages/Companies";

import "./App.css";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "application", element: <MyApplication /> },
      { path: "contact", element: <ContactUs /> },
      { path: "companies", element: <Companies /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
