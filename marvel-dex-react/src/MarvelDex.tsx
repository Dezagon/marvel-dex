import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
// import Alert from "@mui/material/Alert";

export const MarvelDex: React.FC = () => {
  // MAIN LAYOUT FOR ROUTES
  return (
    <div className="bg-black w-screen h-screen">
      {/* {loginStatus && (
        <Alert severity="success" variant="filled">
          Logged in successfully!
        </Alert>
      )}
      {userCreated && (
        <Alert severity="success" variant="filled">
          Account created!
        </Alert>
      )} */}
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
