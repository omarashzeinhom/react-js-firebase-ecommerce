import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
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
