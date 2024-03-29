import React from "react";
import ReactDOM from "react-dom/client";
import {
   Navigate,
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Liked from "./pages/Liked";
import Explorer from "./pages/Explorer";
import Search from "./pages/Search";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" Component={App}>
         <Route index element={<Navigate to="explorer" />} />
         <Route path="explorer" Component={Explorer} />
         <Route path="liked" Component={Liked} />
         <Route path="search" Component={Search} />
         <Route path="*" element={<span>404</span>} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
