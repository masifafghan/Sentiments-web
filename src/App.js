import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Store from "./Pages/Store";
import Cart from "./Pages/Order Cart";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Store" element={< Store />} />
      <Route path="cart" element={<Cart/>}/>
    </Routes>
  );
}

export default App;