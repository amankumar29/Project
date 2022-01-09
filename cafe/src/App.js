import Navbar from "./Component/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Component/navbar/Home";
import Login from "./Component/navbar/Login";
import Cart from "./Component/navbar/Cart";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
