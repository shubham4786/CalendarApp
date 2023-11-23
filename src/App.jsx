import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./containers/Home";

import Login from "./containers/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
