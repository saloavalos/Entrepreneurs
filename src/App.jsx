import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Entrepreneurs from "./pages/entrepreneurs";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/entrepreneurs/:profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* if it's a unkown page */}
      {location.key !== "default" && <Footer />}
    </>
  );
}

export default App;
