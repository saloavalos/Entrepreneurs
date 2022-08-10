import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/projects/:projectName"
          element={<MyProjectsPreviewProject />}
        /> */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
