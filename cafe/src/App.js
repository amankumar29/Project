import Navbar from "./Component/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Component/navbar/Home";
import Login from "./Component/navbar/Login";
import Cart from "./Component/navbar/Cart";
import Slider from "./Component/Slider";
import banner from "./Data/data.json";
import Card from "./Component/Card";
import './App.css'

function App() {
  return (
    <>
    {/* <h6>{JSON.stringify(banner)}</h6> */}
    
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>
    <Slider banner = {banner} />
    <Card />
    </div>
    
    </>
  );
}

export default App;
