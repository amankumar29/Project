import Navbar from "./Component/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Component/navbar/Home";
import Menu from "./Component/navbar/Menu";
import Login from "./Component/navbar/Login";
import Cart from "./Component/navbar/Cart";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
