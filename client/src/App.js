import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Condition from "./Components/Choose/Condition";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose" element={<Condition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
