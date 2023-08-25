import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Profile from "./Component/Profile/Profile";
import About from "./Component/About/About";


function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Component/Profile/Profile" element={<Profile />} />
        <Route path="/Component/About/About" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
