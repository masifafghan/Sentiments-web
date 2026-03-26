import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Store from "./Pages/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Store" element={< Store />} />
    </Routes>
  );
}

export default App;