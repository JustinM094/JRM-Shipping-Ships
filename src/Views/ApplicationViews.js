import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/Navbar.js";
import { Welcome } from "../components/welcome/Welcome.js";
import { DisplayShippingShips } from "../components/shipping-ships/ShippingShips.js";

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
        <Route path="ships" index element={<DisplayShippingShips />} />
      </Route>
    </Routes>
  );
};
