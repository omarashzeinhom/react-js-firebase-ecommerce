import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
//Dont delete this breaks website
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
// Dont delete this breaks webs
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>

        <Route exact path="/checkout" element={<Checkout/>}>
        </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
