import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.tsx";
import { Heroes } from "./components/Heroes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          {/* <Route path="heroes" element={<Villains />} /> */}
          {/* <Route path="comics" element={<Comics />} /> */}
          {/* <Route path="locations" element={<Locations />} /> */}
          {/* <Route path="teams" element={<Teams />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
