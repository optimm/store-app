import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<><Navbar /><Home/></>} />
      <Route path="/catalogue" element={<><Navbar /><Catalogue/></>} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
