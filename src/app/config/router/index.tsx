import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ListRoutes } from "./routes";

export const Router = () => (
  <Suspense fallback="Loading...">
    <Routes>
      {Object.entries(ListRoutes).map(([path, Element]) => (
        <Route
          key={path}
          path={path}
          element={<Element />}
        />
      ))}
    </Routes>
  </Suspense>
);