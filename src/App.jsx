import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-dark-gray min-h-screen scrollbar-main">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
