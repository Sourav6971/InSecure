import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
