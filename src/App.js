import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "./App.css";
import Package from "./pages/Package";
import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/package">
        <Button>Package</Button>
      </Link>
      <Link to="/package/1">
        <Button>Package Details</Button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/package/:id" element={<PackageDetails />} />
      </Routes>
    </div>
  );
}

export default App;
