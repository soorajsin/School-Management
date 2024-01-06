import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Condition from "./Components/Choose/Condition";
import Nav from "./Components/Navbar/Nav";
import Student from "./Components/Social/StudentData/Student";
import Teacher from "./Components/Social/TeacherData/Teacher";
import AddData from "./Components/Profile/AddData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose" element={<Condition />} />
          <Route path="/student" element={<Student/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/addData" element={<AddData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
