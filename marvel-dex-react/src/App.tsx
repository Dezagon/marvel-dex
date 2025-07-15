// import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);
  // MAIN LAYOUT FOR ROUTES
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
