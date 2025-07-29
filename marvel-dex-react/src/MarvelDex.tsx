import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const MarvelDex = () => {
  // MAIN LAYOUT FOR ROUTES
  return (
    <div className="bg-black w-screen h-screen">
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
