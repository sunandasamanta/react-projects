import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importing Layout
import Layout from "./Layout";

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main className="relative">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
