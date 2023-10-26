import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/Navbar.js";
import { Welcome } from "../components/welcome/Welcome.js";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  );
};
