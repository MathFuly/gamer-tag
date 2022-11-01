import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-dark-gray min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
