import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Store from "./Pages/Store";
import Cart from "./Pages/Order Cart";
import Order from "./Pages/Orderconfirm";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Store" element={< Store />} />
      <Route path="cart" element={<Cart/>}/>
      <Route path="order" element={<Order/>}/>
    </Routes>
  );
}

export default App;