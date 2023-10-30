import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/Navbar.js";
import { Welcome } from "../components/welcome/Welcome.js";
import { DisplayShippingShips } from "../components/shipping-ships/ShippingShips.js";
import { DisplayHaulers } from "../components/haulers/Haulers.js";
import { DisplayDocks } from "../components/docks/Docks.js";
import { EditHaulers } from "../components/haulers/EditHaulers.js";

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
        <Route path="ships" element={<DisplayShippingShips />} />
        <Route path="haulers" index element={<DisplayHaulers />} />
        <Route path="haulers/:haulerId/edit" element={<EditHaulers />} />
        <Route path="docks" element={<DisplayDocks />} />
      </Route>
    </Routes>
  );
};
