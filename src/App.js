import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./Views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  );
};
