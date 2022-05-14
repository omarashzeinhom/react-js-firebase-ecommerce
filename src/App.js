import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
//Dont delete this breaks website
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
// Dont delete this breaks webs
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/" element={<Home />} />

          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
