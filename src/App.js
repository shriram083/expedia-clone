import "./App.css";
import Package from "./pages/Package";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Package />
      <Footer />
    </div>
  );
}

export default App;
