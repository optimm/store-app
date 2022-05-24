import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Navbar from "./components/Navbar";
import AddStore from "./components/AddStore";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/catalogue" element={<><Navbar /><Catalogue /></>} />
          <Route path="/addstore" element={<><Navbar /><AddStore /></>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
